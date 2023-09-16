import Head from "next/head";
import Button from "@/components/button";
import Registrationbox from "@/components/registrationbox";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [showBox, setShowBox] = useState(false);
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
      <Navbar />
      <main className="main">
        <div className="map">
          <br></br>
          <br></br>
          <a>place map here</a>
          <br></br>
          <br></br>
        </div>
      </main>
      <Footer />
    </>
  );
}
