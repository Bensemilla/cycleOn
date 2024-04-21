import Routes from "@/components/routes";

export default function Velorouteselection(props) {
  const routes = props.routes;

  return (
    <li id="route-selection">
      <a href="/" id="close">
        x
      </a>
      <br></br>
      <label for="velo-route">Select the Velo route to rate:</label>
      <select name="velo-route" id="velo-routes">
        {routes.map((route) => (
          <Routes route={route} />
        ))}
      </select>
    </li>
  );
}
