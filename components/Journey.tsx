import Button from "./Button";
import styles from '../styles/components/Journey.module.scss'

export default function Journey() {
    return <div className={styles.journey} id={'publications'}>
        <img className={styles.left_stripe} src="/img/stripes.png" alt="design"></img>
        <img className={styles.right_stripe} src="/img/stripes.png" alt="design"></img>
        <h1>Be the part of the journey</h1>
        <Button title='Connect Now' />
    </div>
}