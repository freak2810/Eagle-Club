import {useState} from 'react';
import Link from "next/link"

import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
    const [isopen, setIsopen] = useState(false);

    const menuItems = <>
        <span className={styles.item}>
            <Link href="/"><a onClick={() => setIsopen(false)}> HOME</a></Link>
        </span>
        <span className={styles.item}>
            <Link href="/#about"><a onClick={() => setIsopen(false)}>ABOUT</a></Link>
        </span>
        <span className={styles.item}><Link href="/#speaking">
            <a onClick={() => setIsopen(false)}>SPEAKING</a></Link>
        </span>
        <span className={styles.item}><Link href="/#publications">
            <a onClick={() => setIsopen(false)}>PUBLICATIONS</a></Link>
        </span>
        <span className={styles.item}><Link href="/contact">
            <a onClick={() => setIsopen(false)}>CONTACT</a></Link>
        </span>
    </>

    const handleDrawer = () => {
        isopen ? setIsopen(false) : setIsopen(true)
    }
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link href='/'>
                    <a onClick={() => setIsopen(false)}>
                        <img className={styles.logo} src="img/logo.png" alt="logo" height="60px" width="60px"/>
                    </a>
                </Link>
                <div className={styles.items}>
                    {menuItems}
                </div>
                <i className={`fas fa-bars fa-2x ${styles.icon}`} onClick={handleDrawer}/>
            </nav>

            {isopen ? (
                <div>
                    <div className={styles.mobile}>
                        {menuItems}
                    </div>
                </div>
            ) : null}
        </div>
    );
}