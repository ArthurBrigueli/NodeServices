import styles from './Info.module.css'


const Info = ({tipo, quantidade})=>{
    return(
        <div className={styles.container}>
            <div>
                <h2>{tipo}</h2>
            </div>
            <div className={styles.container_info}>
                <p>Quantidade: {quantidade}</p>
            </div>
        </div>
    )
}


export default Info