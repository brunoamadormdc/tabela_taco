import { useRef, useState, useCallback, useEffect } from 'react'
import styles from '../../assets/styles/search.module.scss'
import axios from 'axios'
import { useRecoilState, useRecoilValue } from 'recoil';
import {result,getResult,gramas, filtro} from '../../store/Result'

export default function Search() {

    const search = useRef(null);
    const [grams,setGrams] = useRecoilState(gramas)
    const [results, setResults] = useRecoilState(result)
    const [filt, setFilt] = useRecoilState(filtro)

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
        (e) => {
            e.preventDefault();
            if (search.current.value != '') {
                setFilt('')
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
                    <form onSubmit={getByname}>
                        <label>Tipo do Alimento:</label>
                        <input type="text" placeholder="Faça sua busca" ref={search} />
                    
                        <button type='submit'>Buscar Alimento</button>
                    </form>
                </div>

            </div>
        </>
    )
}