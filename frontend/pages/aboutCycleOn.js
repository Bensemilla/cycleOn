import Head from "next/head";
import Button from "@/components/button";
import Registrationbox from "@/components/registrationbox";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function cycleOn() {
  const [showBox, setShowBox] = useState(false);

  // showBox (false, true)
  // setShowBox(true)

  function boxAppear() {
    setShowBox(true);
    console.log("test");
  }
  return (
    <>
      <Head>
        <title>cycleOn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="content">
          <div className="about">
            <h1>What is cycleOn?</h1>
            <a id="description">
              CycleOn is your biking companion in Hamburg. It helps you with
              finding the best bike routes around our city by letting users rate
              bike lanes, notify about obstructed roads or obstacles and suggest
              alternatives for inefficient routes. After signing up, you can
              share details about your bike, biking style and a short
              desciprtion about yourself to find other bike lovers to connect
              with. We are aiming at releasing a routing function soon as well.
            </a>
            <br></br>
            <br></br>
            <div className="signup">
              <a>
                You are an avid biker from Hamburg and are intersted in joining
                our biking community? Click below to sign up and plan your
                route.
              </a>
              <Button onClick={boxAppear} />
              {showBox === true ? <Registrationbox /> : null}
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
