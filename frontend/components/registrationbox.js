import { useState } from "react";
import React from "react";
export default function Registrationbox() {
  const [tab, setTab] = useState("register");

  function showSignupTab() {
    setTab("register");
  }
  function showLoginTab() {
    setTab("login");
  }

  // defining dynamic variables for input
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [secret, setSecret] = React.useState("");
  const [secretver, setSecretver] = React.useState("");

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({
        userName: username,
        name,
        email,
        password: secret,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  return (
    <div className="container-box">
      <div>
        <button onClick={showSignupTab}>Register here</button>
        <button onClick={showLoginTab}>Log in</button>
      </div>
      {tab === "register" ? (
        <div className="register">
          <form onSubmit={submit}>
            <label for="name-field">How should we call you?</label>
            <br />
            <input
              type="text"
              id="name-field"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            ></input>
            <br />
            <br />
            <label for="user-field">Please enter a username:</label>
            <br />
            <input
              type="text"
              id="user-field"
              name="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
            ></input>
            <br />
            <br />
            <label for="email-field">
              Please enter your email address:
            </label>{" "}
            <br />
            <input
              type="email"
              id="email-field"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
            <label for="pw-field">Please choose a password</label> <br />
            <input
              type="password"
              id="pw-field"
              name="password"
              value={secret}
              onChange={(event) => {
                setSecret(event.target.value);
              }}
              required
            />
            <br />
            <br />
            <label for="pw-verification-field">
              Please verify your password
            </label>
            <br />
            <input
              type="password"
              id="pw-verification-field"
              name="password"
              value={secretver}
              onChange={(event) => {
                setSecretver(event.target.value);
              }}
              required
            />
            {/* CHECK IF pw-field & pw-verification-field have the same content */}
            {/* need help with if function here*/}
            conditional rendering https://react.dev/learn/conditional-rendering
            <br />
            <br />
            <br />
            {/* Add Terms & Conditions (tbd) Data Statement, Imprint something?  */}
            <br />
            <input
              className="inputButton"
              type="submit"
              value="Sign me up!"
            ></input>
            <input
              className="inputButton"
              type="reset"
              value="Reset form"
            ></input>
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
