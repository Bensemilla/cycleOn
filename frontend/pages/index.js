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
      <main>
        <Navbar />
        <div className="content">
          <div className="map">
            <br></br>
            <br></br>
            <a>place map here</a>
            <br></br>
            <br></br>
          </div>

          <div className="container-map">
            <h1 className="header-map">Embed Location Map</h1>
            <iframe
              className="map-embebed"
              src="https://experience.arcgis.com/experience/6c0145e31c4b48358864525acdf72fe8"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <Button onClick={boxAppear} />
          {showBox === true ? <Registrationbox /> : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
