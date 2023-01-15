import { useRecoilState } from "recoil"
import {meals} from '../store/Meals'
import styles from '../assets/styles/meals.module.scss'
import CreateMeal from "../components/CreateMeal/CreateMeal"
import ListMeals from "../components/ListMeals/ListMeals"

export default function Meals () {

    const [vmeals,getVMeals] = useRecoilState(meals)

    return (
        <>
            <div className={styles.meals}>
                <h2>Crie e visualize suas refeições</h2>
                <div className={styles.meals_container}>
                    <CreateMeal />
                    <ListMeals />
                </div>

            </div>
        </>
    )
}