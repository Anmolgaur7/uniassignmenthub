import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
    const [data, setdata] = useState({
        fullname: '',
        email: '',
        password: ''
    })
    const handlesubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <div className='flex relative justify-end  bg-center items-center'>
            <div className=' absolute inset-0 bg-log bg-cover bg-center'></div>
            <div className='  absolute inset-0 bg-black opacity-50'></div>
            <form onSubmit={(e) => handlesubmit(e)} className='  w-full text-white  bg-opacity-20 md:text-black md:bg-opacity-100 lg:bg-opacity-100 relative md: bg-white flex-col md:w-1/2  lg:w-1/2 flex justify-center items-center p-20 shadow-lg rounded-lg'>
                <h1 className='text-4xl  font-bold'>Welcome</h1>
                <h1 className='text-lg  font-normal mb-16'>Sign up to get Started</h1>
                <label className='text-lg  font-normal'>First Name</label>
                <input type="text" name='fullname' placeholder='Enter your  Name' onChange={(e) => setdata({ ...data, fullname: e.target.value })} className=' p-2 m-2 border bg-slate-100 border-black ' />
                <label className='text-lg  font-normal' >Email</label>
                <input type="email" name='email' placeholder='Enter your email' onChange={(e) => setdata({ ...data, email: e.target.value })} className=' p-2 m-2 border bg-slate-100 border-black ' />
                <label className='text-lg  font-normal'>Password</label>
                <input type="password" name='password' placeholder='Enter you password' onChange={(e) => { setdata({ ...data, password: e.target.value }) }} className=' p-2 m-2 bg-slate-100 border border-black ' />
                <button type='submit' className='bg-blue-500 text-lg w-[6rem]  h-[3rem] p-1 font-bold text-white rounded-2xl mt-10 hover:bg-blue-400'   >Sign Up</button>
                <div className='mt-8 font-medium '>Already have an account? <span className='text-blue-400'><Link to="/login">Sign In</Link></span></div>
            </form>
        </div >
    )
}

export default Signup
