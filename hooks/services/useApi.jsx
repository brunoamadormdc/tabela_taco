import axios from 'axios'

export default function useApi() {

    const HTTP = axios.create({
        baseURL: 'http://tabelataco.com.br/api',
        headers: { 'Content-Type': 'application/json'}
    })

    const postService = async (url, data) => {
        return HTTP.post(url, data)
    }


    return {
        postService
    }
}