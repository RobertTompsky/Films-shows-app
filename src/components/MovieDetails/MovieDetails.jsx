import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';

const MovieDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data)
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(params.imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, params.imdbID])
    return (
        <div className='bg-slate-900 py-10 px-20 text-white flex flex-row gap-x-20'>
            {Object.keys(data).length === 0 ? 
            (<div className='text-2xl'>...Loading</div>) :
            (<>
            <div className='w-4/6 flex flex-col gap-y-4'>
                <div className='text-4xl font-semibold pt-0'>{data.Title}</div>
                <div className='flex flex-row gap-4 text-xl text-sky-400'>
                    <div>IMDB Rating: {data.imdbRating} </div>
                    <div>IMDB Votes: {data.imdbVotes} </div>
                    <div>Runtime: {data.Runtime}</div>
                    <div>Year: {data.Year}</div>
                </div>
                <div className='text-xl'>{data.Plot}</div>
                <div className='w-3/6 text-xl grid grid-cols-2'>
                    <div>Director</div>
                    <div className='text-sky-400'>{data.Director}</div>
                    <div>Actors</div>
                    <div className='text-sky-400'>{data.Actors}</div>
                    <div>Genres</div>
                    <div className='text-sky-400'>{data.Genre}</div>
                    <div>Language</div>
                    <div className='text-sky-400'>{data.Language}</div>
                    <div>Rated</div>
                    <div className='text-sky-400'>{data.Rated}</div>
                </div>
            </div>
            <div className='w-2/6'>
                <img src={data.Poster} alt={data.Title} className='w-full'></img>
            </div>
            </>
            )}
        </div>
    );
};

export default MovieDetails;