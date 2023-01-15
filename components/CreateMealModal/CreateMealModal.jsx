import { useEffect, useRef } from 'react'
import styles from '../../assets/styles/createmealmodal.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalmeal } from '../../store/ModalMeal'
import { selectedMeal, meals } from '../../store/Meals'
import useGetmeals from '../../hooks/useGetmeals'
import { gramas } from '../../store/Result'

export default function CreateMealModal() {

    const [vmodalmeal, setVModalMeal] = useRecoilState(modalmeal)
    const grams = useRecoilValue(gramas)
    const addMeal = useRef('')
    const [vMeals, setFoodsmeal] = useRecoilState(meals)
    const [insert_meal, setVSelectedMeal] = useRecoilState(selectedMeal)
    const { listmeals } = useGetmeals()

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                resetModal()
            }
        })
    }, [])

    const addNewMeal = () => {
        if(addMeal.current.value === '') return 

        const newMeal = {
            id: String(Math.random()),
            name: addMeal.current.value,
            foods: [],
            enabled:false
        }
        setFoodsmeal((oldMeals) =>{
            const verify = oldMeals.find((meal) => meal.name === newMeal.name)  
            if(verify) return [...oldMeals]
            else return [...oldMeals, newMeal]
        })
        
        addMeal.current.value = ''
    }

    const insertMeal = (id) => () => {
        setFoodsmeal((oldMeals) => {
            const mealIndex = oldMeals.findIndex((meal) => meal.id === id)
            const meal = oldMeals[mealIndex]
            const newMeal = {
                ...meal,
                foods: [...meal.foods, {...insert_meal, gramas:grams}]
            }
            const newMeals = [...oldMeals]
            newMeals[mealIndex] = newMeal
            return newMeals

        })
        resetModal()
    }

    const resetModal = () => {
        setVModalMeal(false)
        setVSelectedMeal(null)
    }

    return (
        <>
            <div className={styles.overlay} onClick={() => resetModal()}></div>
            <div className={styles.createmealmodal}>
                <div className={styles.createmealmodal_container}>
                    <div className={styles.add_meal}>
                        <h3>Adicionar Refeição</h3>
                        <input type="text" ref={addMeal} />
                        <button onClick={addNewMeal}>Adicionar</button>
                    </div>

                    {listmeals.length > 0 && <h4>Selecione em qual refeição deseja inserir o alimento:</h4>}
                    <div className={styles.modal_list}>

                        {listmeals.length > 0 ? listmeals.map((meal) => <div className={styles.list_item} key={meal.id} onClick={insertMeal(meal.id)}>
                            <div className={styles.meal_count}>{meal.foods.length}</div>
                            {meal.name}
                        </div>) : <div>Você não tem refeições cadastradas</div>}
                    </div>
                </div>
            </div>
        </>
    )
}