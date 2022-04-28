import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Event from './Event/Event';

const Events = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const email = user?.email;
    const [events, setEvents] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://polar-taiga-58626.herokuapp.com/registered?email=${email}`, {
                    headers: {
                        authentication: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                setEvents(data)
            }
            catch (error) {
                console.log(error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        })()
    }, [email])

    const handleCancel = async (id) => {
        await axios.delete(`https://polar-taiga-58626.herokuapp.com/registered/${id}`)
            .then(data => {
                const permission = window.confirm("Are you sure to Cancel?")
                if (permission) {
                    console.log(data)
                    const remaining = events.filter(event => event._id !== id)
                    setEvents(remaining)
                }
            })
    }


    return (
        <div className='my-10'>
            <section className='px-[150px] grid grid-cols-2 gap-5'>
                {
                    events.map(getEvent => <Event key={getEvent._id} getEvent={getEvent} handleCancel={handleCancel} />)
                }
            </section>
        </div>
    );
};

export default Events;