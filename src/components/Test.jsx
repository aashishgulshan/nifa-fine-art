import React from 'react';

export default function Test() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-fluid py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="md:col-span-1 lg:col-span-2">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Company</h2>
                <ul className="list-group">
                  <li className="list-group-item"><a href="about-us.php">About</a></li>
                  <li className="list-group-item"><a href="facility.php">Facilities</a></li>
                  <li className="list-group-item"><a href="career.php">Career</a></li>
                  <li className="list-group-item"><a href="contact.php">Contact us</a></li>
                  <li className="list-group-item"><a href="term.php">Terms & Conditions</a></li>
                  <li className="list-group-item"><a href="refund-policy.php">Refund Policy</a></li>
                  <li className="list-group-item"><a href="privacy-policy.php">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Activities</h2>
                <ul className="list-group">
                  <li className="list-group-item"><a href="students-area.php">Art Gallery</a></li>
                  <li className="list-group-item"><a href="activity-page.php?id=8">Workshops</a></li>
                  <li className="list-group-item"><a href="activity-page.php?id=2">Outdoor Activities</a></li>
                  <li className="list-group-item"><a href="activity-page.php?id=4">Media Coverage</a></li>
                  <li className="list-group-item"><a href="activity-page.php?id=9">Art Events</a></li>
                  <li className="list-group-item"><a href="activity-page.php?id=5">Exhibition</a></li>
                  <li className="list-group-item"><a href="activity-page.php?id=7">Daily Activities</a></li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-1 lg:col-span-1">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Popular Course</h2>
                <ul className="list-group">
                  <li className="list-group-item"><a href="course.php?id=29">Diploma in Fine Arts</a></li>
                  <li className="list-group-item"><a href="course.php?id=30">Certificate Hobby Course</a></li>
                  <li className="list-group-item"><a href="course.php?id=35">Entrance Preparation</a></li>
                  <li className="list-group-item"><a href="course.php?id=38">BFA</a></li>
                  <li className="list-group-item"><a href="course.php?id=31">Animation Sketching</a></li>
                  <li className="list-group-item"><a href="course.php?id=39">Kids Diploma</a></li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-1 lg:col-span-1">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Our Locations</h2>
                <ul className="list-group">
                  <li className="list-group-item"><a href="contact.php?locatin=gurgaon">Gurgaon (Dlf Phase - 4)</a></li>
                  <li className="list-group-item"><a href="contact.php?locatin=mumbai">Mumbai (Andheri West)</a></li>
                  <li className="list-group-item"><a href="contact.php?locatin=kailash-colony">South Delhi (Kailash Colony)</a></li>
                  <li className="list-group-item"><a href="contact.php?locatin=london">London</a></li>
                  <li className="list-group-item"><a href="contact.php?locatin=usa"></a></li>
                  <li className="list-group-item"><a href="contact.php?locatin=dubai">Dubai, UAE</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="md:w-1/2 lg:w-3/5">
              <p className="text-base mb-4">NIFA is a unit of Nifaedutech Pvt Ltd.</p>
              <p className="text-base">Connect with us:</p>
              <p>
                <a href="tel:9555112200" className="text-blue-500" target="_top">9555112200</a>,
                <a href="tel:9810130552" className="text-blue-500" target="_top">9810130552</a>
              </p>
              <p><a href="mailto:admission@nifafinearts.com" className="text-blue-500" target="_top">admission@nifafinearts.com</a></p>
              <ul className="list-inline mt-2">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/nifafinearts" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/artsnifa?lang=en" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 lg:w-2/5 mt-4 md:mt-0 text-right">
              <p className="text-base">Download the app</p>
              <ul className="list-inline nappimg mb-0 mt-2">
                <li className="list-inline-item">
                  <a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr" target="_blank" rel="noopener noreferrer">
                    <img src="images/gplay.png" alt="Google Play" className="img-fluid" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://apps.apple.com/us/app/apple-store/id1472483563" target="_blank" rel="noopener noreferrer">
                    <img src="images/appstore.png" alt="App Store" className="img-fluid" />
                  </a>
                </li>
              </ul>
              <p className="text-base mt-2">&copy; Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
