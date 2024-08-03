import React, { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import SelectPose from "../components/SelectPose";
import SelectGarment from "../components/SelectGarment";
import person1 from "../images/poses/person1.jpg";
import garment1 from "../images/garments/garment1.jpg";
import converted1 from "../images/converted.jpg";
import loadingSpinner from "../images/icons/loading.png";
import Modal from "../components/Modal";

export default function TryOn() {
  const [poseImage, setPoseImage] = useState(person1); // Initial pose image
  const [garmentImage, setGarmentImage] = useState(garment1); // Initial garment image
  const [loading, setLoading] = useState(false); // Initial garment image
  const [modalOpened, setModalOpened] = useState(false);

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
    setTimeout(() => {
      setLoading(false);

      setModalOpened(true);
    }, 3000);
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
          <Modal selectedImage={converted1} setModalOpened={setModalOpened} />
        )}
      </div>
    </div>
  );
}
