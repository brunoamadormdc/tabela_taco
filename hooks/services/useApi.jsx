import axios from 'axios'

export default function useApi() {

    const HTTP = axios.create({
        baseURL: 'http://localhost:3000/api',
        headers: { 'Content-Type': 'application/json'}
    })

    const postService = async (url, data) => {
        return HTTP.post(url, data)
    }


    return {
        postService
    }
}