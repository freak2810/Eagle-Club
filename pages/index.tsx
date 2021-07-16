import styles from '../styles/pages/Landing.module.scss'
import HeroImage from "../components/HeroImage";
import SEO from "../components/SEO";
import ProgramDescription from "../components/ProgramDescription";
import Button from "../components/Button";
import Journey from "../components/Journey";
import LifeJourney from "../components/LifeJourney";
import Life from "../components/Life";
import JounrneyLines from '../components/JourneyLines'
import Navbar from "../components/Navbar";

export default function Home() {
    return <>
        <SEO />
        <Navbar/>
        <div className={styles.landing}>
            <div className={styles.description}>
                <h1>Eagles Club</h1>
                <div>
                    <h2>If You Have A <span>Dream</span>, We have a <span>Plan</span></h2>
                    <h2>
                        The Ultimate Experience To Engage, Retain And Inspire Your People.
                    </h2>
                </div>
                <div className={styles.icons}>
                    <i className="fab fa-linkedin-in" />
                    <i className="fab fa-instagram" />
                    <i className="fab fa-twitter" />
                </div>
                <Button title='See Pankaj In Action' />
            </div>
            <HeroImage />
            <hr />
        </div>
        <ProgramDescription />
        <LifeJourney />
        <JounrneyLines />
        <Journey />
        <Life />
    </>
}
