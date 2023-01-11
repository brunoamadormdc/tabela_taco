import styles from '../../assets/styles/header.module.scss'

export default function Header() {
    return (
        <>
            <div className={styles.header}>
            <div className={styles.header_content}></div>
                <h1 className={styles.title}>

                    Tabela Contagem de Nutrientes TACO
                </h1>

            </div>
        </>
    )
}