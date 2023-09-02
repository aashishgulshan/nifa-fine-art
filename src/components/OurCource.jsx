import React from 'react'
import artBoardBG from "../assets/ourCource/artboard2.png"
import CourceCard from './CourceCard'
import sket1 from "../assets//ourCource/animation-sketching.jpg"
import sket3 from "../assets/ourCource/1ydfa.jpg"
import sket4 from "../assets/ourCource/2ydfa.jpg"
import sket2 from "../assets/ourCource/3mchc.jpg"
import sket5 from "../assets/ourCource/sket5.jpg"
import sket6 from "../assets/ourCource/sket6.jpg"
import sket7 from "../assets/ourCource/sket7.jpg"
import sket8 from "../assets/ourCource/sket8.jpg"
import sket9 from "../assets/ourCource/sket9.jpg"
import sket10 from "../assets/ourCource/sket10.jpg"
import sket11 from "../assets/ourCource/sket11.jpg"
import sket12 from "../assets/ourCource/sket12.jpg"

function OurCource() {
const p1 ="6 Months Diploma in Sketching & Oil Painting - Regular/Part time";
const p2 ="1 to 3 Months Certificate Hobby Course (Regular and Weekend)";
const p3 = "One Year Diploma in Fine Arts-Regular/Part Time-Level-3";
const p4 = "Two years Advance Diploma in Fine Arts - Regular/Part time";
const p5 ="Entrance Preparation For N.I.D";
const p6 = "B.F.A from UGC Recognised University";
const p7 = "M.A in Painting from UGC Recognised University";
const p8 = "Entrance preparation for B.F.A";
const p9 = "Kids 1 year Diploma (Level-1)";
const p10 = "Kids 1 year Diploma (Level-2)";
const p11 = "Entrance Preparation for NIFT";
const p12 = "3 Months Hobby Certificate Course For Kids";
  return (
    <>
    <div style={{
          backgroundImage: `url(${artBoardBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative"
        }}>
        <div className='w-full lg:w-3/5 mx-auto px-4'>
        <h1 className='font-bold text-[3vh] text-center py-6'>Our Cources</h1>
        <div className='grid lg:grid-cols-4 grid-col-1 gap-6'>
        <CourceCard image={sket1} para={p1}></CourceCard>
        <CourceCard image={sket2} para={p2}></CourceCard>
        <CourceCard image={sket3} para={p3}></CourceCard>
        <CourceCard image={sket4} para={p4}></CourceCard>
        <CourceCard image={sket5} para={p5}></CourceCard>
        <CourceCard image={sket6} para={p6}></CourceCard>
        <CourceCard image={sket7} para={p7}></CourceCard>
        <CourceCard image={sket8} para={p8}></CourceCard>
        <CourceCard image={sket9} para={p9}></CourceCard>
        <CourceCard image={sket10} para={p10}></CourceCard>
        <CourceCard image={sket11} para={p11}></CourceCard>
        <CourceCard image={sket12} para={p12}></CourceCard>
        </div>
    </div>

        </div>
    </>

    
  )
}

export default OurCource