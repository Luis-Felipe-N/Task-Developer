import Image from 'next/image'

import styles from './styles.module.scss'

export default function CardNews({image, title, published}) {
    return (
        <article className={styles.cardContainer}>
            <Image src={image} alt="Imagem do post" width={350} height={190}/>
            <div className={styles.content}>
                <h1>{title}</h1>
                <span>{published}</span>
            </div>
        </article>
    )
} 