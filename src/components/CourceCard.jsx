import React from "react";
import Button from "./Button";

function CourceCard({ image, para }) {
  return (
    <div className="pac block rounded bg-white shadow">
      <img class="rounded-t" src={image} alt="" />

      <div class="px-2 py-4 text-center">
        <p class="mb-4 text-sm text-neutral-800">
          {para}
        </p>
        <Button btnValue={"Know More"}></Button>
      </div>
    </div>
  );
}

export default CourceCard;
