import React, { useState, useEffect } from 'react'
import { getNowPlayingMovie, getMoviePopular, getMovieTopRated, getMovieUpcoming, searchMovie } from '../api'
import MovieCard from './MovieCard'

const AllMovies = () => {

    const [getMovies, setMovies] = useState([])
    const [getActive, setActive] = useState(0)

    useEffect(() => {
        setNowPlaying()
    }, [])

    const search = async (q) => {
        if (q.length >= 3) {
            const resultSearch = await searchMovie(q)
            setMovies(resultSearch.results)
        } else {
            getNowPlayingMovie().then((result) => {
                setMovies(result)
            })
        }
    }

    const setNowPlaying = () => {
        getNowPlayingMovie().then((result) => {
            setMovies(result)
        })
        setActive(1)
    }

    const setPopular = () => {
        getMoviePopular().then((result) => {
            setMovies(result)
        })
        setActive(2)
    }

    const setTopRated = () => {
        getMovieTopRated().then((result) => {
            setMovies(result)
        })
        setActive(3)
    }

    const setUpcoming = () => {
        getMovieUpcoming().then((result) => {
            setMovies(result)
        })
        setActive(4)
    }


    return (
        <div className="min-h-[100vh] flex flex-col items-center justify-center">
            <h1 className='text-3xl lg:text-5xl font-semibold m-8'>perdanaErda Movie Search</h1>
            <div className='mx-auto'>
                <ul className='flex flex-col md:flex-row justify-between items-center my-10 bg-slate-700 w-full rounded-md'>
                    <li className={'m-4 p-2 px-8 rounded-full w-fit cursor-pointer ' + (getActive === 1 ? 'bg-red-600' : '')} onClick={() => setNowPlaying()}>Now Playing</li>
                    <li className={'m-4 p-2 px-8 rounded-full w-fit cursor-pointer ' + (getActive === 2 ? 'bg-red-600' : '')} onClick={() => setPopular()}>Popular</li>
                    <li className={'m-4 p-2 px-8 rounded-full w-fit cursor-pointer ' + (getActive === 3 ? 'bg-red-600' : '')} onClick={() => setTopRated()}>Top Rated</li>
                    <li className={'m-4 p-2 px-8 rounded-full w-fit cursor-pointer ' + (getActive === 4 ? 'bg-red-600' : '')} onClick={() => setUpcoming()}>Upcoming</li>
                </ul>
            </div>
            <input type="text" name="" id=""
                placeholder='Search Movie..'
                className='h-9 text-xl mb-10 p-6 w-[90%] md:w-[50%] font-semibold text-black text-center items-center rounded-full'
                onChange={({ target }) => search(target.value)} />

            <div className="w-full flex flex-wrap justify-center items-center gap-4">
                {getMovies.map((movie, i) => {
                    return(
                        <div key={i}>
                            <MovieCard title={movie.title} img={movie.poster_path} release={movie.release_date} rating={movie.vote_average} movieId={movie.id}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllMovies