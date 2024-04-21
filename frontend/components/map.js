import Ratingbutton from "@/components/ratingbutton";
import Ratebox from "@/components/ratebox";
import { useState } from "react";

export default function map() {
  const [rateBox, setRateBox] = useState(false);

  function ratingAppear() {
    setRateBox(true);
  }

  return (
    <>
      <div className="container-map">
        <iframe
          className="map-embebed"
          src="https://experience.arcgis.com/experience/6c0145e31c4b48358864525acdf72fe8"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <br></br>

        <Ratingbutton onClick={ratingAppear} />
        {rateBox === true ? <Ratebox /> : null}
      </div>
      <p id="CTArate">
        help us to make Hamburg more bikeable and leave a feedback for the velo
        routes
      </p>
    </>
  );
}
