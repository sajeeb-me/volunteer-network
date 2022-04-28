import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/activities')
            if (!data.success) return toast.error(data.error)
            setActivities(data.data)
        })()
    }, [])
    return (
        <div className='my-10 px-[120px]'>
            <section className='grid grid-cols-4 gap-5'>
                {
                    activities.map(getActivity => <Activity key={getActivity._id} getActivity={getActivity} />)
                }
            </section>
        </div>
    );
};

export default Activities;