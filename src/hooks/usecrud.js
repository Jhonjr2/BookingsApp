import axios from 'axios'
import { useState } from 'react'
import getConfigToken from '../services/getConfigToken'

const usecrud = () => {

    const [response, setResponse] = useState()

    const baseUrl = 'https://hotels-api.academlo.tech'

    //Get
    const getApi = (path) => {
        const url = `${baseUrl}${path}`
        axios.get(url, getConfigToken())
            .then(res => setResponse(res.data))
            .catch(err => {
                console.log(err)
                if(err.response.status === 403){
                    localStorage.removeItem('token')
                    localStorage.removeItem('token')
                }
            })
    }
    //Post
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}`
        axios.post(url, data, getConfigToken())
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
                if(err.response.status === 403){
                    localStorage.removeItem('token')
                    localStorage.removeItem('token')
                }
            })
    }
    //DELETE
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}`
        axios.delete(url, getConfigToken())
            .then(res => {
                console.log(res.data)
                setResponse(response.filter(e => e.id !== id))
            })
            .catch(err => {
                console.log(err)
                if(err.response.status === 403){
                    localStorage.removeItem('token')
                    localStorage.removeItem('token')
                }
            })
    }
    //UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}`
        axios.patch(url, data, getConfigToken())
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
                if(err.response.status === 403){
                    localStorage.removeItem('token')
                    localStorage.removeItem('token')
                }
            })

    }

    return [response, getApi, postApi, deleteApi, updateApi]

}

export default usecrud