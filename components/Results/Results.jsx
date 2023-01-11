import styles from '../../assets/styles/results.module.scss'
import { useRecoilValue } from 'recoil'
import { getResult } from '../../store/Result'

export default function Results() {

    const getResults = useRecoilValue(getResult)

    return (
        <>
            <div className={styles.results}>
                {getResults.length > 0 ? getResults.map(val => <div className={styles.results_container} key={val.id}>
                    <div className={styles.results_header}>
                        <div className={styles.title}><h2>{val.description}</h2></div>

                        <div className={styles.itens_container}>
                            <div className={styles.itens}>{Math.round(val.energy_kcal)}/kcal</div>
                            <div className={styles.itens}>{Math.round(val.protein_g)}g/proteín</div>
                            <div className={styles.itens}>{Math.round(val.carbohydrate_g)}g/carbo</div>
                            <div className={styles.itens}>{Math.round(val.fiber_g)}g/fibras</div>
                            <div className={styles.itens}>{Math.round(val.fiber_g)}g/fibras</div>
                            <div className={styles.itens}>{Math.round(val.lipid_g)}g/gordura</div>
                            <div className={styles.itens}>{Math.round(val.lipid_g)}g/gord. saturada</div>
                        </div>


                    </div>

                </div>) : ''}
            </div>
        </>
    )
}