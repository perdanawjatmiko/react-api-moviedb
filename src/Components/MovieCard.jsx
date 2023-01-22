import React from 'react'
import { useState } from 'react'
import ModalDetail from './ModalDetail'

const MovieCard = (props) => {
    const [modals, setModals] = useState(false)

    const handleModal = () => {
        setModals(false)
    }

  return (
    <div className='mx-auto w-11/12 lg:max-w-sm rounded overflow-hidden shadow-lg bg-slate-600'>
        <img src={'https://image.tmdb.org/t/p/w500' + props.img} alt="" className='w-full mx-auto'/>
        <div className='px-6 py-4'>
            <h1 className='font-semibold text-lg mb-2 h-[80px] my-auto'>{props.title}</h1>
            <p>Release Date : {props.release}</p>
            <p>Rating : {props.rating}</p>
            <button className='py-2 px-4 rounded-full bg-slate-400 font-semibold mt-4 w-full hover:scale-105 duration-200' onClick={() => setModals(true)}>
                Detail
            </button>
        </div>
        {modals ? (
            <ModalDetail id={props.movieId} closed={() => handleModal()}/>
        ) : null}
        
    </div>

  )
}

export default MovieCard