import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Logo from '../../../images/Logo.png'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    const [user] = useAuthState(auth)

    return (
        <nav className='flex justify-between items-center px-[120px] py-3'>
            <div>
                <Link to='/'><img className='h-[50px]' src={Logo} alt="" /></Link>
            </div>
            <div className='flex items-center gap-5'>
                <ActiveLink className='py-2' to='/'>Home</ActiveLink>
                <ActiveLink className='py-2' to='/donation'>Donation</ActiveLink>
                <ActiveLink className='py-2' to='/events'>Events</ActiveLink>
                <ActiveLink className='py-2' to='/blog'>Blog</ActiveLink>
                {
                    user ?
                        <div className='flex gap-3'>
                            {/* <Link to='/register'>
                                <button className='rounded-md py-1 px-4 bg-purple-700 text-white'>Register</button>
                            </Link> */}
                            <Link to='/admin'>
                                <button className='rounded-md py-1 px-4 bg-purple-700 text-white'>Admin</button>
                            </Link>
                            <button onClick={() => signOut(auth)} className='border rounded-md py-1 px-4 border-red-500 hover:bg-red-500 hover:text-white duration-200 ease-in'>Log Out</button>
                        </div>
                        :
                        <Link to='/login'>
                            <button className='border rounded-md py-1 px-4 border-sky-500 hover:bg-sky-500 hover:text-white duration-200 ease-in'>Login</button>
                        </Link>
                }
            </div>
        </nav>
    );
};

export default Header;