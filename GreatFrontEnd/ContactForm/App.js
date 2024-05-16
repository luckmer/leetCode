import "./styles.css";
import submitForm from "./submitForm";

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      action="******"
      method="post"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}
