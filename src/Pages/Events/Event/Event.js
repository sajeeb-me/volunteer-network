import React from 'react';

const Event = ({ getEvent, handleCancel }) => {
    const { _id, activity, date, img } = getEvent;


    return (
        <div>
            <section className='w-[500px] bg-slate-200 flex gap-5 p-5 rounded-lg'>
                <div className='w-[200px]'>
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className='text-left'>
                    <h1 className='text-xl font-bold'>{activity}</h1>
                    <p className='font-semibold mt-3'>Date: {date}</p>
                    <button onClick={() => handleCancel(_id)} className='bg-red-300 hover:bg-red-500 py-1 px-5 rounded text-white mt-5'>Cancel</button>
                </div>
            </section>
        </div>
    );
};

export default Event;