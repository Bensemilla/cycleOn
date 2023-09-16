export default function map() {
  return (
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
  );
}
