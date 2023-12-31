import React from "react";
import background from "../assets/footer/fotbg2.jpeg";
import gplay from "../assets/footer/gplay.png";
import appstore from "../assets/footer/appstore.png";
import {FaFacebookF,FaTwitter,FaYoutube, FaInstagram} from "react-icons/fa"
function Footer() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="footer w-full lg:w-3/5 mx-auto  body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 w-1/2">
                <h2 className="tracking-widest text-gray-900 mb-3 text-base lg:text-sm font-semibold text-left">
                  Company
                </h2>
                <nav className="flex flex-col sm:items-start text-left font-normal text-base lg:text-sm -mb-1 space-y-1">
                  <a href="#">About</a>
                  <a href="#">Facilities</a>
                  <a href="#">Career</a>
                  <a href="#">Contact us</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Refund Policy</a>
                  <a href="#">Privacy Policy</a>
                </nav>
              </div>
              <div className="p-4 lg:w-1/4 w-1/2">
                <h2 className="font-semibold tracking-widest text-gray-900 mb-3 text-base lg:text-sm text-left">
                  Activities
                </h2>
                <nav className="flex flex-col sm:items-start text-left font-normal text-base lg:text-sm -mb-1 space-y-1">
                  <a href="#">Art Gallery</a>
                  <a href="#">Workshops</a>
                  <a href="#">Outdoor Activities</a>
                  <a href="#">Media Coverage</a>
                  <a href="#">Art Events</a>
                  <a href="#">Exhibition</a>
                  <a href="#">Daily Activities</a>
                </nav>
              </div>
              <div className="p-4 lg:w-1/4 w-1/2 ">
                <h2 className="font-semibold tracking-widest text-gray-900 mb-3 text-base lg:text-sm text-left">
                  Popular Course
                </h2>
                <nav className="flex flex-col sm:items-start text-left font-normal text-base lg:text-sm -mb-1 space-y-1">
                  <a href="#">Diploma in Fine Arts</a>
                  <a href="#">Certificate Hobby Course</a>
                  <a href="#">Entrance Preparation</a>
                  <a href="#">BFA</a>
                  <a href="#">Animation Sketching</a>
                  <a href="#">Kids Diploma</a>
                </nav>
              </div>
              <div className="p-4 lg:w-1/4 w-1/2">
                <h2 className="font-semibold tracking-widest text-gray-900 mb-3 text-base lg:text-sm text-left">
                  Our Locations
                </h2>
                <nav className="flex flex-col sm:items-start text-left font-normal text-base lg:text-sm -mb-1 space-y-1">
                  <a href="#">Gurgaon (Dlf Phase - 4)</a>
                  <a href="#">Mumbai (Andheri West)</a>
                  <a href="#">South Delhi (Kailash Colony)</a>
                  <h2 className="font-semibold tracking-widest text-gray-900 text-base lg:text-sm py-3">International Branches</h2>
                  <a href="#">London</a>
                  <a href="#">USA</a>
                  <a href="#">Dubai, UAE</a>
                </nav>
              </div>
            </div>

            {/* footer end */}

            <div className="flex flex-col md:flex-row justify-between items-start mt-12">
              <div className="md:w-1/2 lg:w-3/5 text-left">
                <p className="text-lg lg:text-base tracking-wider text-gray-900 mb-1">
                  NIFA is a unit of Nifaedutech Pvt Ltd.
                </p>
                <p className="text-lg lg:text-base tracking-wider text-gray-900 mb-2">
                  Connect with us:
                </p>
                <p>
                  <a
                    href="tel:9555112200"
                    className="text-base font-light"
                    target="_top"
                  >
                    9555112200
                  </a>
                  ,
                  <a
                    href="tel:9810130552"
                    className="text-base font-light"
                    target="_top"
                  >
                    9810130552
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:admission@nifafinearts.com"
                    className="text-base lg:text-sm my-2 font-light"
                    target="_top"
                  >
                    admission@nifafinearts.com
                  </a>
                </p>
                <ul className="flex space-x-5 mt-2">
                  <li className="bg-white p-2 text-xl lg:text-base shadow rounded-full text-blue-600">
                    <a
                      href="https://www.facebook.com/nifafinearts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF/>
                    </a>
                  </li>
                  <li className=" bg-white p-2 text-xl lg:text-base shadow rounded-full text-cyan-500">
                    <a
                      href="https://twitter.com/artsnifa?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter/>
                    </a>
                  </li>
                  <li className="bg-white p-2 text-xl lg:text-base shadow rounded-full text-red-600">
                    <a
                      href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram/>
                    </a>
                  </li>
                  <li className="bg-white p-2 text-xl lg:text-base shadow rounded-full text-red-500">
                    <a
                      href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube/>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 lg:w-2/5 mt-4 md:mt-0 lg:text-right text-left">
                <p className="text-lg tracking-wide">Download the app</p>
                <ul className="flex items-end justify-end gap-5 nappimg mb-0 mt-2">
                  <li className="">
                    <a
                      href="https://play.google.com/store/apps/details?id=co.thanos.fljvr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gplay} alt="Google Play" className="h-10" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://apps.apple.com/us/app/apple-store/id1472483563"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={appstore} alt="App Store" className="h-10" />
                    </a>
                  </li>
                </ul>
                <p className="text-xs mt-2 font-light">
                  &copy; Copyright 2021 NIFA Fine Arts. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}

export default Footer;
