export default function Ratingbutton(props) {
    return (
      <button className="ratingbutton" onClick={props.onClick}>
        <p>Rate a route</p>
      </button>
    );
}