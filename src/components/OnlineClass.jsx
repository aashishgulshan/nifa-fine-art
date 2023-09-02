import React from "react";
import Button from "./Button";
import playStore from "../assets/footer/gplay.png";
import appstore from "../assets/footer/appstore.png";

function OnlineClass() {
  return (
    <div id="Online">
      <div className="w-full lg:w-3/5 border mx-auto bg-black opacity-50">
        <div className="flex">
          <div className="w-1/2 text-white">
            <h2 className="text-[3vh] font-bold">Online Class</h2>
            <p>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home.
            </p>
            <p>
We wish u Happy Learning. Stay Safe n Healthy.</p>

    <Button btnValue={"Read More"}></Button>
    <h3>Download The App</h3>
    <div className="flex gap-4">
        <img src={playStore} alt="" className="h-10" />
        <img src={appstore} alt="" className="h-10" />
    </div>
          </div>
          <div className="w-1/2 my-auto">
          <div className="block">
          <iframe width="460" height="300" src="https://www.youtube.com/embed/-9cJjaLXKqE?si=P7QJldwaXF4AGPiq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineClass;
