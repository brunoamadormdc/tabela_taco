
import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const {persistAtom} = recoilPersist()

const meals = atom({
    key: 'atom_meals',
    default: [],
    effects_UNSTABLE: [persistAtom],
})

const selectMeals = atom({
    key:'select_meals',
    default:[]
})