
import Link from 'next/link'
import Image from 'next/image'

import { BsGrid1X2Fill, BsBoxArrowRight } from 'react-icons/bs'
import { FaGlobeAmericas, FaCoins, FaUser, FaSun } from 'react-icons/fa'
import { IoHelpCircle } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './styles.module.scss'
import { useState } from 'react'

export function Header() {
    const [ openMenu , setOpenMenu ] = useState(false)

    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
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
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <Link  href="/">
                                <a className={styles.active}>
                                    <BsGrid1X2Fill  />
                                    <span>Task list</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <FaGlobeAmericas />
                                    <span>News</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <IoHelpCircle size="22px" />
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
                            <Link href="/">
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