import React, { useRef, useState, useEffect } from "react";
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
  const [showCamera, setShowCamera] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (showCamera) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [showCamera]);

  const handleDiffusionApi = async () => {
    if (!poseImage || !garmentImage) return;
    try {
      setLoading(true);
      const response_0 = await fetch(poseImage);
      const poseBlob = await response_0.blob();

      const response_1 = await fetch(garmentImage);
      const garmentBlob = await response_1.blob();

      const client = await Client.connect("levihsu/OOTDiffusion");
      const result = await client.predict("/process_hd", {
        vton_img: poseBlob,
        garm_img: garmentBlob,
        n_samples: 1,
        n_steps: 20,
        image_scale: 1,
        seed: -1,
      });
      const data = result.data[0][0].image.url;
      setOutput(data);
      setLoading(false);
      setModalOpened(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handlePoseImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPoseImage(imageUrl);
    }
  };

  const handleGarmentImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setGarmentImage(imageUrl);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraError(null);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setCameraError(
        "Failed to access camera. Please check your permissions and try again."
      );
      setShowCamera(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL("image/jpeg");
      setPoseImage(imageDataUrl);
      setShowCamera(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const toggleCamera = () => {
    setShowCamera((prev) => !prev);
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
          className="text-black bg-gradient-to-r from-[#F0ACFF] to-[#A8B5FF] hover:bg-gradient-to-br font-extrabold rounded-lg text-base px-5 py-2.5 text-center cursor-pointer flex justify-center items-center w-[300px] mb-2"
          onClick={toggleCamera}
        >
          {showCamera ? "Stop Camera" : "Take Picture"}
        </button>
        {showCamera && (
          <div className="relative w-[300px] h-[300px]">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover mb-2"
            />
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full"
              onClick={captureImage}
            >
              Capture
            </button>
          </div>
        )}
        {cameraError && (
          <p className="text-red-500 text-sm mt-2">{cameraError}</p>
        )}
        <canvas ref={canvasRef} style={{ display: "none" }} />
        <button
          className="text-black bg-gradient-to-r from-[#F0ACFF] to-[#A8B5FF] hover:bg-gradient-to-br font-extrabold rounded-lg text-base px-5 py-2.5 text-center cursor-pointer flex justify-center items-center w-[300px]"
          onClick={handleDiffusionApi}
        >
          {loading ? (
            <div className="flex gap-4 font-medium animate-pulse">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              This could take a while...
            </div>
          ) : modalOpened ? (
            "Success"
          ) : (
            "TRY IT ON"
          )}
        </button>
        {modalOpened && (
          <Modal
            selectedImage={output}
            setModalOpened={setModalOpened}
            poseImage={poseImage}
            garmentImage={garmentImage}
          />
        )}
      </div>
    </div>
  );
}
