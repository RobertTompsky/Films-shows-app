import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import MovieAPI from '../../common/apis/MovieAPI';
import {APIKey} from '../../common/apis/MovieAPIKey'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {
    const response = await MovieAPI
            .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
            .catch((err) => {
               console.log("Err :", err) 
            })
            return response.data;
})

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {
    const response = await MovieAPI
            .get(`?apiKey=${APIKey}&s=${term}&type=series`)
            .catch((err) => {
               console.log("Err :", err) 
            })
            return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail", async (imdbID) => {
    const response = await MovieAPI
            .get(`?apiKey=${APIKey}&i=${imdbID}&plot=full`);
            console.log(typeof(imdbID))
            return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('Fetched Successfully')
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('Fetched Successfully')
            return {...state, shows: payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log('Fetched Successfully')
            return {...state, selectedMovieOrShow: payload}
        }         
    },
})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export default movieSlice.reducer
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow