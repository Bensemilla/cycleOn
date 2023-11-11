import Routes from "@/components/routes"

export default function Velorouteselection() {
  const routes = [
    {num: 1, name: "CITY-RISSEN"},
    {num: 2, name: "CITY-EIDELSTEDT"},
    {num: 3, name: "CITY-NIENDORF"},
    {num: 4, name: "CITY-LANGENHORN"},
    {num: 5, name: "CITY-DUVENSTEDT"},
    {num: 6, name: "CITY-VOLKSDORF"},
    {num: 7, name: "CITY-RAHLSTEDT"},
    {num: 8, name: "CITY-BERGEDORF-I"},
    {num: 9, name: "CITY-BERGEDORF-II"},
    {num: 10, name: "CITY-NEUGRABEN"},
    {num: 11, name: "CITY-TU-HAMBURG"},
    {num: 12, name: "CITY-ALTONA"},
    {num: 13, name: "INNERER-RING"},
    {num: 14, name: "ÄUẞERER-RING"}
  ]

  return (
    <li id="route-selection">
      <label for="velo-route">Select the Hamburg Velo route to rate:</label>
      <select name="velo-route" id="velo-routes">
        {routes.map(route =>
          <Routes route={route} />
        )}
      </select>
    </li>
  )
}