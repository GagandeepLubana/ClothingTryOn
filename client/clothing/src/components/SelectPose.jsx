import React, { useRef, useState } from "react";

export default function SelectPose({ selectedImage, onImageUpload }) {
  const fileInputRef = React.useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col w-fit h-fit gap-3 p-2 rounded-lg outline outline-1 outline-[#3F3F3F] bg-tertiary justify-center items-center">
      <p className="font-bold text-lg">Choose your pose</p>
      <img
        src={selectedImage}
        alt="Logo"
        className="rounded-xl w-[300px] aspect-[3/4]"
      ></img>
      <button
        onClick={handleClick}
        className="p-2 bg-secondary w-full rounded-xl"
      >
        Upload Image
      </button>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={onImageUpload}
      />
    </div>
  );
}
