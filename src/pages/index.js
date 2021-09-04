import Head from 'next/head'
import Image from 'next/image'
import { CardTask } from '../components/CardTask'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
    return (
        <main className={styles.homeContainer}>
            <section className={styles.tasks}>
                <h3>Task list</h3>

                <button>
                    + Create Task
                </button>
            </section>

            <section className={styles.containerCards}>
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
            </section>
        </main>
    )
}
