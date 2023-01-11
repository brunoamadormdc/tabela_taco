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
                            <div className={styles.itens}>Calorias: {Math.round(val.energy_kcal)}kcal</div>
                            <div className={styles.itens}>Proteínas: {Math.round(val.protein_g)}g</div>
                            <div className={styles.itens}>Carbo: {Math.round(val.carbohydrate_g)}g</div>
                            <div className={styles.itens}>Fibras:{Math.round(val.fiber_g)}g</div>

                            <div className={styles.itens}>Gorduras: {Math.round(val.lipid_g)}g</div>
                            <div className={styles.itens}>Gord.Saturada: {Math.round(val.lipid_g)}g</div>
                        </div>


                    </div>

                </div>) : <div className={styles.results_container}>Não foram encontrados resultados</div>}
            </div>
        </>
    )
}