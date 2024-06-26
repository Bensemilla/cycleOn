import Head from "next/head";
import Button from "@/components/button";
import Registrationbox from "@/components/registrationbox";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import ContactButton from "@/components/contactButton";
import { useState } from "react";

export default function cycleOn() {
  const [showContact, setShowContact] = useState(false);
  function contactAppear() {
    setShowContact(true);
  }
  function contactDisappear() {
    console.log("clicked");
    setShowContact(false);
  }
  return (
    <>
      <Head>
        <title>cycleOn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main">
        <div className="about">
          <h1>What is cycleOn?</h1>
          <br></br>
          <a id="description">
            CycleOn is your biking companion in Hamburg.<br></br>
            <br></br> It helps you with finding the best bike routes around our
            city by letting users rate bike lanes, notify about obstructed roads
            or obstacles and suggest alternatives for inefficient routes.
            <br></br>
            <br></br>All of this is based on the concept of Hamburg Veloroutes.
          </a>
          <br></br> <br></br>
          <a href="https://www.hamburg.de/velorouten/">
            Find more information on Hamburg's Veloroutes here
          </a>
          <br></br> <br></br>
          <a>
            After signing up, you can share details about your bike, biking
            style and a short desciprtion about yourself to find other bike
            lovers to connect with. We are aiming to release a navigation
            function soon as well.
          </a>
          <br></br>
          <br></br>
          <div className="buttonsAbout">
            <button id="teamButton">
              <a href="/aboutUs">check out the cycleOn team</a>
            </button>
            <p>or</p>
            <ContactButton onClick={contactAppear} />
            {showContact === true ? (
              <Contact onClick={contactDisappear} />
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
