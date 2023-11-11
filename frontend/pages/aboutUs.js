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
      </main>
      <Contact />
      <Footer />
    </>
  );
}
