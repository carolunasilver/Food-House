
import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

class CarouselComp extends Component {
    state = {  }
    render() { 
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/carousel3.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 style={{textAlign: "center", color: "orangered", fontWeight: "bold", fontSize: "50px"}}>Don't know what to cook but feeling adventurous?</h1>
                    <p style={{textAlign: "center", color: "black", fontSize: "22px", fontWeight: "bold"}}>Click on Recipe of the Day and surprise your guests!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/carousel2.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h1 style={{textAlign: "center", color: "black", fontWeight: "bold", fontSize: "50px"}}>In need of Inspiration?</h1>
                    <p style={{textAlign: "center", fontSize: "22px", fontWeight: "bold"}}>Use the search bar to type a main ingredient and find easy recipes...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/carousel1.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h1 style={{textAlign: "center", color: "orangered", fontWeight: "bold", fontSize: "50px"}}>Do you find complicated to follow recipes? </h1>
                    <p style={{textAlign: "center", fontSize: "22px", fontWeight: "bold"}}>Watch the video under the Recipe.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
         );
    }
}

 
export default CarouselComp;