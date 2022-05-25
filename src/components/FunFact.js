import React, { Component } from "react";

export default class FunFact extends Component {
  render() {
    return (
      <div id="fun-fact">
        <div className="col mx-auto">
          <h1 className="section-title">
            <span>Contact Form</span>
          </h1>
        </div>

        <div className="col mx-auto round-border">
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
