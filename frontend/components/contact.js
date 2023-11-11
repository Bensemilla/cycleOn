export default function contact() {
  return (
    <div className="container-contact">
      <form>
        {/*         <button
          className="close" onclick={document.getElementById(container-contact).style.display='none'}
        >
          X
        </button> */}
        <p>
          Questions? Suggestions? Feedback? <br />
          Drop us a note below:
        </p>
        <label for="name"></label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value="Your name"
          required
        ></input>
        <label for="email"></label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value="Your e mail address"
          required
        ></input>
        <br />
        <label for="message">Your message</label>
        <br />
        <textarea className="messages" name="message" rows="10" cols="20">
          Your feedback, suggestions or questions
        </textarea>
        <br />
        <input className="inputButton" type="submit" value="Send"></input>
        <input className="inputButton" type="reset" value="Reset form"></input>
      </form>
    </div>
  );
}
