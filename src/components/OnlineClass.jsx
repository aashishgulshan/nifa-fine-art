import React from "react";
import Button from "./Button";
import playStore from "../assets/footer/gplay.png";
import appstore from "../assets/footer/appstore.png";

function OnlineClass() {
  return (
    <div id="Online">
      <div className="parallaxBG">
        <div className="w-full lg:w-3/5 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div className="w-full text-white ">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 ">
                Online Class
              </h2>
              <p className="text-sm font-light mb-2">
                Dear Students/Parents, Nifa presents its Learning App for your
                regular art practice in which we have added many amazing
                features Like: Step-by-step recorded demo videos prepared by
                your faculty members. Regular assessment of your practise
                through assignment section. Live class section from the same app.
                Attendance, payment invoice, art news, announcements, important
                information, and direct connect with the management team are some
                more features. So hurry up and join now to experience personalized
                coaching by experts sitting at your home.
              </p>
              <p className="text-sm font-light mb-4">
                We wish you Happy Learning. Stay Safe and Healthy.
              </p>

              <Button btnValue={"Read More"}></Button>

              <h3 className="text-lg lg:text-xl mb-3 mt-10">
                Download The App
              </h3>
              <div className="flex gap-4">
                <img src={playStore} alt="" className="h-10" />
                <img src={appstore} alt="" className="h-10" />
              </div>
            </div>
            <div className="w-full m-auto">
              <div className="aspect-ratio-16/9">
                <iframe
                className=" h-64 w-full border-8"
                //   width="460"
                //   height="300"
                  src="https://www.youtube.com/embed/-9cJjaLXKqE?si=P7QJldwaXF4AGPiq"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineClass;
