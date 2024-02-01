import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './style/RegisterPage.css'

const RegistrerPage = () => {

  const { handleSubmit, reset, register } = useForm()

  const { createNewUser } = useAuth()

  const submit = data => {
    createNewUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender:''
    })
  }

  return (
    <div className='RegisterPage'>
      <h2 className='RegisterPage_title'>Register</h2>
      <form className='RegisterPage_from' onSubmit={handleSubmit(submit)}>
        <label className='RegisterPage_label'>
          <span className='RegisterPage_name'>First Name</span>
          <input className='RegisterPage_input' {...register('firstName')} type="text" />
        </label>
        <label className='RegisterPage_label'>
          <span className='RegisterPage_lastname'>Last Name</span>
          <input className='RegisterPage_input' {...register('lastName')} type="text" />
        </label>
        <label className='RegisterPage_label'>
          <span className='RegisterPage_email'>Email</span>
          <input className='RegisterPage_input' {...register('email')} type="email" />
        </label>
        <label className='RegisterPage_label'>
          <span className='RegisterPage_password'>Password</span>
          <input className='RegisterPage_input' {...register('password')} type="password" />
        </label>
        <label className='RegisterPage_label'>
          <span className='RegisterPage_gender'> Gender</span>
          <select className='RegisterPage_selectt' {...register('gender')}>
            <option className='RegisterPage_option' value="other">prefer not say</option>
            <option className='RegisterPage_option' value="male">male</option>
            <option className='RegisterPage_option' value="female">female</option>
          </select>
        </label>
        <button className='RegisterPage_btn'>regiter</button>
      </form>
    </div>
  )
}

export default RegistrerPage