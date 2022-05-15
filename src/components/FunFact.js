import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class FunFact extends Component {
  render() {
    return (
      <section id="fun-fact">
                <div className="col-md-12 mx-auto">
        <h1 className="section-title">
          <span>Testimonials</span>
        </h1>
        </div>
        <div className="col-md-12 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor velit eget faucibus iaculis. Nulla facilisi. Aenean fringilla orci sit amet neque accumsan blandit. Mauris ut felis vel nisi ornare mollis sed ut nisl. Mauris id sapien ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate quam lacus. Praesent dapibus turpis nisi, in tempor orci lacinia eget. Donec in arcu faucibus, mattis ante luctus, hendrerit lectus. Duis vel tortor non nunc varius auctor sed ut nibh. Donec sed sem tortor. Nullam vel arcu vitae metus feugiat feugiat. Cras cursus sem ac consectetur mattis. Curabitur vitae aliquam sapien.

        </div>
      </section>
    );
  }
}
