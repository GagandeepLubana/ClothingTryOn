import React from "react";
import LogIn from "../components/LogIn";
import icon from "../images/icon.png";
import model from "../images/model.jpg";
import garment from "../images/garment.jpg";
import converted from "../images/converted.jpg";
import plus from "../images/plus.png";
import equals from "../images/equals.png";
import Logout from "../components/Logout"

export default function Home() {
    return (
        <>
          <nav className="fixed top-0 left-0 w-full flex justify-between p-6">
            <a className="flex gap-2 font-black text-xl hover:text-white" href="/">
              <img src={icon} alt="Logo" className="w-[24px] h-[24px]"></img>
              <p>FittingRoom</p>
            </a>
            <div className="flex gap-4 items-center">
              <a href="/examples" className="hover:text-white">
                Examples
              </a>
              <a href="/about" className="hover:text-white">
                About
              </a>
              <a href="/faq" className="hover:text-white">
                FAQ
              </a>
              <a href="/pricing" className="hover:text-white">
                Pricing
              </a>
              <LogIn />
              <Logout />
            </div>
          </nav>
          <section id="hero" className="w-screen h-screen text-center">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-7xl font-black pt-40 ">
                Discover Your Perfect Look
              </h1>
              <p className="text-xl max-w-[50ch]">
                Experience the future of fashion. Try on clothes from your favorite
                brands, all from the comfort of your home.
              </p>
              <LogIn />
            </div>
    
            <div className="w-full flex gap-8 justify-center pt-20 items-center">
              <div>
                <p className="py-2">1. Your Photo</p>
                <img src={model} alt="Logo" className="rounded-3xl h-[400px]"></img>
              </div>
              <img src={plus} alt="Logo" className=" rounded-3xl h-[50px]"></img>
    
              <div>
                <p className="py-2">2. Your Garment of Choice</p>
                <img
                  src={garment}
                  alt="Logo"
                  className="rounded-3xl h-[400px]"
                ></img>
              </div>
              <img src={equals} alt="Logo" className="h-[30px]"></img>
    
              <div>
                <p className="py-2">3. The Result</p>
                <img
                  src={converted}
                  alt="Logo"
                  className="rounded-3xl h-[400px]"
                ></img>
              </div>
            </div>
          </section>
        </>
      );
}