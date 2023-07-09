import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import '../Welcome/welcome.css'


function Welcome() {
    return (
<div className="container ">
  <div className="justify-content-center">
        <Carousel className="m-lg-5 p-lg-3  ">
      <Carousel.Item className="carosello">
        <img
          className=" h-50 "
          src="https://lucarota.files.wordpress.com/2019/09/100bestbooksofcentury.jpg" //1
          alt="First slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className=" h-75 "
          src="https://www.grafigata.com/wp-content/uploads/2019/04/Libri-di-grafica-cover.jpg" //2
          alt="Second slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className=" h-75"
          src="https://www.teamworld.it/wp-content/uploads/2021/04/Libri-da-leggere.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className=" h-75"
          src="https://live.staticflickr.com/65535/51773821596_b951f0573e_z.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );


    
}

export default Welcome
