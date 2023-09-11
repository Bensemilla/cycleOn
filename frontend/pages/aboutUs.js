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
      <main>
        <Navbar />
        <div classname="content">
          <h1>Who is team cycleOn?</h1>
          <p>
            Team cycleOn came together with one shared project idea: Creating a
            companion to navigate through the bike lanes of Hamburg
          </p>
          <ul>Benjamin</ul>
          <ul>Bruno</ul>
          <ul>Carina</ul>
          <ul>Sara</ul>
          <ul>and Mentor Konstantin</ul>
        </div>
        <Footer />
      </main>
    </>
  );
}
