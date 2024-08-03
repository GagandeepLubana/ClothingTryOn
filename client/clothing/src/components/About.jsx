import React from "react";
import photo from "../images/icons/photo.png";
import clothes from "../images/icons/clothesColored.png";
import vision from "../images/icons/vision.png";
import ecom from "../images/icons/ecom.png";
import natural from "../images/icons/natural.png";
import personal from "../images/icons/personal.png";

export default function About() {
  return (
    <section className=" text-textPrimary">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Transform Your Online Shopping Experience
          </h2>

          <p className="mt-4 text-gray-300">
            {`Say goodbye to the frustration of online shopping with our
            revolutionary AI-driven fitting solution. Upload a photo and preview
            how any garment looks on you before making a purchase. No more
            buyer's remorse—just perfect fits and smarter shopping. Experience
            it now!`}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img src={photo} alt="photo" className="w-[30px]"></img>

            <h2 className="mt-4 text-xl font-bold text-white">
              Upload Your Photo
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Quickly submit a clear photo of yourself. Our AI will use this as
              a base to visualize how the clothes will look on you.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img src={clothes} alt="clothes" className="w-[30px]"></img>

            <h2 className="mt-4 text-xl font-bold text-white">
              Select Your Garment
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Pick the clothing item you're interested in. You can upload an
              image of any garment you want to try on.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img src={vision} alt="clothes" className="w-[30px]"></img>

            <h2 className="mt-4 text-xl font-bold text-white">
              Preview the Fit
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Our AI will generate a realistic image of you wearing the chosen
              garment, allowing you to see how it looks and fits before making a
              purchase.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img src={ecom} alt="clothes" className="w-[30px]"></img>

            <h2 className="mt-4 text-xl font-bold text-white">
              E-Commerce Integration
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Retailers can integrate our API into their e-commerce platforms,
              providing a personalized shopping experience that increases
              customer engagement and boosts conversion rates.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img src={natural} alt="clothes" className="w-[30px]"></img>

            <h2 className="mt-4 text-xl font-bold text-white">
              Reduces Returns and Waste
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              By helping customers make better-informed decisions, our service
              minimizes the likelihood of returns and reduces the environmental
              impact associated with fast fashion.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img src={personal} alt="clothes" className="w-[30px]"></img>

            <h2 className="mt-4 text-xl font-bold text-white">
              Convenient and Personalized
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Users can create an account to save their favorite outfits and
              photos, making it easier to revisit and decide on purchases,
              saving time and enhancing convenience.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
