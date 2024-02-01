import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './style/LoginPage.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ setActiveMenuItem }) => {

  const { handleSubmit, reset, register } = useForm()

  const { loginUser } = useAuth()

  const submit = data => {
    loginUser(data)

    reset({
      email: '',
      password: ''
    })
  }
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
    setActiveMenuItem('home')
    window.location.reload()

  }

  if (localStorage.getItem('token')) {
    const { firstName, lastName } = JSON.parse(localStorage.getItem('user'))

    return (
      <div className='titleLogin'>
        <img src="" alt="" />
        <h2>Welcome {firstName + ' ' + lastName}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )

  }

  const handleNavigateRegister = () => {
    navigate(`/register`)
    setActiveMenuItem('register')
  }



  return (
    <div className='login'>
      <form className='Login_form' onSubmit={handleSubmit(submit)}>
        <div className='Login_textPrincipal'>
          <h2 className='login_title'>Welcome back to Booking login</h2>
          <p className='longin_subtitle'>It's great to have you back!</p>
        </div>
        <label className='login_label'>
          <span className='login_Email'>Email</span>
          <input className='login_input' {...register('email')} type="email" />
        </label>
        <label className='login_label'>
          <span className='login_password'>Password</span>
          <input className='login_input'  {...register('password')} type="password" />
        </label>
        <div>
          <button className='login_btn1'>Login</button>
          <button  onClick={handleNavigateRegister} className='login_btn'>Register</button> 
        </div>
      </form>
      <img className='login_image' src="../img_rojo2.jpeg" alt="" />
    </div>
  )
}

export default LoginPage