import {AiOutlineSearch} from "react-icons/ai"
import { useState} from 'react';

import styles from '../layout/Search.module.css'
import CardSearch from '../layout/CardSearch'



function Search (){
    
    const apiSearch = 'https://api.themoviedb.org/3/search/movie?api_key=4f29b990a89a1383d4f6c9af65fec3c5&query='

    const[filmes, setFilmes] = useState([])
    const[term, setTerm] = useState('')
   
    
  

    const handleSearch = (e) =>{
       e.preventDefault()

       fetch(apiSearch+term).then(res=>res.json())
       .then(data=> setFilmes(data.results))
    }

    return(
       
        <section>
            <div className={styles.divPosition}>
               <p className={styles.title}>Search</p>
                
                
                <div className={styles.centerDiv}>
                    <input className={styles.searchBar} type="text" name="buscaFilme"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    
                    
                    <button   
                    className={styles.bottonSearch}><AiOutlineSearch
                    onClick={handleSearch}
                    /></button>
                </div>

                <div className={styles.divPesquisa}>
                {filmes.map((filme) =>{
                    return(
                        <CardSearch key={filme.id} {...filme}/>   
                    )
                    })

                }   
                 

                </div>
               
                
            </div>
            
        </section>
    )
}

export default Search

