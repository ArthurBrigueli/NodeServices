import styles from './NavBar.module.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { SlArrowDown } from "react-icons/sl";
import { useState } from 'react';


const NavBar = ()=>{


    const [showDropdown, setShowDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setShowDropdown(index);
    };

    const handleMouseLeave = () => {
        setShowDropdown(null);
    };




    return(
        <nav className={styles.navbar}>
            <div>

            </div>

            <ul className={styles.ul}>
                <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                <Link to="/">Home <SlArrowDown color="white" fontSize={8} /></Link>
                {showDropdown === 1 && (
                    <div className={styles.container_drop}>
                        <Link to="/Produto">Produto</Link>
                        <Link to="/Cliente">Cliente</Link>
                        <Link to="/Pedido">Pedido</Link>
                    </div>
                )}
                </li>
                <li onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                <Link to="/Produto">Produto <SlArrowDown color="white" fontSize={8} /></Link>
                {showDropdown === 2 && (
                    <div className={styles.container_drop}>
                        <Link to="/Produto">Produtos</Link>
                        <Link to="/Produto/Cadastrar">Cadastrar</Link>
                    </div>
                )}
                </li>
                <li onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                <Link to="/Cliente">Cliente <SlArrowDown color="white" fontSize={8} /></Link>
                {showDropdown === 3 && (
                    <div className={styles.container_drop}>
                        <Link to="/Cliente">Cliente</Link>
                        <Link to="/Cliente/Cadastrar">Cadastrar</Link>
                    </div>
                )}
                </li>
                <li onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
                <Link to="/Pedido">Pedido <SlArrowDown color="white" fontSize={8} /></Link>
                {showDropdown === 4 && (
                    <div className={styles.container_drop}>
                        <Link to="/Pedido">Pedido</Link>
                        <Link to="/Pedido/Cadastrar">Cadastrar</Link>
                    </div>
                )}
                </li>
            </ul>

            <div>
                
            </div>
        </nav>
    )
}


export default NavBar