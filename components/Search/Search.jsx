import { useRef, useState, useCallback } from 'react'
import styles from '../../assets/styles/search.module.scss'
import axios from 'axios'
import { useRecoilState, useRecoilValue } from 'recoil';
import {result,getResult,gramas} from '../../store/Result'

export default function Search() {

    const search = useRef(null);
    const [grams,setGrams] = useRecoilState(gramas)
    const [results, setResults] = useRecoilState(result)

    const getByname = useCallback(
        () => {
            if (search.current.value != '') {
                axios.post('/api/getbyname', { name: search.current.value }).then((res) => {
                    setResults(res.data.pornome)
                    
                })
            }
        },
        [],
    );



    return (
        <>
            <div className={styles.search}>
                <div className={styles.search_container}>
                    <label>Nome do alimento:</label>
                    <input type="text" placeholder="Faça sua busca" ref={search} />
                    <label>Quantidade em g:</label>
                    <input type="number" placeholder="gramas" value={grams} onChange={(e)=> setGrams(e.target.value)} />
                    <button onClick={getByname}>Buscar Alimento</button>
                </div>

            </div>
        </>
    )
}