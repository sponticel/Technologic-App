import React from "react";
import {
  CarouselProvider,
  Dot,   
  // DotGroup,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.css"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let key = 0
    return (
      <CarouselProvider
        naturalSlideWidth={100  }
        naturalSlideHeight={125}  
        totalSlides={this.images.length}
        dragEnabled={false}
        infinite={true}
        isIntrinsicHeight={true}
        hasMasterSpinner={false}
      >
        <div className="carousel-main">
          <Slider>
            {this.images.map((i) => (
              <>
                <Slide key={`carousel-img-key-${key++}`} index={key}>
                  <img id="myImg" src={i} alt="" />
                </Slide>
              </>
            ))}
          </Slider>
          <div className="carousel-buttons">
            <ButtonBack>{'<'}</ButtonBack>
            <ButtonNext>{'>'}</ButtonNext>
          </div>
        </div>
        <div className="carousel-dots">
          {this.images.map((v, i) => (
            <Dot slide={i}>
              <img className="carousel-dot-img" src={v} alt=""/>
            </Dot>
          ))}
        </div>
      </CarouselProvider>
    );
  }
}

export default Carousel