import { useEffect, useRef } from 'react'
import styles from '../../assets/styles/createmealmodal.module.scss'
import { useRecoilState } from 'recoil'
import { modalmeal } from '../../store/ModalMeal'
import { selectedMeal } from '../../store/Meals'
import { meals } from '../../store/Meals'

import useSelectedmeals from '../../hooks/useSelectedmeal'

export default function CreateMealModal() {
    
    const [vmodalmeal, setVModalMeal] = useRecoilState(modalmeal)
    const addGrams = useRef('')
    const [vMeals, setFoodsmeal] = useRecoilState(meals)

    const { setnewGrams, listmeals, insert_meal, setVSelectedMeal, newGrams } = useSelectedmeals(selectedMeal)


    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                resetModal()
            }
        })
    }, [])

    const insertMeal = (id) => () => {
        setFoodsmeal((oldMeals) => {
            const mealIndex = oldMeals.findIndex((meal) => meal.id === id)
            const meal = oldMeals[mealIndex]
            const newMeal = {
                ...meal,
                foods: [...meal.foods, { ...insert_meal, gramas: newGrams }]
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
            <div className={styles.overlay}></div>
            <div className={styles.createmealmodal}>
                <div className={styles.createmealmodal_container}>
                    <div className={styles.close_modal} onClick={() => resetModal()}>X</div>
                    <div className={styles.add_meal}>
                        <h3>Selecione quantas gramas do alimento</h3>
                        <div className={styles.add_meal_container} onChange={()=>setnewGrams(addGrams.current.value)}>
                            <input type="number" ref={addGrams} />
                        </div>

                    </div>
                    <div key={insert_meal.id} className={styles.foods_table}>
                                <div className={styles.table_header}>
                                    {insert_meal.nome_do_alimento} - {newGrams}g
                                </div>
                                <div className={styles.table_itens}>
                                    <div className={styles.table_foods}>
                                        <label>Calorias</label>
                                        <span>{Math.round(insert_meal.calorias)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Carboidratos</label>
                                        <span>{Math.round(insert_meal.carboidratos)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Fibras</label>
                                        <span>{Math.round(insert_meal.fibras)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Proteínas</label>
                                        <span>{Math.round(insert_meal.proteinas)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras</label>
                                        <span>{Math.round(insert_meal.gorduras)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras Sat.</label>
                                        <span>{Math.round(insert_meal.gorduras_saturadas)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras Trans</label>
                                        <span>{Math.round(insert_meal.gorduras_trans)}</span>
                                    </div>
                                </div>


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