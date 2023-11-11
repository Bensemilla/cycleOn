export default function contactus(props) {
  return (
    <button className="contactbutton" onClick={props.onClick}>
      <div>
        <img src="/bike.png"></img>
      </div>
      <p>Contact us here!</p>
    </button>
  );
}
