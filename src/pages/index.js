import Link from 'next/link'

import Livros from "./livros/[livros]"

import Lista from "../components/Lista/Lista";

import styles from './Home.module.css';






export default function Home({listas}) {
 
  return (
    <>

    <div className={styles.hero}></div>
    

    <div className={styles.container}>

       <h2 className={styles.titulo}>THIS WEEKS TOP 15</h2>  

        {listas && listas.results.lists.map(lista =>
         <Lista code={lista.list_name_encoded} nome={lista.display_name}/>)}
    </div>
    </>
       ) }
    

export async function getStaticProps() {

  const res = await fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=U8OUqhhRgpLDSbEV8Zhx1VizI94kUeRZ');

  const listas = await res.json();

  return{
    props: {
      listas
    },
    revalidate: 10
  }
    
}