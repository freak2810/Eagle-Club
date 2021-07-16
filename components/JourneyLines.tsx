import styles from '../styles/components/JourneyLines.module.scss'
import Carousel from "./JouneyCarousel";

interface Props {
    year?: string | number
}

const JourneyLines = ({year}: Props) =>{
    return(
        
            <div className={styles.container}>
            {/* <div className={styles.circle_container}>
                <span className={styles.year}>2015</span>
                <div className={styles.circle}></div>   
            </div> */}
            {/* <div className={styles.line}></div> */}

            <div className={styles.circle_container}>
            <span className={styles.year}>{year}</span>
                <div className={styles.circle}/>
            </div>
            <div className={styles.line}/>

            {/* <div className={styles.circle_container}>
            <span className={styles.year}>2020</span>
                <div className={styles.circle}></div>   
            </div> */}
        </div>
        
        
    )
}


export default JourneyLines;