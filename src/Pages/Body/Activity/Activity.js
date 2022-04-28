import React from 'react';
import { useNavigate } from 'react-router-dom';

const Activity = ({ getActivity }) => {
    const navigate = useNavigate()
    const { _id, title, img } = getActivity;
    const colors = ["#f59e0b", "#ea580c", "#0ea5e9", "#7e22ce"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div onClick={() => navigate(`/register/${_id}`)} className='cursor-pointer'>
            <section className='w-[260px] relative'>
                <img className='w-full' src={img} alt="" />
                <h1 style={{ backgroundColor: randomColor }} className='absolute text-white font-semibold z-10 bottom-0 w-full py-3 rounded-b-lg'>{title}</h1>
            </section>
        </div>
    );
};

export default Activity;