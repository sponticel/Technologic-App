import React from "react";
import {
  CarouselProvider,
  Dot,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images.filter((i) => i);
  }

  componentDidMount() {
    this.totalSlides = this.images;
  }

  componentWillUnmount() {}

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={this.images.length}
        dragEnabled={false}
        infinite={true}
        isIntrinsicHeight={true}
        hasMasterSpinner={false}
      >
        <div className="carousel-main">
          <Slider>
            {this.images.map((v, i) => (
              <Slide key={i}>
                <img id="myImg" src={v} alt="" />
              </Slide>
            ))}
          </Slider>
          <div className="carousel-buttons">
            <ButtonBack>{"<"}</ButtonBack>
            <ButtonNext>{">"}</ButtonNext>
          </div>
        </div>
        <div className="carousel-dots">
          {this.images.map((v, i) => (
            <Dot key={i} slide={i}>
              <img className="carousel-dot-img" src={v} alt="" />
            </Dot>
          ))}
        </div>
      </CarouselProvider>
    );
  }
}

export default Carousel;
