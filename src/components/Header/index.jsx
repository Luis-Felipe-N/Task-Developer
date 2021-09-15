
import Link from 'next/link'
import Image from 'next/image'
// import 
// import  from 'next/router'

import { BsGrid1X2Fill, BsBoxArrowRight, BsQuestionCircleFill } from 'react-icons/bs'
import { FaGlobeAmericas, FaCoins, FaUser, FaSun } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './styles.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

export function Header() {
    const [ openMenu , setOpenMenu ] = useState(false)
    const router = useRouter()

    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <Link href="/">
                    <div className={styles.logo}>
                        <div className={styles.img_logo}>
                            <Image 
                                src="/logo.svg"
                                alt="Logo task Desing"
                                width={20}
                                height={20}
                            />
                        </div>
                        <h1>
                            Pro-Promotion.com
                        </h1>
                    </div>
                </Link>
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <Link  href="/">
                                <a className={router.asPath === '/' && styles.active}>
                                    <BsGrid1X2Fill  />
                                    <span>Task list</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/news">
                                <a className={router.asPath === '/news' && styles.active}>
                                    <FaGlobeAmericas />
                                    <span>News</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <BsQuestionCircleFill size="22px" />
                                    <span>Help</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.left}>
                    <div className={styles.money}>
                        <button>
                            +
                        </button>

                        <span>
                            <FaCoins />
                            2904
                        </span>
                    </div>
                    <button 
                        aria-label="Botão de menu" 
                        className={styles.btnMenu}
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <Image src="/avatar.svg" width={35} height={35} alt="Avatar" />
                        <IoIosArrowDown size="18px" color="var(--color-200)" />
                    </button>
                    <div className={openMenu ? `${styles.menuDrop} ${styles.active}` : styles.menuDrop}>
                        <nav>
                            <Link href="/user/1232">
                                <a>
                                    <FaUser />    My Profile
                                </a>
                            </Link>
                            <Link  href="/">
                                <a>
                                    <BsGrid1X2Fill  />Task list
                                </a>
                            </Link>
                        </nav>
                        <div className={styles.darkModeContainer}>
                            <span>
                                <FaSun />
                                Dark Mode
                            </span>
                        </div>
                        <button className={styles.logOut}>
                            <BsBoxArrowRight />
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}