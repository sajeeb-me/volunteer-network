import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/Logo.png'

const Register = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()

    const handleSubmit = e => {
        e.preventDefault()
        const volunteer = {
            name: user?.displayName,
            email: user?.email,
            date: e.target.date.value,
            description: e.target.description.value,
        }
        console.log(volunteer)
    }

    return (
        <div className='my-10'>
            <img className='h-[50px] mx-auto' src={Logo} alt="" />
            <section className='my-10 flex justify-center'>
                <div className='border w-[500px] p-10 rounded-xl shadow-inner'>
                    <h1 className='text-xl font-bold mb-5'>Register as a Volunteer</h1>
                    <form onSubmit={handleSubmit}>
                        <input className='border-b-2 w-full outline-none pb-2 my-3' type="text" name='name' placeholder='Full Name' value={user?.displayName} required readOnly disabled />
                        <input className='border-b-2 w-full outline-none pb-2 my-3' type="email" name='email' placeholder='Email' value={user?.email} required readOnly disabled />
                        <input className='border-b-2 w-full outline-none pb-2 my-3' type="text" name='activity' placeholder='Activity' required readOnly disabled />
                        <input className='border-b-2 w-full outline-none pb-2 my-3' type="date" name='date' placeholder='Date' required />
                        <input className='border-b-2 w-full outline-none pb-2 my-3' type="text" name='description' placeholder='Description' required />
                        <input className='w-full bg-sky-500 text-white py-2 mt-5 cursor-pointer' type="submit" value="Registration" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;