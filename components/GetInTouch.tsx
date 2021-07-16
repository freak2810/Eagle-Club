import React, { FormEvent, useState } from "react";
import Image from 'next/image'
import styles from '../styles/components/GetInTouch.module.scss';

export default function GetInTouch() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [buttonText, setButtonText] = useState('Connect Now');

    const formSubmit = (e: FormEvent) => {
        e.preventDefault();

        const body = new FormData()
        body.append('name', name);
        body.append('email', email);
        body.append('message', message);

        if (buttonText === 'Connect Now') {
            fetch(`https://getform.io/f/${process.env.NEXT_PUBLIC_CONTACT_FORM_CODE}`, {
                method: "POST",
                body
            }).then((res) => {
                console.log(res)
                setName('');
                setEmail('');
                setMessage('');
                setButtonText('Message Sent! :)')
            });
        }
    }

    return <div className={styles.getInTouch}>
        <section>
            <article>
                <div className={styles.img}>
                    <img src='/img/logo.png' alt='Kunal Tyagi'
                        height='100%' width='100%' />
                </div>
            </article>
            <form onSubmit={formSubmit}>
                <h1>Get in touch with me</h1>
                <div>
                    <label>Enter your name</label>
                    <input
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type='text'
                        placeholder='Regina Falange'
                    />
                </div>
                <div>
                    <label>Enter your email</label>
                    <input
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type='email'
                        placeholder='regina.falange@example.com' />
                </div>
                <div>
                    <label>Leave your message</label>
                    <textarea
                        required
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder='My Eyes! My Eyes!!' />
                </div>

                <button type='submit'>
                    <p>{buttonText}</p>
                    <i className="fas fa-arrow-right" />
                </button>

            </form>
        </section>
    </div>
}