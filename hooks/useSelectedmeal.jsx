import { useRecoilValue, useRecoilState } from "recoil"
import { useEffect, useState } from "react"
import { gramas } from '../store/Result'
import useGetmeals from "./useGetmeals"
import { selectedMeal } from "../store/Meals"
import { ruleOfThree } from "../helpers"
export default function useSelectedmeals() {

    const { listmeals } = useGetmeals()
    const [insert_meal, setVSelectedMeal] = useRecoilState(selectedMeal)
    const [initialMeal, setInitialMeal] = useState(JSON.parse(JSON.stringify(insert_meal)))
    const [newGrams, setnewGrams] = useState(100)

    
    useEffect(() => {
        if(newGrams < 0) return 
        setVSelectedMeal((oldMeals) => {
           
            const newSelectedMeal = {
                ...oldMeals,
                calorias: ruleOfThree(initialMeal.calorias, 100, Number(newGrams)),
                carboidratos: ruleOfThree(initialMeal.carboidratos, 100, Number(newGrams)),
                proteinas: ruleOfThree(initialMeal.proteinas, 100, Number(newGrams)),
                gorduras: ruleOfThree(initialMeal.gorduras, 100, Number(newGrams)),
                fibras: ruleOfThree(initialMeal.fibras, 100, Number(newGrams)),
                gorduras_saturadas: ruleOfThree(initialMeal.gorduras_saturadas, 100, Number(newGrams)),
                gorduras_monoinsaturadas: ruleOfThree(initialMeal.gorduras_monoinsaturadas, 100, Number(newGrams)),
                gorduras_poliinsaturadas: ruleOfThree(initialMeal.gorduras_poliinsaturadas, 100, Number(newGrams)),
                colesterol: ruleOfThree(initialMeal.colesterol, 100, Number(newGrams)),
                gorduras_trans: ruleOfThree(initialMeal.gorduras_trans, 100, Number(newGrams)), 
                gramas: newGrams
            }
            
            return newSelectedMeal
        })
        
       
    }, [newGrams])

    return { newGrams, setnewGrams, listmeals, insert_meal, setVSelectedMeal }

}