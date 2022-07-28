import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from './achivementsData';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
};

function Slide(props) {
    const [achivements] = useState(data);
    return (
        <div>
            <Slider {...settings}>
                {
                    achivements.map((a, i) => {
                        return (
                            <Achivements achivements={achivements[i]}/>
                        ) 
                    })
                }
            </Slider>
        </div>
    );
}

function Achivements(props) {
    return (
        <div className={props.achivements.color}>
            <div className={props.achivements.color+"Text"}>
              <p className="achivementsYear">{props.achivements.year}</p>
              <p className="achivementsContents">{props.achivements.text}</p>
            </div>
        </div>
        
    );
}

export default Slide;