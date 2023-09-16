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
          id="name"
          name="name"
          value="Your e mail address"
          required
        ></input>
      </form>
      <label for="message">Your message</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        value="feedback, suggestions or questions"
        required
      ></input>
    </div>
  );
}
