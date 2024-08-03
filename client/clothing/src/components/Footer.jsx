import React from "react";
import icon from "../images/icon.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-8 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-textPrimary">
            <a
              className="flex gap-2 font-black text-xl hover:text-white"
              href="/"
            >
              <img src={icon} alt="Logo" className="w-[24px] h-[24px]"></img>
              <p>FittingRoom</p>
            </a>
          </div>

          {/* Links */}
          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="https://github.com/GagandeepLubana/ClothingTryOn"
                rel="noreferrer"
                target="_blank"
                className="text-gray-500 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://devpost.com/software/fittingroom-d85nrt?ref_content=user-portfolio&ref_feature=in_progress"
                rel="noreferrer"
                target="_blank"
                className="text-gray-500 transition hover:opacity-75"
              >
                <span className="sr-only">DevPost</span>
                <svg
                  fill="currentColor"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-500 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-8">
          <div>
            <p className="font-medium text-gray-100">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  E-Commerce Integration
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Try the Demo
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-100">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Meet the Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-100">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-100">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Accessibility
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Returns Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2024. FittingRoom. All rights reserved.
          <a
            className="text-teal-200"
            href="https://devpost.com/software/fittingroom-d85nrt?ref_content=user-portfolio&ref_feature=in_progress"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Submission for HackThe6ix 2024.
          </a>
        </p>
      </div>
    </footer>
  );
}
