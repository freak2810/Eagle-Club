import styles from '../styles/components/CarouselCard.module.scss'
import Link from "next/link";

export default function CarouselCard() {
    return <div className={styles.carouselCard}>
        <Link href={'https://google.com'}>
            <a>
                <div className={styles.thumbnail}>
                    <img alt={''} src='http://img.youtube.com/vi/UiORZgyqq88/0.jpg' height='100%'
                           width='100%'/>
                    <i className="fas fa-play"/>
                </div>
                <h1>5 ways to become more productive</h1>
                <p>Discussed about some ways to become more productive in life.</p>
                <Link href={''}>
                    <a className={styles.button}>
                        <p>See Video</p>
                        <i className="fas fa-arrow-right"/>
                    </a>
                </Link>
            </a>
        </Link>
    </div>
}