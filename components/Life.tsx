import styles from '../styles/components/Life.module.scss';


export default function Life() {
    return <section className={styles.life}>
        <div className={styles.headings}>
            <h1>Stills From My Life</h1>
            <p>Images From My Seminars, Journey And Corporate Life.</p>
        </div>
        <div className={styles.collage}>
            <img className={styles.c1} src={'/img/c-1.jpg'}/>
            <img className={styles.c2} src={'/img/c-1.jpg'}/>
            <img className={styles.c3} src={'/img/c-1.jpg'}/>
            <img className={styles.c4} src={'/img/c-1.jpg'}/>
            <img className={styles.c5} src={'/img/c-1.jpg'}/>
            <img className={styles.c6} src={'/img/c-1.jpg'}/>
            <img className={styles.c7} src={'/img/c-1.jpg'}/>
            <img className={styles.c8} src={'/img/c-1.jpg'}/>
        </div>
    </section>
}