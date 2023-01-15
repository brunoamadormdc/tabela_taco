import styles from '../../assets/styles/menucontent.module.scss'
import { useRouter } from 'next/router'
import dinner from '../../assets/images/dinner.png'
import api from '../../assets/images/api.png'
import ebook from '../../assets/images/ebook.png'
import home from '../../assets/images/home.png'
import Image from 'next/image'

export default function MenuContent({  }) {

    const location = useRouter()
    
    const changePage = ( page ) => location.push(page)

    return (
        <>
            <div className={styles.menu_item} onClick={() => changePage('/refeicoes')}>
                <div className={styles.menu_item_icon}>
                    <Image src={dinner} alt="Refeições" />                   
                </div>
                <div className={styles.menu_item_text} >Refeições</div>
            </div> 
            <div className={styles.menu_item} onClick={() => changePage('/')}>
                <div className={styles.menu_item_icon}>
                    <Image src={home} alt="home" />                   
                </div>
                <div className={styles.menu_item_text} >Home</div>
            </div> 
            <div className={styles.menu_item} onClick={() => changePage('/obterapi')}>
                <div className={styles.menu_item_icon}>
                    <Image src={api} alt="api" />                   
                </div>
                <div className={styles.menu_item_text} >API</div>
            </div> 
            <div className={styles.menu_item} onClick={() => changePage('/ebooks')}>
                <div className={styles.menu_item_icon}>
                    <Image src={ebook} alt="ebook" />                   
                </div>
                <div className={styles.menu_item_text} >Ebooks</div>
            </div> 
            
        </>
    )
}