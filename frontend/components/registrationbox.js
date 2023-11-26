import { useState } from "react";
import React from "react";
import { signIn } from "next-auth/react";

export default function Registrationbox({ hideBox }) {
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
  const [error, setError] = React.useState("");

  const [loginName, setLoginName] = React.useState("");
  const [loginSecret, setLoginSecret] = React.useState("");

  const checkSignUpPassword = () => {
    // If password not entered
    if (secret == "") return "Please enter Password";
    // If confirm password not entered
    else if (secretver == "") return "Please enter confirm password";
    // If Not same return False.
    else if (secret != secretver) {
      return "Password did not match.\n Please try again...";
    }
  };

  const submitSignUp = async (e) => {
    e.preventDefault();
    const errorMessage = checkSignUpPassword();
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("Password matches!");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/register`,
        {
          method: "POST",
          body: JSON.stringify({
            userName: username,
            name,
            email,
            password: secret,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        redirect: false,
        email: loginName,
        password: loginSecret,
      });
      hideBox();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="container-box">
      <div>
        <button onClick={showSignupTab}>Register here</button>
        <button onClick={showLoginTab}>Log in</button>
      </div>
      {tab === "register" ? (
        <div className="register">
          <form onSubmit={submitSignUp}>
            <label htmlFor="name-field">How should we call you?</label>
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
            <label htmlFor="user-field">Please enter a username:</label>
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
            <label htmlFor="email-field">
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
            <label htmlFor="pw-field">Please choose a password</label> <br />
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
            <label htmlFor="pw-verification-field">
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
            {/* CHECK IF pw-field & pw-verification-field have the same content*/}
            {error ? (
              <div className="pwAlert">
                <div className="pwAlertIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5rem"
                    width="1.5rem"
                    fill="white"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                  </svg>
                </div>
                <div>{error}</div>
              </div>
            ) : null}
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
          <form onSubmit={submitLogin}>
            <label htmlFor="email">Please enter your email address</label>{" "}
            <br />
            <input
              type="email"
              id="email"
              name="Email Address"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              required
            ></input>
            <label htmlFor="pw">Please enter your password</label> <br />
            <input
              type="password"
              id="pw"
              name="password"
              value={loginSecret}
              onChange={(e) => setLoginSecret(e.target.value)}
              required
            ></input>
            <br />
            <input className="inputButton" type="submit" value="Log in"></input>
            <input
              className="inputButton"
              type="reset"
              value="Reset form"
            ></input>
          </form>
        </div>
      )}
    </div>
  );
}
