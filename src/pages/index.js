import { route } from 'next/dist/server/router'
import Head from 'next/head'
import Router from 'next/router'
import { CardTask } from '../components/CardTask'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
    // const router

    return (
        <>
        <Head>
            <title>Home</title>
            link
        </Head>
        <main className={styles.homeContainer}>
            <section className={styles.tasks}>
                <h3>Task list</h3>

                <button 
                    onClick={() => Router.push('/createtask')}
                >
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
        </>
    )
}
