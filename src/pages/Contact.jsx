import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

function blurEffect(e) {
  let target = e.target.id;
  let textInput = document.getElementById(target).value;

  if (target === "fullname") {
    let testRegex = /([A-Za-z]+( [A-Za-z]+)+)/;
    let resultTestRegex = testRegex.test(textInput);
    if (resultTestRegex) {
      document.getElementById(`${target}-warning`).style.display = "none";
    } else {
      document.getElementById(`${target}-warning`).style.display = "block";
    }
  } else if (target === "email") {
    let testRegex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
    let resultTestRegex = testRegex.test(textInput);
    if (resultTestRegex) {
      document.getElementById(`${target}-warning`).style.display = "none";
    } else {
      document.getElementById(`${target}-warning`).style.display = "block";
    }
  } else if (target === "message") {
    if (textInput.length > 7) {
      document.getElementById(`${target}-warning`).style.display = "none";
    } else {
      document.getElementById(`${target}-warning`).style.display = "block";
    }
  }
}

async function submitMessage() {
  let fullName = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  fullName = /([A-Za-z]+( [A-Za-z]+)+)/.test(fullName);
  email = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/.test(email);
  message = (message.length > 7 ? true: false);

  if (!fullName || !email || !message) {
    document.getElementById("submit-warning").style.display = "block";
    document.getElementById("submit-accepted").style.display = "none";
  } else {
    document.getElementById("submit-warning").style.display = "none";
    document.getElementById("submit-accepted").style.display = "block";
  }
}

export default function AboutMe() {
    return (
      <div className="container pt-4">
        <h2>Contact</h2>
        <div className="signin col-4 mt-5 text-center mx-auto">
          <h3>Name:</h3>
        </div>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="First (Optional Middle) Last Name"
              id="fullname"
              onBlur={blurEffect}
            />
          </InputGroup>
          </div>
            <p className="hideonload" id="fullname-warning">A name is required!</p>
          <div>
        </div>
        <div className="signin col-4 mt-5 text-center mx-auto">
          <h3>Email:</h3>
        </div>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="example1234@xmail.abc"
              id="email"
              onBlur={blurEffect}
            />
          </InputGroup>
          </div>
            <p className="hideonload" id="email-warning">An email is required!</p>
          <div>
        </div>
        <div className="signin col-4 mt-5 text-center mx-auto">
          <h3>Message:</h3>
        </div>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="A short or long message to reach out to me."
              id="message"
              onBlur={blurEffect}
            />
          </InputGroup>
          </div>
            <p className="hideonload" id="message-warning">A message is required! Minimum length is 8 characters.</p>
          <div>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitMessage}
          >
            Submit
          </button>
          </div>
            <p className="hideonload" id="submit-warning">Please correct the field(s) above and press Submit.</p>
          <div>
          </div>
            <p className="hideonload" id="submit-accepted">Awesome! You've successfully sent a message!</p>
          <div>
        </div>
      </div>
    );
  }
  