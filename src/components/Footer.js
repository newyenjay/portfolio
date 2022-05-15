import React, { Component } from "react";
import ContactForm from "./ContactForm";
import FunFact from "./FunFact";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function(network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <row>
          <ContactForm></ContactForm>
        <FunFact></FunFact>
          </row>
      

         </div>
      
      </footer>
    );
  }
}

export default Footer;
