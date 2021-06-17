import styles from './Lista.module.css';

import Link from 'next/link';

export default function Lista({code,nome}){
    return(
       
        
        <div className={styles.card}    >

        
        <Link href={`livros/${code}`}>

            <a>
            
            <div>
                <div>{nome}</div>
            </div> 
            
           </a>
        </Link>
        </div>
       
       )}