import React from "react";

export default function Landing() {
  return (
    <>
      {/* temp */}
      <section className="sticky bg-[#262626] flex justify-between items-center top-0 text-white pt-2">
        <div className="flex flex-row space-x-3 justify-center items-center pl-12">
          <p>IMG HERE</p>
          <h1 className="text-white font-bold text-2xl">FittingRoom</h1>
        </div>
        <nav className="flex flex-row justify-center space-x-4 px-3 items-center">
          <a className="text-white hover:underline hover:text-white">
            Examples
          </a>
          <a>About</a>
          <a>Pricing</a>
          <a>FAQ</a>
          <button className="rounded-xl w-full h-full px-9 py-2 bg-purple-900 flex justify-center items-center">
            <h4>Try Now</h4>
          </button>
        </nav>
      </section>
      <body className="pt-24 w-full flex flex-col items-center text-white">
        <h1 className="font-bold text-center mb-10 text-5xl">
          Discover Your Perfect Look
        </h1>
        <h5 className="w-1/2 text-center text mb-5">
          Experience the future of fashion. Try on clothers from your favourite
          brands, all from the comfort of your home.{" "}
        </h5>
        <button className="rounded-xl px-7 bg-purple-900 text-black py-2 text-sm">
          Try Now
        </button>
      </body>
    </>
  );
}
