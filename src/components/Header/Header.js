import styles from './Header.module.css' 

import Link from 'next/link'

export default function Header(){
    return(
        
       
        <header className={styles.header}>
             <Link href="/">
            <a>
                <div className={styles.nyt} >New York Times'</div>
                <div className={styles.bc}>BOOK CLUB</div>
            </a>
            </Link>
        </header>
       
       
    )
}