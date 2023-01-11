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
                        <div className={styles.title}>{val.description}</div>
                        <div className={styles.kcal}>{Math.round(val.energy_kcal)}/kcal</div>
                        <div className={styles.protein}>{Math.round(val.protein_g)}g/proteín</div>
                        <div className={styles.carb}>{Math.round(val.carbohydrate_g)}g/carbo</div>

                    </div>

                </div>) : ''}
            </div>
        </>
    )
}