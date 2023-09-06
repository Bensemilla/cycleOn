import Head from "next/head";
import Button from "@/components/button";
import Registrationbox from "@/components/registrationbox";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>cycleOn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {/* With this we call the Button component from the components folder. Major B marks the component element. */}
        <div class="map">
          <br></br>
          <br></br>
          <a>place map here</a>
          <br></br>
          <br></br>
        </div>
        <Registrationbox />
      </main>
      <footer>
        <div className="outro">
          <p>
            This WebApp was created as a project within the{" "}
            <a href="https://techlabs.org/">Digital Shaper Program</a> offered
            by TechLabs. Please see our{" "}
            <a href="/DataPrivacy">Imprint & Data Privacy Information</a>.
          </p>
        </div>
      </footer>
    </>
  );
}
