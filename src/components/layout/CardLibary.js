import { useState } from 'react';
import styles from './CardLibary.module.css'
import { BsFillStarFill } from "react-icons/bs";


function CardLibary(props){
    
    const apiLinkImg = 'https:/image.tmdb.org/t/p/w500/'

    const[dialogo, setDialogo] = useState(false)

    const chamaConfirmacao = () =>{
        setDialogo(true)
    }

    const remove = (condicao) => {

        if(condicao){
            localStorage.removeItem(props.id) 
            window.location.reload(true)
            setDialogo(false)
        }else{
            setDialogo(false)
        }
      
    }

    return(
        <div className={styles.cardGeral}>
            
            <div className={styles.image}>
                <img src = {props.poster_path ? apiLinkImg+props.poster_path : "https://images.unsplash.com/photo-1620177088163-012f511de69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"}/>

                <div className={styles.overView}>
                    <h2 className={styles.titleOverview}>Overview:</h2>
                    <h3 className={styles.overviewInfo}>{props.overview}</h3>
                </div>

                
            </div>

          
            <div className={styles.info}>
                <div>
                    {dialogo &&(
                        <div className={styles.divConfirmacao}>
                            <p>Tem certeza que quer remover esse card?</p>
                            <button className={styles.btnConfirm} onClick={() => remove(true)}>Confirmar</button>
                            <button className={styles.btnNconfirm} onClick={() => remove(false)}>Cancelar</button>
                        </div>
                    )

                    }
                </div>
                <p className={styles.titleFilme}>{props.title}</p>

                <div className={styles.infoDescription}>
                    <BsFillStarFill className={styles.star}/>
                    <p className={styles.voter}>{props.vote_average.toFixed(1)}</p>
                    <button  onClick={chamaConfirmacao} className={styles.btnAdd}>Remover </button>
                </div>
            </div>

           
           
           
        </div>
    )
}


export default CardLibary