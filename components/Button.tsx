import Link from 'next/link'
import styles from '../styles/components/Button.module.scss'

interface ButtonProps {
    title: string
}

export default function Button({title}: ButtonProps) {
    return <Link href={''}>
        <a className={styles.button}>
           <p>{title}</p>
            <i className="fas fa-arrow-right"/>
        </a>
    </Link>
}