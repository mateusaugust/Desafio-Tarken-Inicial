import styles from '../layout/Libary.module.css'

import { useEffect, useState} from 'react';
import CardLibary from '../layout/CardLibary';

  
function Library(){

    const [filmes, setFilmes] = useState([])

   async function teste(){

    let filme = []

    for(let i =0; i<localStorage.length;i++){
       
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
         
        try {
            let response = await fetch(value);
            let data = await response.json();
            filme.push(data);
          } catch (error) {
      
          }
    } 

     return filme
   }

   useEffect(()=>{
        teste().then(response=> {console.log(response); setFilmes(response)})
    },[])



    return(
        //usar section e outras tags para seguir semantica do html

        <div className={styles.divPosition}>
            <p className={styles.title}>My Libary</p>
            <div className={styles.divPesquisa}>
                {filmes?.map((filme , index) =>(
                    <div key={index}>
                        <CardLibary {...filme}/>
                    </div>
                    ))
                }
            </div>
        </div>
    )

    }


export default Library