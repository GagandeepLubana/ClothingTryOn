import React, { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import SelectPose from "../components/SelectPose";
import SelectGarment from "../components/SelectGarment";
import person1 from "../images/poses/person1.jpg";
import garment1 from "../images/garments/garment1.jpg";
import converted1 from "../images/converted.jpg";
import loadingSpinner from "../images/icons/loading.png";
import Modal from "../components/Modal";
import { Client } from "@gradio/client";


export default function TryOn() {
  const [poseImage, setPoseImage] = useState(person1); // Initial pose image
  const [garmentImage, setGarmentImage] = useState(garment1); // Initial garment image
  const [loading, setLoading] = useState(false); // Initial garment image
  const [modalOpened, setModalOpened] = useState(false);
  const [output, setOutput] = useState(false);

  const handleDiffusionApi = async () => {
    if (!poseImage || !garmentImage) return;
    try {
      console.log(poseImage);
      const response_0 = await fetch(poseImage)
      const poseBlob = await response_0.blob();

      const response_1 = await fetch(garmentImage)
      const garmentBlob = await response_1.blob();

      const client = await Client.connect("levihsu/OOTDiffusion");
      const api_info = await client.view_api();
      console.log(api_info);
      console.log("yes");
      const result = await client.predict("/process_hd", {
        vton_img: poseBlob, 
				garm_img: garmentBlob, 		
        n_samples: 1, 		
        n_steps: 20, 		
        image_scale: 1, 		
        seed: -1, 
      });
      console.log(result.data);
      const data = result.data[0][0].image.url
      console.log(data)
      setOutput(data);
      setLoading(false);
      setModalOpened(true);
    } catch (error) {
      console.log(error)
    }

    

    
    
  }


  const handlePoseImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPoseImage(imageUrl);
    }
  };

  const handleGarmentImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setGarmentImage(imageUrl);
    }
  };

  const handleTryItClick = () => {
    setLoading(true);

    // TODO: wait for api result
    try {
      handleDiffusionApi();
      
    } catch (err) {
      console.log(err)
    }
      
      

      
   
    // console.log("Pose Image:", poseImage);
    // console.log("Garment Image:", garmentImage);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="relative flex flex-col w-fit mx-auto items-center gap-4">
        <h1 className="text-3xl font-black mt-20 bg-gradient-to-b from-[#F0ACFF] to-[#A8B5FF] inline-block text-transparent bg-clip-text">
          Try-On Garments
        </h1>
        <div className="w-full flex gap-4 p-2 justify-center">
          <SelectPose
            selectedImage={poseImage}
            onImageUpload={handlePoseImageUpload}
          />
          <SelectGarment
            selectedImage={garmentImage}
            onImageUpload={handleGarmentImageUpload}
          />
        </div>
        <button
          className="text-black bg-gradient-to-r from-[#F0ACFF] to-[#A8B5FF] hover:bg-gradient-to-br font-extrabold rounded-lg text-base px-5 py-2.5 text-center cursor-pointer flex justify-center items-center w-[300px]"
          onClick={handleTryItClick}
        >
          {loading ? (
            <div className="flex gap-4 font-medium animate-pulse">
              <img
                src={loadingSpinner}
                alt="load spinner"
                className="w-[20px] animate-spin opacity-80"
              ></img>
              This could take a while...
            </div>
          ) : modalOpened ? (
            "Success"
          ) : (
            "TRY IT ON"
          )}
        </button>
        {modalOpened && (
          <Modal selectedImage={output} setModalOpened={setModalOpened} poseImage={poseImage} garmentImage={garmentImage}/>
        )}
      </div>
    </div>
  );
}
