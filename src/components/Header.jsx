import React from "react";
import logo from "../assets/logo/nifa-new-logo.png";
import { HiMail } from "react-icons/hi";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
export default function Header() {
  return (
    <>
      <header>
        <div className="bg-gradient-to-r from-[#812868] to-[#f954a4] text-white text-sm font-light py-2">
          <div className="w-full lg:w-3/5 mx-auto flex flex-wrap items-center justify-between">
            <div className="mx-auto lg:mx-0">
              Welcome to the National Institute of Fine Arts
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-6 mx-auto lg:mx-0">
              <span className="flex space-x-2">
                <FaPhoneAlt className="mt-1 text-xs"></FaPhoneAlt>
                <span className="">9555112200</span>
              </span>
              <span className="flex space-x-2 ">
                <FaPhoneAlt className="mt-1 text-xs"></FaPhoneAlt>
                <span className=" ">9810130552</span>
              </span>
              <span className="flex space-x-2">
                <HiMail className="mt-1"></HiMail>
                <span className="">admission@nifafinearts.com</span>
              </span>

              <div className="flex items-center space-x-2 text-xs">
                <a href="https://www.facebook.com/nifafinearts">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/artsnifa?lang=en">
                  <FaTwitter />
                </a>

                <a href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-full lg:w-3/5 mx-auto lg:px-0 md:px-6 sm:px-4 px-2 flex flex-wrap items-center justify-between text-sm font-light">
          <div>
            <img src={logo} alt="brand-log" className=" object-cover h-14" />
          </div>
          {/* <div className="mx-auto">
              <div className="md:hidden block">
                <img src={logo} alt="brand-log" className=" object-cover h-14" />

              </div>
            
            <div className=" text-center text-indigo-900 md:hidden block">
            <span className="flex space-x-2">
                <HiMail className="mt-1"></HiMail>
                <span className="">admission@nifafinearts.com</span>
              </span>
            <span className="flex space-x-2">
                <FaPhoneAlt className="mt-1 text-xs"></FaPhoneAlt>
                <span className="">9555112200/9810130552</span>
              </span>

            </div>

            </div> */}

          <div className="flex flex-wrap items-center justify-center space-x-6 mx-auto lg:mx-0">
            <ul className="nav-list flex flex-wrap px-2 py-2 space-x-3 ">
              <li className="hidden md:block">Home</li>
              <li className="hidden md:block">About</li>
              <li className="hidden md:block">Courses</li>
              <li className="hidden md:block">Activities</li>
              <li className="hidden md:block">Admission</li>
              <li className="hidden md:block">Art gallery</li>
              <li className="hidden md:block">Franchise</li>
              <li className="hidden md:block">Online Classes</li>
              <li className="hidden md:block">Video</li>
              <li className="hidden md:block">Pay Fee</li>
              <li className="hidden md:block">Contact</li>
            </ul>
          </div>
        </div>

        {/* <nav
          className="mx-auto flex md:mx-10 items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <img src="" alt="" />
          </div>

          <div className="text-lg md:flex lg:flex-1 lg:justify-end gap-5">
            <a
              to="/About"
              className=" hidden md:block font-semibold text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100"
            >
              About Us
            </a>
            <a
              to="/Product"
              className=" hidden md:block font-semibold text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100"
            >
              Product
            </a>

            <a
              to="/Cart"
              className="font-semibold block text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100"
            >
              Cart<span className="text-superscript text-red-500"></span>
            </a>

            <a
              to="/Contact"
              className="hidden md:block font-semibold text-white py-2 px-4 rounded-lg bg-blue-900"
            >
              Contact US
            </a>
          </div>
        </nav> */}
      </header>
    </>
  );
}
