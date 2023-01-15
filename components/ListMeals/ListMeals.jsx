import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import styles from '../../assets/styles/listmeals.module.scss'
import { meals, selectMeals } from '../../store/Meals'

export default function ListMeals() {

    const listmeals = useRecoilValue(selectMeals)
    const [vmeals, setVMeals] = useRecoilState(meals)
    const [view, setView] = useState([])

    const removeMeal = (id) => {
        const updated = vmeals.filter((item) => item.id !== id)
        setVMeals(updated)
    }

    const toggleItem = (id) => {
        setVMeals((oldMeals) => {
            const mealIndex = oldMeals.findIndex((meal) => meal.id === id)
            const meal = oldMeals[mealIndex]
            const newMeal = {
                ...meal,
                enabled: meal.enabled ? false : true,
            }
            const newMeals = [...oldMeals]
            newMeals[mealIndex] = newMeal
            return newMeals
        })
    }

    useEffect(() => {
        setView(listmeals)
    }, [listmeals])

    return (
        <>
            <div className={styles.listmeals}>
                {view.length > 0 ? listmeals.map((item, index) =>
                    <div key={index} className={styles.meals_item}>
                        <div className={styles.exclude_meal} onClick={() => removeMeal(item.id)}></div>
                        <h3 onClick={() => toggleItem(item.id)}>{item.name} - {Math.round(item.totals.total_calorias)} calorias</h3>
                        {item.foods.length > 0 && item.enabled ? item.foods.map((food) =>
                            <div key={food.id} className={styles.foods_table}>
                                <div className={styles.table_header}>
                                    {food.nome_do_alimento} - {food.gramas}g
                                </div>
                                <div className={styles.table_itens}>
                                    <div className={styles.table_foods}>
                                        <label>Calorias</label>
                                        <span>{Math.round(food.calorias)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Carboidratos</label>
                                        <span>{Math.round(food.carboidratos)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Fibras</label>
                                        <span>{Math.round(food.fibras)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Proteínas</label>
                                        <span>{Math.round(food.proteinas)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras</label>
                                        <span>{Math.round(food.gorduras)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras Sat.</label>
                                        <span>{Math.round(food.gorduras_saturadas)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras Trans</label>
                                        <span>{Math.round(food.gorduras_trans)}</span>
                                    </div>
                                </div>


                            </div>
                        ) : null}
                        {item.foods.length > 0 && item.enabled ?
                            <div className={`${styles.foods_table}`}>

                                <div className={`${styles.table_header} ${styles.table_header_totals}`}>
                                    Total - {item.totals.total_gramas}g
                                </div>
                                <div className={`${styles.table_itens} ${styles.table_itens_totals}`}>
                                    <div className={styles.table_foods}>
                                        <label>Calorias</label>
                                        <span>{Math.round(item.totals.total_calorias)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Carboidratos</label>
                                        <span>{Math.round(item.totals.total_carboidratos)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Fibras</label>
                                        <span>{Math.round(item.totals.total_fibras)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Proteínas</label>
                                        <span>{Math.round(item.totals.total_proteinas)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras</label>
                                        <span>{Math.round(item.totals.total_gorduras)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras Sat.</label>
                                        <span>{Math.round(item.totals.total_gorduras_saturadas)}</span>
                                    </div>

                                    <div className={styles.table_foods}>
                                        <label>Gorduras Trans</label>
                                        <span>{Math.round(item.totals.total_gorduras_trans)}</span>
                                    </div>


                                </div>


                            </div>
                            : null}
                    </div>
                ) : <p>Nenhuma refeição criada</p>}
            </div>
        </>
    )
}