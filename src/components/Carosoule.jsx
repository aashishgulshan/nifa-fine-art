import React from 'react';
import img1 from "../assets/carasol/img1.jpg";
import img2 from "../assets/carasol/img2.jpg";
import img3 from "../assets/carasol/img3.jpg";
import img4 from "../assets/carasol/img4.jpg";
import img5 from "../assets/carasol/img5.jpg";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carousele() {
  return (
    <div className="w-full mx-auto">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <img src={img1} alt="Image 1" />
        </div>
        <div>
          <img src={img2} alt="Image 2" />
        </div>
        <div>
          <img src={img3} alt="Image 3" />
        </div>
        <div>
          <img src={img4} alt="Image 4" />
        </div>
        <div>
          <img src={img5} alt="Image 5" />
        </div>
      </Carousel>
    </div>
  );
}
