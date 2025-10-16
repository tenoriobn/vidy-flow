import Image from 'next/image'
import styles from './header.module.css'

import logo from './logo.png'
import SearchInput from '../SearchInput'
import { IconBell, IconCamera } from '../Icons'

import avatar from './avatar.png'


export const Header = () => {
    return (<header className={styles.header}>
        <Image src={logo} alt=''/>

        <form className={styles.form}>
            <SearchInput />
        </form>

        <ul className={styles.actions}>
            <li>
                <IconBell />
            </li>
            <li>
                <IconCamera />
            </li>
            <li>
                <Image src={avatar}  alt='' />
            </li>
        </ul>
    </header>)
}