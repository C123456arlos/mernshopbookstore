import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext'
const Register = () => {

    const { registerUser, signInWithGoogle } = useAuth()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            await registerUser(data.email, data.password)
            alert('user registered')
        } catch (error) {
            setMessage('please provide email')
        }
    }
    const [message, setMessage] = useState('')
    const { loginUser } = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            alert("Google sign in failed!")
            console.error(error)
        }
    }
    return (
        <div className='h-[calc(100vh-120px)] border flex justify-center items-center'>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 py-6 pb-8 mb-4'>
                <h2 className='text-xl font-semibold mb-4'>please register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type='email' name='email' id='email' placeholder='email address'
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none
                            focus:shadow'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                            password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type='password' name='password' id='password' placeholder='password'
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none
                            focus:shadow'></input>
                    </div>
                    {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}
                    <div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
                        px-8 rounded focus:outline-none'>register</button>
                    </div>
                </form>
                <p className='align-baseline font-medium mt-4 text-sm'>please login <Link className='text-blue-500 hover:text-blue-700' to='/login'>login</Link></p>
                <div className='mt-4'>
                    <button onClick={handleGoogleSignIn}
                        className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white
                    font-bold py-2 px-4 rounded focus:outline-none
                    '>
                        <FaGoogle className='mr-2'></FaGoogle>
                        sign in with google
                    </button>
                </div>
                <p className='mt-5 text-center text-gray-500 text-xs'>2026 book mern all rights reserved</p>
            </div>
        </div>

    )
}

export default Register