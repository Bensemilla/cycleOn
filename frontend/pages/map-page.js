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
        <h1 className="header-map">Hamburg Velo Routes</h1>
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
    </>
  );
}
