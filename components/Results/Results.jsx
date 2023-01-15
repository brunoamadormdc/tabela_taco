import styles from '../../assets/styles/results.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getResult, gramas as grams } from '../../store/Result'
import Filter from '../Filter/Filter'
import { modalmeal } from '../../store/ModalMeal'
import { selectedMeal } from '../../store/Meals'

export default function Results() {

    const getResults = useRecoilValue(getResult)
    const gramas = useRecoilValue(grams)
    const [vModal,setVmodal] = useRecoilState(modalmeal)
    const [vSelectedMeal,setVSelectedMeal] = useRecoilState(selectedMeal)

    const selectMeal = (meal) => {
        setVmodal(true)
        setVSelectedMeal(meal)
        
    }    

    return (
        <>  
            <Filter />
            <div className={styles.results}>
                {getResults.length > 0 ? getResults.map(val => <div className={styles.results_container} key={val.id}>
                    <div className={styles.results_header}>
                        <div className={styles.add_meal} onClick={() => selectMeal(val)}></div>
                        <div className={styles.title}><h2>{val.nome_do_alimento} - por {gramas}/g</h2></div>

                        <div className={styles.itens_container}>
                            <div className={styles.itens}><label>Calorias</label> <span>{Math.round(val.calorias)}</span></div>
                            <div className={styles.itens}><label>Proteínas</label> <span>{Math.round(val.proteinas)}g</span></div>
                            <div className={styles.itens}><label>Carboidratos</label> <span>{Math.round(val.carboidratos)}g</span></div>
                            <div className={styles.itens}><label>Gorduras</label><span>{Math.round(val.gorduras)}g</span></div>
                            
                        </div>


                    </div>

                </div>) : <div className={styles.results_container}>Não foram encontrados resultados</div>}
            </div>
        </>
    )
}