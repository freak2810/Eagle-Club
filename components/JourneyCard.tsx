import styles from '../styles/components/JourneyCard.module.scss';
import Image from 'next/image';

import JourneyLines from '../components/JourneyLines'

interface CardProps {
    year: string,
    title: string,
    imageUrl: string,
    age: number,
    timeline: string[]
}

export default function JourneyCard({ imageUrl, age, title, timeline, year }: CardProps) {
    return <div style={{ paddingTop: "100px" }}>
        <div className={styles.card}>
            <JourneyLines year={year} />
            <div className={styles.image}>
                <Image alt={title} src={imageUrl} layout={'responsive'} height={250}
                    width={400} />
            </div>
            <h1>{title}</h1>
            <h2>Age: {age} Yrs</h2>
            <div>
                {timeline.map((item, index) => <p key={index}>{item}</p>)}
            </div>
        </div>
    </div>
}