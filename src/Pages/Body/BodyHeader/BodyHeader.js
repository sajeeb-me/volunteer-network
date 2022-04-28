import React from 'react';

const BodyHeader = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-4xl font-bold mb-8'>I GROW BY HELPING PEOPLE IN NEED</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input className='border rounded-l-lg p-2 w-[350px]' type="text" placeholder='Search...' />
                    <input className='bg-sky-500 text-white py-2 px-5 border border-sky-500 rounded-r-lg cursor-pointer' type="submit" value="Search" />
                </form>
            </section>
        </div>
    );
};

export default BodyHeader;