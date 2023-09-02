import React from 'react'
import {FaWhatsapp} from "react-icons/fa";
import Header from '../components/Header'
import Carosoule from '../components/Carosoule'
import Heros from '../components/Heros'
import OnlineClass from '../components/OnlineClass';
import Footer from '../components/Footer'
import StudentTestimonial from '../components/StudentTestimonial.jsx';
import StudentWork from '../components/StudentWork';
import OurCource from '../components/OurCource';

function Home() {
  return (
    <>
    <Header/>
    <Carosoule/>
    <Heros/>
    <OnlineClass/>
    <OurCource/>
    <StudentWork/>
    <StudentTestimonial/>
    <Footer/>
    <div className="p-2 text-3xl text-white bg-green-500 rounded-full shadow-xl shadow-gray-500 outline-none fixed bottom-28 right-4">
          <a
            href="https://api.whatsapp.com/send?phone=919555112200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp/>
          </a>
        </div>
    </>
  )
}

export default Home