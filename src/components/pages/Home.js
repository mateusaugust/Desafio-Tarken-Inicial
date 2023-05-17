import styles from '../layout/Home.module.css'

import { useState, useEffect } from 'react';
import CardFilmes from '../layout/CardFilmes';






function Home(){
    const urlApi ='https://api.themoviedb.org/3/movie/popular?api_key=4f29b990a89a1383d4f6c9af65fec3c5&language=en-US&page=1'

    const [filmes, setFilmes] = useState([])

    useEffect(() =>{
        fetch(urlApi).then(res => res.json())
        .then(data => setFilmes(data.results))
    },[])

  

    return(
        
       <div className = {styles.divPesquisa}>
        
        {filmes.map(filme =>{
            return(
              <CardFilmes {...filme}/>
            )
        })

        }
       
       </div>
    )
}


export default Home