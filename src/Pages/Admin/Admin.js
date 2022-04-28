import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import Logo from '../../images/Logo.png'


const Admin = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const activity = {
            title: e.target.title.value,
            description: e.target.description.value,
            date: e.target.date.value,
            img: e.target.img.value,
        }
        // console.log(activity)
        const { data } = await axios.post('https://polar-taiga-58626.herokuapp.com/activities', activity)
        console.log(data)
        if (data) {
            toast.success("Successfully added", activity.title)
            e.target.reset()
        }
    }
    return (
        <div>
            <div className='my-10'>
                <img className='h-[50px] mx-auto' src={Logo} alt="" />
                <section className='my-10 flex justify-center'>
                    <div className='border w-[500px] p-10 rounded-xl shadow-inner'>
                        <h1 className='text-xl font-bold mb-5'>Add Activities</h1>
                        <form onSubmit={handleSubmit}>
                            <input className='border-b-2 w-full outline-none pb-2 my-3 pl-2' type="text" name='title' placeholder='Title' required />
                            <input className='border-b-2 w-full outline-none pb-2 my-3 pl-2' type="text" name='description' placeholder='Description' required />
                            <input className='border-b-2 w-full outline-none pb-2 my-3 pl-2' type="Date" name='date' placeholder='Date' required />
                            <input className='border-b-2 w-full outline-none pb-2 my-3 pl-2' type="text" name='img' placeholder='Image url' required />
                            <input className='w-full bg-sky-500 text-white py-2 mt-5 cursor-pointer' type="submit" value="Submit" />
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;