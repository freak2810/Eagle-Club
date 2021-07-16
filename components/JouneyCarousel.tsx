import Slider, {Settings} from "react-slick";
import React from "react";
import styles from '../styles/components/JourneyCarousel.module.scss'

interface CarouselProps {
    children: React.ReactNode
}

export default function Carousel({children}: CarouselProps) {

    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 374,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider  {...settings} className={styles.carousel} draggable={false}>
                {children}
            </Slider>
        </div>
    );
}