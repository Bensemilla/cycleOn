import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Map() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title rel="stylesheet" href="globals.css"></title>
      </Head>
      <Navbar />
      <div className="container-profile">
        <div className="profile-box">
          <img src="menu2.png" className="menu-icon" />
          <img src="settings.png" className="setting-icon" />
          <img src="profile-pic.png" className="profile-pic" />
          <h3>John Reed</h3>
          <p>Standart User</p>
          <div className="social-media">
            <img src="instagram.png" />
            <img src="telegram.png" />
            <img src="dribble.png" />
          </div>
          <button type="button">Follow</button>
          <div className="profile-bottom">
            <p>Learn more about my profile</p>
            <img src="arrow2.png" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
