import React, { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import SelectPose from "../components/SelectPose";
import SelectGarment from "../components/SelectGarment";
import person1 from "../images/poses/person1.jpg";
import garment1 from "../images/garments/garment1.jpg";

export default function TryOn() {
  const [poseImage, setPoseImage] = useState(person1); // Initial pose image
  const [garmentImage, setGarmentImage] = useState(garment1); // Initial garment image

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
    // console.log("Pose Image:", poseImage);
    // console.log("Garment Image:", garmentImage);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-fit mx-auto">
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
          className="text-black bg-gradient-to-r from-[#F0ACFF] to-[#A8B5FF] hover:bg-gradient-to-br font-extrabold rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
          onClick={handleTryItClick}
        >
          TRY IT
        </button>
      </div>
    </div>
  );
}
