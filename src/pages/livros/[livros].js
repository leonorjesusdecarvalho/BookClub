
    import styles from './Livros.module.scss';

    export default function Livros({livro}) {


    return(

     
    <>
       <div className={styles.livrostitle} >{livro.list_name}</div>
       
      <div className={styles.livrosContainer}>

     
       {livro && livro.books.map(resultados => {
         return(
    
           
               

                    <div className={styles.livrosCard}>
                        <div className={styles.livrosCardImage}>
                            <img src={resultados.book_image}/>
                        </div>
                    

                        <div className={styles.livrosAuthor}>
                            <div>{resultados.author}</div>
                            
                        </div>
                        <div className={styles.livrosTitle}  >
                            <div>{resultados.title}</div>
                        </div>
                    
               

                </div>
        
           
         )
         
         
         
       })       
     
      }
       </div>
      </>
      


)
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}){
    const code = params.livros;
    const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${code}.json?api-key=U8OUqhhRgpLDSbEV8Zhx1VizI94kUeRZ`);

    const livro = await res.json();

    return {
        props: {
            livro: livro.results
        },
        revalidate: 10
    }
}