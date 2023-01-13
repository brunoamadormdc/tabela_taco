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

const getResult = selector({
    key: 'atom_resultados',
    get: ({ get }) => {
        
        const get_grams = get(gramas)
        
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

        return return_result
    }
})

function ruleOfThree(x, y, z) {
    return (x * z) / y;
}


export { result, getResult, gramas }