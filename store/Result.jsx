import { atom, selector } from 'recoil'

const result = atom({
    key: 'atom_result',
    default: []
})

const gramas = atom({
    key: 'atom_grams',
    default: 100
})

const getResult = selector({
    key: 'atom_resultados',
    get: ({ get }) => {
        const get_grams = get(gramas)
        let return_result

        return_result = JSON.parse(JSON.stringify(get(result)))

        return_result.length > 0 ? return_result = return_result.map(val => {
            val.energy_kcal = ruleOfThree(val.energy_kcal,100,get_grams)
            val.energy_kj = ruleOfThree(val.energy_kj | 0,100,get_grams)
            val.carbohydrate_g = ruleOfThree(val.carbohydrate_g | 0,100,get_grams)
            val.protein_g = ruleOfThree(val.protein_g | 0,100,get_grams)
            


            return val
        }) : return_result = []

        return return_result
    }
})

function ruleOfThree(x, y, z) {
    return (x * z) / y;
}


export { result, getResult, gramas }