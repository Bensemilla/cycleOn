import { useState } from "react";
export default function Registrationbox() {
  const [tab, setTab] = useState("register");
  function showSignupTab() {
    setTab("register");
  }
  function showLoginTab() {
    setTab("login");
  }
  return (
    <div className="container-box">
      <div>
        <button onClick={showSignupTab}>Register here</button>
        <button onClick={showLoginTab}>Log in</button>
      </div>
      {tab === "register" ? (
        <div className="register">
          <form>
            <label for="name">How should we call you?</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value="Your name"
              required
            ></input>
            <br />
            <br />
            <label for="user">Please enter a username:</label>
            <br />
            <input
              type="text"
              id="user"
              name="username"
              value="Your username"
              required
            ></input>
            <br />
            <br />
            <label for="email">Please enter your email address:</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value=" Your email address"
              required
            ></input>
            <br />
            <br />
            {/* <label for="bike">what kind of bike are you using?</label>{" "}
                <br />
                <select name="bike" id="bike-select">
                  <option value="">--Please choose your bike--</option>
                  <option value="race">Racing bike</option>
                  <option value="gravel">Gravel bike</option>
                  <option value="ebike">E-bike</option>
                  <option value="City">City bike</option>
                  <option value="Holland">Holland bike</option>
                  <option value="mb">mountainbike</option>
                  <option value="other">other</option>
                </select>
                <br />
                <br /> */}
            {/* <label for="age">Would you tell us how old you are?</label>{" "}
                <br />
                <input type="number" id="age" name="age"></input>
                {/* How can I let the number for the age start at a certain level, i.e. 15 years ? */}
            <br />
            <br />
            <label for="pw">Please choose a password</label> <br />
            <input type="password" id="pw" name="password" required></input>
            <br />
            <br />
            <label for="pw">Please verify your password</label> <br />
            <input type="password" id="pw" name="password" required></input>
            <br />
            <br />
            <br />
            {/* Add Terms & Conditions (tbd) Data Statement, Imprint something?  */}
            <br />
            <input
              class="inputButton"
              type="submit"
              value="Sign me up!"
            ></input>
            <input class="inputButton" type="reset" value="Reset form"></input>
          </form>
        </div>
      ) : (
        <div className="login">
          <br />
          <form>
            <label for="username">Please enter your username</label> <br />
            <input type="text" id="user" name="username" required></input>
            <label for="pw">Please enter your password</label> <br />
            <input type="password" id="pw" name="password" required></input>
            <br />
            <input class="inputButton" type="submit" value="Log in"></input>
            <input class="inputButton" type="reset" value="Reset form"></input>
          </form>
        </div>
      )}
    </div>
  );
}
