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

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images[0];
  }

  componentDidMount() {
    this.hasMasterSpinner = false
  }

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
      >
        <Slider>
          <Slide index={0}>
            <img src={this.images.url_1} alt="" />
          </Slide>
          <Slide index={1}>
            <img src={this.images.url_2} alt="" />
          </Slide>
          <Slide index={2}>
            <img src={this.images.url_3} alt="" />
          </Slide>
        </Slider>
        <DotGroup /> 
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
