import { useRef } from "react"
import { useRecoilState } from "recoil"
import { meals } from "../../store/Meals"
import styles from '../../assets/styles/create_meal.module.scss'


export default function CreateMeal() {

    const meal = useRef('')
    const [vmeals, setVMeals] = useRecoilState(meals)

    const addMeal = () => {
        const verify = vmeals.find((item) => item.name === meal.current.value)

        if (verify) {
            return
        }
        let newdata = { name: meal.current.value, foods: [], enabled:false, id: String(Math.random()) }
        const updated = [...vmeals, newdata]

        setVMeals(updated)
        meal.current.value = ''
    }


    return (
        <>
            <div styles={styles.create_meal}>
                <input type="text" ref={meal} />
                <button onClick={addMeal}>Adicionar</button>
            </div>
        </>
    )
}