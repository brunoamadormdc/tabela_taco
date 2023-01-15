
import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const {persistAtom} = recoilPersist({
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
    key:'select_meals',
    get: ({ get }) => {
        const get_meals = get(meals)
        return get_meals
    }
})



export  { meals, selectMeals, selectedMeal}