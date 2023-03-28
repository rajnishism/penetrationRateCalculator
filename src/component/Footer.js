import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <div className="mt-6">
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 ">
          <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <a href="/" class="flex items-center mb-4 sm:mb-0">
                <img
                  src="/images/logo.png"
                  className="lg:h-12 mr-3 "
                  alt="Flowbite Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
              <ul class=" text-center  lg:flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <Link
                    to="/usbm"
                    class="mr-4 hover:underline md:mr-6 "
                    onClick={topFunction}
                  >
                    USBM
                  </Link>
                </li>
                <li>
                  <Link
                    to="/norway"
                    class="mr-4 hover:underline md:mr-6"
                    onClick={topFunction}
                  >
                    NORWAY
                  </Link>
                </li>
                <li>
                  <Link
                    to="/benaola"
                    class="mr-4 hover:underline md:mr-6 "
                    onClick={topFunction}
                  >
                    BENAOLA
                  </Link>
                </li>

                <li>
                  <Link
                    to="/bauerandcalder"
                    class="mr-4 hover:underline md:mr-6 "
                    onClick={topFunction}
                  >
                    BAUER & CALDER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/baurer"
                    class="mr-4 hover:underline md:mr-6"
                    onClick={topFunction}
                  >
                    BAUER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calderandworkman"
                    class="mr-4 hover:underline md:mr-6"
                    onClick={topFunction}
                  >
                    CALDER & WORKMAN
                  </Link>
                </li>
              </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="text-center">Made with ❤️ by Rajnish Kumar</div>
            <br />
            <div className="text-center block text-sm  text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a
                href="https://github.com/rajnishism/penetrationRateCalculator"
                class="hover:underline"
              >
                PenetratinRateCalculator
              </a>
              . All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
