import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                
                <h1 className={styles.moovy}>
                     Moovy
                </h1>
                
                <ul >
                    <div className={styles.list}>
                        <li className={styles.item}>
                        <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                        <Link to="/search">Search</Link>
                         </li>
                        <li className={styles.item}>
                            <Link to="/libary">MyLibrary</Link>  
                        </li>
                    </div>
                   
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar