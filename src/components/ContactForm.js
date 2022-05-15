import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import "semantic-ui-css/semantic.min.css";

const SERVICE_ID = "service_jtaqkov";
const TEMPLATE_ID = "template_dy9nac6";
const USER_ID = "bw10-tWgbHn6bp-aL";

class ContactForm extends Component {
  render() {
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
      e.target.reset();
    };
    return (
      <section id="contact-form">
        <div className="col-md-12 mx-auto">
          <h1 className="section-title">
            <span>Contact Form</span>
          </h1>
        </div>

        <div className="col-md-12 mx-auto">
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="user_email"
              placeholder="Email…"
              required
              icon="mail"
              iconPosition="left"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Name"
              name="user_name"
              placeholder="Name…"
              required
              icon="user circle"
              iconPosition="left"
            />
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="user_message"
              placeholder="Message…"
              required
            />
            <Button type="submit" color="green">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
