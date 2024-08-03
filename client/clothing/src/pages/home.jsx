import React from "react";
import LogIn from "../components/LogIn";
import icon from "../images/icon.png";
import model from "../images/model.jpg";
import garment from "../images/garment.jpg";
import converted from "../images/converted.jpg";
import plus from "../images/plus.png";
import equals from "../images/equals.png";
import Logout from "../components/Logout";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between p-6 backdrop-blur-sm bg-primary/40">
        <a
          className="flex gap-2 font-black text-xl hover:text-white items-center"
          href="/"
        >
          <img src={icon} alt="Logo" className="w-[24px] h-[24px]"></img>
          <p>FittingRoom</p>
        </a>
        <div className="flex gap-4 items-center">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a href="#faq" className="hover:text-white">
            Pricing
          </a>
          <LogIn />
        </div>
      </nav>
      <section id="hero" className="w-full text-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-7xl font-black mt-40 bg-gradient-to-b from-[#F0ACFF] to-[#A8B5FF] inline-block text-transparent bg-clip-text">
            Step Into the Future of Fashion
          </h1>
          <p className="text-xl max-w-[50ch]">
            Experience the future of fashion. Try on clothes from your favorite
            brands, all from the comfort of your home.
          </p>
          <div className="flex gap-5">
            <LogIn />
            <a variant="text" className="flex items-center gap-2" href="#about">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full flex gap-8 justify-center pt-20 items-center ">
          <div>
            <p className="py-2">1. Your Photo</p>
            <img
              src={model}
              alt="Logo"
              className="rounded-3xl w-[300px] aspect-[3/4]"
            ></img>
          </div>
          <img src={plus} alt="Logo" className=" rounded-3xl h-[50px]"></img>

          <div>
            <p className="py-2">2. Your Garment of Choice</p>
            <img
              src={garment}
              alt="Logo"
              className="rounded-3xl w-[300px] aspect-[3/4]"
            ></img>
          </div>
          <img src={equals} alt="Logo" className="h-[30px]"></img>

          <div>
            <p className="py-2">3. The Result</p>
            <img
              src={converted}
              alt="Logo"
              className="rounded-3xl w-[300px] aspect-[3/4]"
            ></img>
          </div>
        </div>
      </section>
      <About />
      <FAQ />
      <Footer />
    </>
  );
}
