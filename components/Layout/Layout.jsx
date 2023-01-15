import Header from './Header.jsx'
import styles from '../../assets/styles/app.module.scss'
import Footer from './Footer.jsx'
import Menu from './Menu.jsx'
import MenuContent from '../MenuContent/MenuContent.jsx'
import { useRecoilValue } from 'recoil'
import { modalmeal } from '../../store/ModalMeal'
import CreateMealModal from '../CreateMealModal/CreateMealModal.jsx'

export default function Layout({ children }) {
   
    const modal = useRecoilValue(modalmeal)
   
    return (
        <>  
            {modal ? <CreateMealModal /> : null}
            <Menu>
                <MenuContent />
            </Menu>
            <Header></Header>
            <div className={styles.app}>
                <div className={styles.container_app}>
                    {children}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}