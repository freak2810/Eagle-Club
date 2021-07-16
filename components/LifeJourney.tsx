import styles from '../styles/components/LifeJourney.module.scss'
import JourneyCard from "./JourneyCard";
import Carousel from "./JouneyCarousel";
import React from "react";

export default function LifeJourney() {
    return <section className={styles.lifeJourney} id={'speaking'}>
        <div className={styles.topSection}>
            <h1>Journey Of My Life</h1>
            <p>Combines His Decades As A Strategist Working With His Experiences He Delivers Programs That Are
                The Perfect Blend Of Practical, Real-World Guidance And Inspirational, Big Thinking. His Objective Is
                Simple: Make Your Marketing And Customer Experience The Elements Of Your Company That Customers LOVE And
                Talk About, Not Just Tolerate.</p>
        </div>
        <Carousel>
            <JourneyCard
                year="2015"
                title={'Joined Direct Selling Industry'}
                imageUrl={'https://images.unsplash.com/photo-1619625713173-fce47ce8d960?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
                age={17}
                timeline={['1 st  Year Income : 1 Lac + Iphone 6S', '2 nd  Year Income : 5 Lac + Gixxer SF', '3 rd  Year Income : 10 Lac + i20 Car']}
            />
            <JourneyCard
                year="2017"

                title={'Joined Direct Selling Industry'}
                imageUrl={'https://images.unsplash.com/photo-1619625713173-fce47ce8d960?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
                age={17}
                timeline={['1 st  Year Income : 1 Lac + Iphone 6S', '2 nd  Year Income : 5 Lac + Gixxer SF', '3 rd  Year Income : 10 Lac + i20 Car']}
            />
            <JourneyCard
                year="2019"

                title={'Joined Direct Selling Industry'}
                imageUrl={'https://images.unsplash.com/photo-1619625713173-fce47ce8d960?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
                age={17}
                timeline={['1 st  Year Income : 1 Lac + Iphone 6S', '2 nd  Year Income : 5 Lac + Gixxer SF', '3 rd  Year Income : 10 Lac + i20 Car']}
            />
            <JourneyCard
                year="2021"

                title={'Joined Direct Selling Industry'}
                imageUrl={'https://images.unsplash.com/photo-1619625713173-fce47ce8d960?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
                age={17}
                timeline={['1 st  Year Income : 1 Lac + Iphone 6S', '2 nd  Year Income : 5 Lac + Gixxer SF', '3 rd  Year Income : 10 Lac + i20 Car']}
            />
        </Carousel>
    </section>
}