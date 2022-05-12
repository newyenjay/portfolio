import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    if (this.props.testimonialsFeedback) {
      var work = this.props.testimonialsFeedback.map(function(feedback, i) {
        var name = feedback.name;
        var position = feedback.position;
        var blurb = feedback.blurb;

        return (
          <div>
            <div className="myCarousel" key={i}>
              <h3>{name}</h3>
              <h4>{position}</h4>
              <p>{blurb}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div id="testimonials" className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>Testimonials</span>
        </h1>
        <div className="col-md-12">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            {work}
          </Carousel>
        </div>
      </div>
    );
  }
}
