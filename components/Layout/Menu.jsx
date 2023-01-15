import styles from '../../assets/styles/menu.module.scss'

export default function Menu({ children }) {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.menu_container}>
                    
                        {children}
                    
                </div>
            </div>
        </>
    )
}