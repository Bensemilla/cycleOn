export default function Button() {
  return (
    <button className="signupbutton" onClick="registrationbox">
      {/* Can I copy the button like this to any part of the site an adress from css */}
      <div>
        <img src="/bike.png"></img>
      </div>
      <p>Plan your route!</p>
      {/* needs to change to "Sign up" once the user is logged in */}
    </button>
  );
}
