import React from "react";

export default function FAQ() {
  return (
    <section className="space-y-4 max-w-screen-md mx-auto py-40 px-4" id="faq">
      <h2 className="text-3xl font-bold text-center pb-8 flex justify-center bg-gradient-to-b from-[#F0ACFF] to-[#A8B5FF] inline-block text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg border-gray-500/20 bg-secondary p-4 text-gray-300">
          <h2 className="font-medium">What is this service about?</h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-400">
          {`Our service uses AI technology to help you visualize how clothes will
          look on you before you purchase them online. Simply upload a photo of
          yourself and the garment you're interested in, and see how it fits
          virtually.`}
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg border-gray-500/20 bg-secondary p-4 text-gray-300">
          <h2 className="font-medium">How do I use the service?</h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-400">
          <b>1. Upload a Photo:</b> Start by uploading a clear picture of
          yourself.
        </p>
        <p className="mt-4 px-4 leading-relaxed text-gray-400">
          <b>2. Choose a Garment:</b> Select the clothing item you wish to try
          on.
        </p>
        <p className="mt-4 px-4 leading-relaxed text-gray-400">
          <b>3. View the Results:</b> Our AI will generate an image of you
          wearing the garment, so you can see how it looks.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg border-gray-500/20 bg-secondary p-4 text-gray-300">
          <h2 className="font-medium">
            How can companies integrate this into their e-commerce site?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-400">
          We offer an API that can be seamlessly integrated into existing
          e-commerce platforms, enhancing the shopping experience by providing
          virtual fitting previews and increasing customer engagement.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg border-gray-500/20 bg-secondary p-4 text-gray-300">
          <h2 className="font-medium">
            What are the environmental benefits of using this service?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-400">
          By reducing the number of returns and the need for excess stock, our
          service helps decrease waste and supports environmental
          sustainability. Fewer returns mean less packaging waste and a smaller
          carbon footprint.
        </p>
      </details>
    </section>
  );
}
