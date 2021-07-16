import Image from 'next/image'
import styles from '../styles/components/HeroImage.module.scss'

export default function HeroImage() {
    return <div className={styles.heroImage}>
        <Image src='/img/logo.png' layout='fill' />
        <div className={styles.border} />
    </div>
}