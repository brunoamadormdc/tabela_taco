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
            let grams = (e.target.value == '' || e.target.value <= 0) ? 1 : e.target.value
            setGrams(grams)
        }, []
    )

    return (
        <>
            <div className={styles.filter}>
                <div className={styles.filter_input}>
                    <label>Refinar o filtro:</label>
                    <input type="text" placeholder="Filtrar por nome" ref={value} onKeyUp={addFilter} />
                </div>
                
            </div>
        </>
    )
}