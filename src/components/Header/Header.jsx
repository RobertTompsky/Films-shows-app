import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from '../../img/usericon.png'

const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        if(term === "") return alert("Please enter search term")
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm("")
    }
    return (
        <div className='bg-slate-800 px-20 py-8 flex flex-row items-center justify-between'>
            <div className='text-3xl font-semibold text-white'><Link to="/" className='items-center'>Movie App</Link></div>
            <div>
                <form onSubmit={submitHandler} className='flex flex-row items-center'>
                    <input className='rounded p-1 bg-slate-100 w-80 h-10 text-xl' type='text' value={ term} placeholder='Movies or Shows' onChange={(e) => setTerm(e.target.value)} />
                    <button type='submit' className='bg-sky-400 rounded h-10 p-1 ml-2 font-semibold text-white cursor-pointer w-16'>Search</button>
                </form>
            </div>
            <div className='h-50 w-50'>
                <img src={user} alt='user' className='h-16 w-16'/>
            </div>
        </div>
    );
};

export default Header;