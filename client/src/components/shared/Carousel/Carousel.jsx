import React from "react";
import {
  CarouselProvider,
  Dot,
  DotGroup,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.css"

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}  
        totalSlides={3}
        dragEnabled={false}
        infinite={true}
        isIntrinsicHeight={true}
        hasMasterSpinner={false}
      >
        <Slider>
          {this.images.map((i) => (
            <Slide index={0}>
              <img src={i} alt="" />
            </Slide>
          ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
