import React from "react";
import logo from "../assets/logo/nifa-new-logo.png";
import { HiMail } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
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

        <div className="bg-white w-full lg:w-3/5 mx-auto lg:px-0 md:px-6 sm:px-4 px-2">
          <div className="flex md:flex-row flex-col justify-between text-sm font-light">
            <div className="mx-auto md:mx-0">
              <img src={logo} alt="brand-log" className="h-14 object-cover" />
            </div>
            <div className="mx-auto md:hidden block py-2">
              <span className="flex space-x-2 mb-2">
                <IoIosMail className="mt-1 text-[#0b1f71] text-xl"></IoIosMail>
                <span className="text-base tracking-wider">
                  admission@nifafinearts.com
                </span>
              </span>
              <span className="flex space-x-2">
                <FaPhoneAlt className="mt-1 text-[#0b1f71] text-base"></FaPhoneAlt>
                <span className="text-base tracking-wider">
                  +91-9555112200 / 9810130552
                </span>
              </span>
            </div>
            <div className="md:hidden block">
              <p className="py-2 px-4 rounded bg-[#0b1f71] text-white mx-4 hover:border-2 border-yellow-500 text-base">
                Home
              </p>
            </div>

            <ul className="nav-list flex flex-wrap px-2 py-2 my-auto space-x-3">
              <li className="md:block hidden">Home</li>
              <li className="md:block hidden">About</li>
              <li className="md:block hidden">Courses</li>
              <li className="md:block hidden">Activities</li>
              <li className="md:block hidden">Admission</li>
              <li className="md:block hidden">Art gallery</li>
              <li className="md:block hidden">Franchise</li>
              <li className="md:block hidden">Online Classes</li>
              <li className="md:block hidden">Video</li>
              <li className="md:block hidden">Pay Fee</li>
              <li className="md:block hidden">Contact</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
