export default function Button(props) {
  return (
    <button className="signupbutton" onClick={props.onClick}>
      <div>
        <img src="/bike.png"></img>
      </div>
      <p>Plan your route!</p>
      {/* needs to change to "Sign up" once the user is logged in */}
    </button>
  );
}
