import styles from './NavBar.module.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

const NavBar = ()=>{
    return(
        <nav>
            <div>

            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Produto">Produto</Link>
                    </li>
                    <li>
                        <Link to="/Cliente">Cliente</Link>
                    </li>
                    <li>
                        <Link to="/Pedido">Pedido</Link>
                    </li>
                </ul>
            </div>
            <div>
                
            </div>
        </nav>
    )
}


export default NavBar