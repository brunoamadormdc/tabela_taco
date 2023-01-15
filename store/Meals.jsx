
import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'taco_table_meals',
})

const meals = atom({
    key: 'atom_meals',
    default: [],
    effects_UNSTABLE: [persistAtom],
})

const selectedMeal = atom({
    key: 'atom_selected_meals',
    default: null,

})

const selectMeals = selector({
    key: 'select_meals',
    get: ({ get }) => {
        const get_meals = JSON.parse(JSON.stringify(get(meals)))

        for (const idx in get_meals) {
            let totals = { 
                total_calorias: 0, 
                total_carboidratos: 0, 
                total_proteinas: 0,
                total_gramas: 0, 
                total_gorduras: 0, 
                total_gorduras_saturadas:0,
                total_gorduras_monoinsaturadas:0,
                total_gorduras_poliinsaturadas:0,
                total_fibras: 0,
                total_colesterol: 0,
                total_gorduras_trans:0
            }
            get_meals[idx].foods.forEach((food) => {
                totals.total_calorias += isNaN(Number(food.calorias)) ? 0 : Number(food.calorias)
                totals.total_carboidratos += isNaN(Number(food.carboidratos)) ? 0 : Number(food.carboidratos)
                totals.total_proteinas += isNaN(Number(food.proteinas)) ? 0 : Number(food.proteinas)
                totals.total_gorduras += isNaN(Number(food.gorduras)) ? 0 : Number(food.gorduras)
                totals.total_gorduras_saturadas += isNaN(Number(food.gorduras_saturadas)) ? 0 : Number(food.gorduras_saturadas)
                totals.total_gorduras_monoinsaturadas += isNaN(Number(food.gorduras_monoinsaturadas)) ? 0 : Number(food.gorduras_monoinsaturadas)
                totals.total_gorduras_poliinsaturadas += isNaN(Number(food.gorduras_poliinsaturadas)) ? 0 : Number(food.gorduras_poliinsaturadas)
                totals.total_fibras += isNaN(Number(food.fibras)) ? 0 : Number(food.fibras)
                totals.total_colesterol += isNaN(Number(food.colesterol)) ? 0 : Number(food.colesterol)
                totals.gorduras_trans += isNaN(Number(food.gorduras_trans)) ? 0 : Number(food.gorduras_trans)
                totals.total_gramas += isNaN(Number(food.gramas)) ? 0 : Number(food.gramas)
    
                    
            })
            get_meals[idx].totals = totals

            
        }
        console.log(get_meals)
        return get_meals

    }

        

})



export { meals, selectMeals, selectedMeal }