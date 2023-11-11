import Button from "@/components/button";
import Ratingbutton from "@/components/ratingbutton";
import Ratebox from "@/components/ratebox";
import Registrationbox from "@/components/registrationbox";
import { useState } from "react";

export default function navbar() {
  const [showBox, setShowBox] = useState(false);
  const [rateBox, setRateBox] = useState(false);

  // showBox (false, true)
  // setShowBox(true)

  function boxAppear() {
    setShowBox(true);
  }

  function ratingAppear() {
    setRateBox(true);
  }

  return (
    <>
      <div className="header">
        <a href="/">
          <img src="/logo.png" id="logo"></img>
        </a>
        <div className="navbar">
          <a href="/aboutCycleOn">What is cycleOn?</a>
          <a href="/aboutUs">Who is cycleOn?</a>
          <a href="/profile">My cycleOn profile</a>
          <Ratingbutton onClick={ratingAppear} />
          {rateBox === true ? <Ratebox /> : null}
          <Button onClick={boxAppear} />
          {showBox === true ? <Registrationbox /> : null}
          {/* With this we call the Button component from the components folder. Major B marks the component element. */}
        </div>
      </div>
    </>
  );
}
