import { useRecoilState } from "recoil"
import {meals} from '../store/Meals'
import styles from '../assets/styles/meals.module.scss'
import CreateMeal from "../components/CreateMeal/CreateMeal"
import ListMeals from "../components/ListMeals/ListMeals"
import Head from "next/head"

export async function getServerSideProps() {
    const meta_title = 'Criador de refeições'
    const meta_description = 'Composição de Alimentos e Criação de Refeições para melhor aproveitamento do APP.'

    return { 
        props: { meta_title, meta_description }, // will be passed to the page component as props
    }
}

export default function Meals (props) {

    const [vmeals,getVMeals] = useRecoilState(meals)

    return (
        <>
        <Head>
        <title>{props.meta_title}</title>
        <meta name='description' content={`${props.meta_title}`} />
        <meta property='og:title' content={`${props.meta_title}`} />
        <meta property='og:description' content={`Compre nosso lanche ${props.meta_description}`} />
        <meta
          property='og:url'
          content={`https://tabelataco.com.br`}
        />
        <meta property='og:type' content='website' />
       
      </Head>
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