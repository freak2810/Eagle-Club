import Slider, {Settings} from "react-slick";
import CarouselCard from "./CarouselCard";
import styles from '../styles/components/Carousel.module.scss'
import React from "react";

interface CarouselProps {
    children: React.ReactNode
}

export default function Carousel({children}: CarouselProps) {

    function SampleNextArrow(props: any) {
        return <div onClick={props.onClick} className={styles.right}>
            <i  className="fas fa-arrow-right right"/>
        </div>
    }

    function SamplePrevArrow(props: any) {
        return <div  onClick={props.onClick} className={styles.left}>
            <i className="fas fa-arrow-left"/>
        </div>
    }

    const settings:Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows:false,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
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