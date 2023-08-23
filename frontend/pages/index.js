import Head from "next/head";
import { Kosugi_Maru } from "next/font/google";

const font = Kosugi_Maru({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>cycleOn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        <div class="header">
          <img src="/logo.png" href="#index" id="logo"></img>
          <div class="navbar">
            <li href="#aboutCycleOn">What is cycleOn?</li>
            <li href="#WhoIsCycleOn">Who is cycleOn?</li>
            <li href="#useCycleOn">How can I use it?</li>
            <button>
              <span>
                <img src="/bike.png"></img>
              </span>
              <a>Plan your route!</a>
              {/* needs to change to "Sign up" once the user is logged in */}
            </button>
          </div>
        </div>
        <div class="map">
          <br></br>
          <br></br>
          <a>place map here</a>
          <br></br>
          <br></br>
        </div>
        <div id="container-registration" class="tabcontent">
          <div class="tabcontent.active">
            <button
              class="tablinks"
              onclick="openForm(event, 'container-registration')"
            >
              Register here
            </button>
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
              <label for="bike">what kind of bike are you using?</label> <br />
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
              <br />
              <label for="age">Would you tell us how old you are?</label> <br />
              <input type="number" id="age" name="age"></input>
              {/* How can I let the number for the age start at a certain level, i.e. 15 years ? */}
              <br />
              <br />
              {/* Can we have a multiple layer sign form? i.e. you enter the above data, send it and then you choose your password? If not, password fields below. How do we check they're the same?*/}
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
              <input
                class="inputButton"
                type="reset"
                value="Reset form"
              ></input>
            </form>
          </div>
        </div>
        <div id="container-login" class="tabcontent">
          <button
            class="tablinks"
            onclick="openForm(event, 'container-signup')"
          >
            Sign up
          </button>
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
        {/* CJavaScript */}
      </main>
    </>
  );
}
function openForm(evt, formName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
}
