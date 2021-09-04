import Image from 'next/image'

import { BiDotsVerticalRounded } from 'react-icons/bi'

import styles from './styles.module.scss'

export function CardTask({avatar, imgTypeTask, name, typeTask, cover}) {
    return (
        <article className={styles.cardTaskContainer}>
            <header className={styles.user}>
                <div className={styles.avatarContainer}>
                    <Image src="/card/avatar.svg" width={50} height={50} alt="Avatar" />
                    <img className={styles.imageTypeTask} src="/card/heart.svg" width={19} height={19} alt="Tipo da tarefa" />
                </div>
                <div className={styles.infoTask}>
                    <h4>Tran Mau Tri Tam</h4>
                    <span className={styles.typeTask}>  
                        Like
                    </span>
                </div>
                <button>
                    <BiDotsVerticalRounded size="20px"/>
                </button>
            </header>
            <Image width={250} height={180} src="/card/cover.svg" alt="Cover" />
            <button className={styles.btnPerformTask}>Perform a Task</button>
        </article>
    )
}