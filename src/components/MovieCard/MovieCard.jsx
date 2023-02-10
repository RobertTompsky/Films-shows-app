import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({data}) => {
    return (
        <div className='bg-slate-800 py-4 px-4 rounded-xl cursor-pointer transition-all hover:bg-slate-600 hover:scale-105'>
            <Link to={`/movie/${data.imdbID}`}>
            <div>
                <div>
                    <img src={data.Poster} alt={data.Title} className='w-full h-full'/>
                </div>
                <br></br>
                <div>
                    <div className='flex flex-col py-2 px-2 rounded-md opacity-90'>
                        <h4 className='text-slate-100 text-xl font-semibold w-fit'>{data.Title}</h4>
                        <p className='text-slate-100 text-xl font-medium'>{data.Year}</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default MovieCard;