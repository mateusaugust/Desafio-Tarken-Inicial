import { useState } from 'react';
import styles from './CardFilmes.module.css'
import {BsFillStarFill } from "react-icons/bs";






function CardFilmes(props){
    const apiLinkImg = 'https:/image.tmdb.org/t/p/w500/'
    
    const[isAdd,setIsAdd]=useState(Boolean(localStorage.getItem(props.id)))
    
    const addStorage = () =>{
       
        let url = 'https://api.themoviedb.org/3/movie/'+props.id+'?api_key=4f29b990a89a1383d4f6c9af65fec3c5&language=en-US'
        localStorage.setItem(props.id,url)
        setIsAdd(true)
    }
    
  
  
   
    return(
        <div className ={styles.card}>
            <div className={styles.image}>
                <img name ="img" src = {props.poster_path ? apiLinkImg+props.poster_path : "https://images.unsplash.com/photo-1523207911345-32501502db22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}/>

                <div className={styles.overView}>
                    <h2 className={styles.titleOverview}>Overview:</h2>
                    <h3 name="info" className={styles.overviewInfo}>{props.overview}</h3>
                </div>
            </div>

            <div className={styles.info}>
                <p name="titulo"className={styles.title}>{props.title}</p>

                <div className={styles.infoDescription}>

                    <BsFillStarFill className={styles.star}/>
                    <p name="votos"className={styles.voter}>{props.vote_average}</p>
                    <button  onClick={addStorage} className={isAdd ? styles.btnAdd2 : styles.btnAdd }>{isAdd ? "Adicionado" : "Adicionar"}</button>
                      
                </div>
            </div>

            

          
        </div>
    )
}

export default CardFilmes