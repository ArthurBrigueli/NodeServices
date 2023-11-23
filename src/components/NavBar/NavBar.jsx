import styles from './NavBar.module.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { SlArrowDown } from "react-icons/sl";


const NavBar = ()=>{
    return(
        <nav className={styles.navbar}>
            <div>

            </div>

            <ul className={styles.ul}>
                <li>
                    <Link to="/">Home <SlArrowDown color='white' fontSize={8}/></Link>
                </li>
                <li>
                    <Link to="/Produto">Produto <SlArrowDown color='white' fontSize={8}/></Link>
                </li>
                <li>
                    <Link to="/Cliente">Cliente <SlArrowDown color='white' fontSize={8}/></Link>
                </li>
                <li>
                    <Link to="/Pedido">Pedido <SlArrowDown color='white' fontSize={8}/></Link>
                </li>
            </ul>

            <div>
                
            </div>
        </nav>
    )
}


export default NavBar