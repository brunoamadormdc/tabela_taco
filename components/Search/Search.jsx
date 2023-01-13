import { useRef, useState, useCallback, useEffect } from 'react'
import styles from '../../assets/styles/search.module.scss'
import axios from 'axios'
import { useRecoilState, useRecoilValue } from 'recoil';
import {result,getResult,gramas} from '../../store/Result'

export default function Search() {

    const search = useRef(null);
    const [grams,setGrams] = useRecoilState(gramas)
    const [results, setResults] = useRecoilState(result)

    useEffect(()=>{
        setGrams(100)
    },[])

    const modifyGrams = useCallback(
        (e) => {
            let grams = (e.target.value == '' || e.target.value < 0) ? 1 : e.target.value
            setGrams(grams)
        },[]
    )
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
                    <label>Quantidade em gramas:</label>
                    <input type="number" placeholder="gramas" onChange={modifyGrams} />
                    <button onClick={getByname}>Buscar Alimento</button>
                </div>

            </div>
        </>
    )
}