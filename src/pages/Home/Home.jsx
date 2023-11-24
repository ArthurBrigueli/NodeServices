import styles from './Home.module.css'
import Info from '../../components/Info/Info'



const Home = ()=>{
    return(
        <section className={styles.container}>
            <div className={styles.container_profile}>
                
            </div>
            <div className={styles.container_geral}>
                <div className={styles.container_VisaoGeral}>
                    <h2>Visão Geral</h2>
                    <div className={styles.container_info}>
                        <Info tipo="Produto" quantidade="10"/>
                        <Info tipo="Cliente" quantidade="10"/>
                        <Info tipo="Pedido" quantidade="10"/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Home