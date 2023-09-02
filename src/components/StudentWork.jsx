import React from 'react'
import img1 from "../assets/studentWork/img1.jpg"
import img2 from "../assets/studentWork/img2.jpg"
import img3 from "../assets/studentWork/img3.jpg"
import img4 from "../assets/studentWork/img4.jpg"
import img5 from "../assets/studentWork/img5.jpeg"
import img6 from "../assets/studentWork/img6.jpeg"
import img7 from "../assets/studentWork/img17.jpg"
import img8 from "../assets/studentWork/img8.jpg"
import img9 from "../assets/studentWork/img9.jpg"
import img10 from "../assets/studentWork/img10.jpg"
import img11 from "../assets/studentWork/img11.jpg"
import img12 from "../assets/studentWork/img12.jpg"
import img13 from "../assets/studentWork/img13.jpg"

function StudentWork() {
  return (
    <div className='w-full lg:w-3/5 mx-auto my-10'>
      <h2 className='font-bold text-2xl lg:text-3xl text-center my-6'>Students Work</h2>
      <div className='flex flex-wrap gap-6 '>
      <img src={img1} className='rounded-xl h-64' alt="" />
      <img src={img2} className='rounded-xl h-64' alt="" />
      <img src={img3} className='rounded-xl h-64' alt="" />
      <img src={img4} className='rounded-xl h-64' alt="" />
      <img src={img5} className='rounded-xl h-64' alt="" />
      <img src={img6} className='rounded-xl h-64' alt="" />
      <img src={img7} className='rounded-xl h-64' alt="" />
      <img src={img8} className='rounded-xl h-64' alt="" />
      <img src={img9} className='rounded-xl h-64' alt="" />
      <img src={img10} className='rounded-xl h-64' alt="" />
      <img src={img11} className='rounded-xl w-64' alt="" />
      <img src={img12} className='rounded-xl w-64' alt="" />
      </div>

        
    </div>
  )
}

export default StudentWork