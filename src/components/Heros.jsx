import React from "react";
import Button from "./Button";

function Heros() {
  return (
    <>
      <div className="w-full lg:w-3/5 mx-auto">
        <div className="my-2 flex ">
            <span className="font-bold pr-12 inline">Nifa&nbsp;Updates::</span>
            <marquee className="text-[#b11e6f]">All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please&nbsp;download the NIFA app from our online classes page to register for a complimentary trial class.</marquee>
        </div>
        

        
        <div className="flex-col items-center justify-center text-center py-10 lg:px-0 px-4">
        <h1 className="font-bold text-[3.5vh] text-center mb-4">Welcome To National Institute of Fine Arts</h1>

          <p className="text-center text-sm font-light mb-4">
            National Institute of Fine Arts (NIFA) is a national center for
            education in arts, fostering the excellence of emerging and
            established artists and advancing art to create a more human world.
            National Institute of Fine Arts (NIFA) was established by MRS RENU
            KHERA in Delhi and NCR of Delhi on July 2005. Institute established
            another unit in Panna (M.P) which is affiliated to Raja Mansingh
            Music and Arts University (Gwalior). Its aim is to provide education
            and training to students on a wide spectrum of Fine Arts.
          </p>
          <p className="text-center text-sm font-light mb-4">
            National Institute of Fine Arts is a place where the creative
            expression of individuals is nurtured and a sense of community
            flourishes. We seek to shape the global future of arts with an
            emphasis on excellence that allows its members to reach for the
            highest artistic standards as individuals while recognizing that the
            Art is one of the foundations of a healthy and creative society.
            This is a place where national and international leaders in the arts
            gather, teach, show and perform their work. The institute prides
            itself on its openness and on creating an environment that is safe,
            welcoming, and built on mutual respect.
          </p>
          <p className="text-center text-sm font-semibold mb-4">
            National Institute of Fine Arts is a place where the creative
            expression of individuals is nurtured and a sense of community
            flourishes.
          </p>
          <Button btnValue={"Read More"}></Button>
        </div>
      </div>
    </>
  );
}

export default Heros;
