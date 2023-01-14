import styles from '../../assets/styles/filter.module.scss'
import {useCallback,useRef} from 'react'
import { useRecoilState } from 'recoil'
import { filtro, gramas } from '../../store/Result'

export default function Filter() {

    const [filt, setFilter] = useRecoilState(filtro)
    const [grams, setGrams] = useRecoilState(gramas)

    const value = useRef(filt)
    const value_gramas = useRef(grams)


    const addFilter = useCallback(
        (e) => {
            setFilter(e.target.value)
        }, []
    )

    const addGrams = useCallback(
        (e) => {
            setGrams(e.target.value)
        }, []
    )

    return (
        <>
            <div className={styles.filter}>
                <div className={styles.filter_input}>
                    <label>Refinar o filtro:</label>
                    <input type="text" placeholder="Filtrar por nome" ref={value} onKeyUp={addFilter} />
                </div>
                <div className={styles.filter_grams}>
                    <label>Peso em gramas:</label>
                    <input type="text" placeholder="Peso em gramas" ref={value_gramas} onKeyUp={addGrams} />
                </div>
            </div>
        </>
    )
}