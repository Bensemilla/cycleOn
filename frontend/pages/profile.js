import Head from "next/head";

export default function Map() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title rel="stylesheet" href="profile_styles.css"></title>
      </Head>

      <div className="container">
        <div className="profile-box">
          <img src="menu.png" className="menu-icon" />
          <img src="setting.png" className="setting-icon" />
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
            <img src="arrow.png" />
          </div>
        </div>
      </div>
    </>
  );
}
