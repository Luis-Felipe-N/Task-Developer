
import Link from 'next/link'

import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

import styles from './styles.module.scss'


export function Footer() {

    return (
        <footer className={styles.footerContainer}>
            <ul>
                <li>
                    <Link href="">
                        <a>
                            <FaTwitter />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a>
                            <FaFacebook />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a>
                            <FaInstagram />
                        </a>
                    </Link>
                </li>
            </ul>
            <p>© 2020 - All Rights Lecensed</p>
            <p>For commercial inquiries</p>
        </footer>
    )
}