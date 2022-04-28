import React, { useEffect } from 'react';
import Logo from '../../images/Logo.png'
import GoogleIcon from '../../images/google.png'
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            const email = user?.user?.email;
            if (email) {
                (async () => {
                    const { data } = await axios.post('https://polar-taiga-58626.herokuapp.com/login', { email })
                    // console.log(data)
                    localStorage.setItem("accessToken", data.token)
                    if (data) {
                        navigate(from, { replace: true });
                    }
                })()
            }
        }
    }, [user, navigate, from])

    if (loading) {
        return <Loading />
    }
    if (error) {
        console.error(error);
        return toast.error(error.message)
    }

    return (
        <div className='my-10'>
            <img className='h-20 mx-auto' src={Logo} alt="" />
            <section className='my-20 flex justify-center'>
                <div className='border p-20 rounded-xl shadow-inner'>
                    <h1 className='text-xl font-bold mb-5'>Login With</h1>
                    <button onClick={() => signInWithGoogle()} className='flex items-center border rounded-full p-2 hover:shadow-md'>
                        <img className='h-7' src={GoogleIcon} alt="" />
                        <p className='mx-20 font-semibold'>Continue with Google</p>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Login;