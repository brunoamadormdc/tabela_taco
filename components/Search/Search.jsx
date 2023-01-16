import { useRef, useCallback, useEffect } from 'react'
import styles from '../../assets/styles/search.module.scss'
import { useRecoilState } from 'recoil';
import { filtro} from '../../store/Result'
import useApi from '../../hooks/services/useApi';
import { result, gramas } from '../../store/Result';

export default function Search() {

    const search = useRef(null);
    const [grams,setGrams] = useRecoilState(gramas)
    const [results, setResults] = useRecoilState(result)
    const [filt, setFilt] = useRecoilState(filtro)
    const {postService} = useApi()

    useEffect(()=>{
        setGrams(100)
    },[])

    const getByname = useCallback(
        (e) => {
            e.preventDefault();
            if (search.current.value != '') {
                setFilt('')
                postService('getbyname', { name: search.current.value }).then((res) => {
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