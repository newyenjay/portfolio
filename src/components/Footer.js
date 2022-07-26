import React, { Component } from "react";
import ContactForm from "./ContactForm";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col">
            <ContactForm></ContactForm>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
