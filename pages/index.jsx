import Results from "../components/Results/Results";
import Search from "../components/Search/Search";
import Head from "next/head";

export async function getServerSideProps() {
  const meta_title = 'Composição de Alimentos e Criação de Refeições'
  const meta_description = 'Composição de Alimentos e Criação de Refeições - A melhor forma de criar refeições saudáveis e balanceadas.'


  return {
    props: { meta_title, meta_description }, // will be passed to the page component as props
  }
}

export default function Home(props) {

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

      <Search></Search>
      {props.propina}
      <Results></Results>
    </>
  )
}
