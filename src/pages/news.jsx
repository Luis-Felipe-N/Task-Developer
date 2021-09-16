import Head from 'next/head'
import Image from 'next/image'
import CardNews from '../components/CardNews'

import styles from '../styles/pages/news.module.scss'

export default function News() {
    return (
        <>
        <Head>
        <title>Noticias</title>
        link
        </Head>
        <main className={styles.newsContainer}>
            <h3>Mais popular</h3>
            <section className={styles.newView}>
                <Image src="/mostPopular.png" alt="Imagem de uma nóticia - Imagem de um balão" width={700} height={320} />
                <div className={styles.content}>
                    <h1>Dribbble Russia VK <br /> Community officially <br /> launched!</h1>
                    <p>Send your portfolio to our manager on e-mail and get a chance to be a part of our new big Dribbblers group!</p>
                    <span>Aug 14, 2020</span>
                </div>
            </section>
            <h3>Últimas notícia</h3>
            <section>
                <CardNews image="/mostPopular.png" title="Incredible 3D illustrations of famous fictional places" published="Aug 14, 2020" />
                <CardNews image="/img2.png" title="Incredible 3D illustrations of famous fictional places" published="Aug 14, 2020" />
                <CardNews image="/img3.png" title="Incredible 3D illustrations of famous fictional places" published="Aug 14, 2020" />
            </section>
        </main>
        </>
    )
}