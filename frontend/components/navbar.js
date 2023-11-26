import Button from "@/components/button";
import Registrationbox from "@/components/registrationbox";
import Ratingbutton from "@/components/ratingbutton";
import Ratebox from "@/components/ratebox";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function navbar() {
  const { status } = useSession();
  const [showBox, setShowBox] = useState(false);
  const [rateBox, setRateBox] = useState(false);

  function ratingAppear() {
    setRateBox(true);
  }

  // showBox (false, true)
  // setShowBox(true)

  function boxAppear() {
    setShowBox(true);
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
          {status === "authenticated" ? (
            <>
              <Ratingbutton onClick={ratingAppear} />
              {rateBox === true ? <Ratebox /> : null}
              <button
                className="logout"
                onClick={() => signOut({ redirect: false })}
              >
                Logout
              </button>
            </>
          ) : null}
          <Button onClick={boxAppear} />
          {showBox === true ? (
            <Registrationbox hideBox={() => setShowBox(false)} />
          ) : null}
          {/* With this we call the Button component from the components folder. Major B marks the component element. */}
        </div>
      </div>
    </>
  );
}
