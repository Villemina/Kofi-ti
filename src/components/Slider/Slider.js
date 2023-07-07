import {useEffect, useState} from 'react';
import {SliderContent} from "./SliderContent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import "./slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoScroll = true
    let slideInterval;
    let intervalTime = 9000;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === SliderContent.length - 1 ? 0 : prevSlide + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? SliderContent.length - 1 : prevSlide - 1
        );
    };

    function auto() {
        slideInterval = setInterval(goToNextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if(autoScroll){
            auto()
        }
        return()=>clearInterval(slideInterval)
    }, [currentSlide]);

    return (
        <div className="slider-background">
            <div className="slider">
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="arrow-prev"
                    onClick={goToPrevSlide}
                />
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow-next"
                    onClick={goToNextSlide}
                />
                {SliderContent.map((slide, index) => {
                    return (
                        <div
                            className={index === currentSlide ? "slide current" : "slide"}
                            key={index}
                        >
                            {index === currentSlide && (
                                <>
                                    <img src={slide.image} alt="Coffee Late"/>
                                    <div className="content">
                                        <h2>{slide.heading}</h2>
                                        <p>{slide.desc}</p>
                                        <hr/>
                                        <button className="--btn-primary">Zamów</button>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>);
};

export default Slider;
