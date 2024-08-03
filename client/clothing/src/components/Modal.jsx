import React, { useRef, useState } from "react";

export default function Modal({ selectedImage, setModalOpened }) {
  const fileInputRef = React.useRef();

  const handleClick = () => {};

  return (
    <div className="fixed top-0 left-[250px] w-screen h-screen bg-primary">
      <div className="absolute top-1/2 left-1/2 -translate-x-[calc(50%+150px-0.625em)] -translate-y-1/2 flex flex-col w-fit h-fit gap-2 p-5 rounded-3xl outline outline-1 outline-[#3F3F3F] bg-tertiary justify-center items-center">
        {/* <p className="font-bold text-lg">Result</p> */}
        <h1 className="text-xl font-black bg-gradient-to-b from-[#F0ACFF] to-[#A8B5FF] inline-block text-transparent bg-clip-text">
          Cop or drop?
        </h1>
        <img
          src={selectedImage}
          alt="Logo"
          className="rounded-xl w-[300px] aspect-[3/4]"
        ></img>
        <button
          onClick={handleClick}
          className="p-2 bg-secondary w-full rounded-xl"
        >
          Share
        </button>
        <button
          //   onClick={handleClick}
          className="p-2 bg-secondary w-full rounded-xl"
        >
          Save
        </button>
        <button
          onClick={() => setModalOpened(false)}
          className="p-2 bg-secondary w-full rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}
