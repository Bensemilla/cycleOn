import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Button from "@/components/button";
import ContactButton from "@/components/contactButton";
import { useState } from "react";

export default function about() {
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
      <main className="main">
        <Navbar />
        <h1>Team cycleOn</h1>
        <p>
          Team cycleOn came together with one shared project idea:<br></br>
          Creating a companion to navigate through the bike lanes of Hamburg
        </p>
        <br></br>
        <img src="/team.jpg" id="teampic"></img>
        <br></br>
        <ul className="team">
          <li>
            <a href="https://www.linkedin.com/in/konstantinmuenster/">
              Konstantin
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/benjamin-schr%C3%B6der-b46521291/">
              Benjamin
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carina-brinkmann-aaa5a1219/">
              Carina
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sara-brandt-3a200b166/">
              Sara
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bruno-moschetto/"> Bruno</a>
          </li>
        </ul>
        <ContactButton onClick={contactAppear} />
        {showContact === true ? <Contact onClick={contactDisappear} /> : null}
      </main>
      <Footer />
    </>
  );
}
