import Header from './Header.jsx'
import styles from '../../assets/styles/app.module.scss'

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <div className={styles.app}>
                <div className={styles.container_app}>
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}