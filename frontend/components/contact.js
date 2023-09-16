export default function contact() {
  return (
    <div className="contactUs">
      <form>
        <p>Questions? Suggestions? Feedback? Drop us a note below:</p>
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
        <input
          type="text"
          id="msg"
          name="message"
          value="feedback, suggestions or questions"
          required
        ></input>
        <br />
        <input class="inputButton" type="submit" value="Send"></input>
        <input class="inputButton" type="reset" value="Reset form"></input>
      </form>
    </div>
  );
}
