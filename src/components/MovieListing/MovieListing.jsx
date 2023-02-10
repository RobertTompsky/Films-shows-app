import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'


const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    const RenderMovies = () => {
        return (
            <nav className='grid grid-cols-5 gap-x-8 justify-between gap-y-8'>
                {movies.Search.map((movie, index) => (
                    <MovieCard key={index} data={movie} />
                ))}
            </nav>
        )
    };

    const ErrorMovies = () => {
        return (
            <div>
                <h3>{movies.Error}</h3>
            </div>
        )
    }
    
    const RenderShows = () => {
        return (
            <nav className='grid grid-cols-5 gap-x-8 justify-between gap-y-8'>
                {shows.Search.map((show, index) => (
                    <MovieCard key={index} data={show} />
                ))}
            </nav>
        )
    };

    const ErrorShows = () => {
        return (
            <div>
                <h3>{shows.Error}</h3>
            </div>
        )
    }
    console.log(movies)
    return (
        <div>
            <div className='py-10 px-20 bg-slate-900'>
                <h2 className='text-white text-3xl font-semibold'>Movies</h2>
                <br></br>
                <div>{movies.Response === 'True' ? RenderMovies() : ErrorMovies()}</div>
            </div>
            <div className='py-10 px-20 bg-slate-900'>
                <h2 className='text-white text-3xl font-semibold'>Shows</h2>
                <br></br>
                <div>{shows.Response === 'True' ? RenderShows() : ErrorShows()}</div>
            </div>
        </div>
    );
};

export default MovieListing;