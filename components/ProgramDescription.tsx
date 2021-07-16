import styles from "../styles/components/ProgramDescription.module.scss";
import Button from "./Button";
import Carousel from "./Carousel";
import CarouselCard from "./CarouselCard";
import React from "react";

export default function ProgramDescription() {
    return <div className={styles.programs} id={'about'}>
        <div className={styles.topSection}>
            <h1>Live And Virtual Programs That Inspire And Motivate The Audience</h1>
            <div>
                <p>
                    Eagle Club Combines Their Decades As A Strategist
                    Working With Their Experiences. They Delivers Programs
                    That Are The Perfect Blend Of Practical, Real-World
                    Guidance And Inspirational, Big Thinking. Their Objective
                    Is Simple: Make Your Marketing And Customer
                    Experience The Elements Of Your Company That
                    Customers LOVE And Talk About, Not Just Tolerate.
                </p>
                <Button title='See Pankaj In Action'/>
            </div>
        </div>
        <Carousel>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
        </Carousel>
    </div>
}