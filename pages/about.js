import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum accusantium sapiente. Nobis maiores maxime vero libero, veritatis, saepe neque, laborum consectetur dolorum tempora suscipit eveniet rerum itaque! Dolore, vel?</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </div>
    )
}