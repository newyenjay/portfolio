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
      <div id="contact-form">
        <div className="col mx-auto">
          <h1 className="section-title">
            <span>Contact Form</span>
          </h1>
        </div>

        <div className="col mx-auto">
          <div className="ui">
            I attended the University of Calgary for nursing in my first year
            out of high school. I really enjoyed it and also loved the people I
            met, but I didn't see it as a career choice for myself. I
            transferred over to Computer Science a year later, and then
            transferred over to SAIT for a more hands-on experience afterwards.
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
