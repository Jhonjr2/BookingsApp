import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {

    const navigate = useNavigate()
    const [login, setLogin] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setLogin(true);
        }
    }, [login])
    
    


    //register
    const createNewUser = data => {
        const url = 'https://hotels-api.academlo.tech/users'
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    //Login

    const loginUser = data => {
        const url = 'https://hotels-api.academlo.tech/users/login'
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                navigate('/')
                setLogin(true)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return {login, createNewUser, loginUser }
}

export default useAuth