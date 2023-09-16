import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function about() {
  return (
    <>
      <Head>
        <title>cycleOn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main">
        <h1>Who is team cycleOn?</h1>
        <p>
          Team cycleOn came together with one shared project idea:<br></br>
          Creating a companion to navigate through the bike lanes of Hamburg
        </p>
        <img src="/team.jpg" id="teampic"></img>
        <ul className="team">
          <li className="team">Benjamin</li>
          <li className="team">Bruno</li>
          <li className="team">Carina</li>
          <li className="team">
            <a href="https://www.linkedin.com/in/sara-brandt-3a200b166/">
              Sara
            </a>
          </li>
          <li className="team">and Mentor Konstantin</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
