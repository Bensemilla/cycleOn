export default function Ratingbutton(props) {
    return (
      <button className="ratingbutton" onClick={props.onClick}>
        <p>rate a route <br></br> 🚲</p>
      </button>
    );
}