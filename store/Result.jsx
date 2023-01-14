import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const {persistAtom} = recoilPersist()


const result = atom({
    key: 'atom_result',
    default: [],
})

const gramas = atom({
    key: 'atom_grams',
    default: 100,
    effects_UNSTABLE: [persistAtom],
})

const filtro = atom({
    key: 'atom_filter',
    default: '',
})

const getResult = selector({
    key: 'atom_resultados',
    get: ({ get }) => {
        
        const get_grams = get(gramas)
        const get_filter = get(filtro)

        let return_result

        return_result = JSON.parse(JSON.stringify(get(result)))

        return_result.length > 0 ? return_result = return_result.map(val => {

            for(const key in val) {

                let value = Number(val[key])

                if(!isNaN(value)) {
                    val[key] = ruleOfThree(val[key],100,get_grams)
                }
            }
            return val
        }) : return_result = []

        if(get_filter !== '') {
            return_result = return_result.filter(val => val.nome_do_alimento.toLowerCase().includes(get_filter.toLowerCase()))
        }

        return return_result
    }
})

function ruleOfThree(x, y, z) {
    return (x * z) / y;
}


export { result, getResult, gramas, filtro }