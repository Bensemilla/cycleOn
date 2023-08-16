import Head from "next/head";

export default function Map() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title rel="stylesheet" href="globals.css">
          Embed Velo Route Map
        </title>
      </Head>

      <div className="container-map">
        <h1 className="header-map">Embed Location Map</h1>
        <iframe
          className="map-embebed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303354.2311276431!2d9.9278215!3d53.558572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg!5e0!3m2!1sde!2sde!4v1691249657968!5m2!1sde!2sde"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
