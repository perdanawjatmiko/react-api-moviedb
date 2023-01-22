import React from 'react'
import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { getMovieDetail } from '../api'

const ModalDetail = (props) => {

  const [data, setDatas] = useState([])

  useEffect(() => {
    getMovieDetail(props.id).then((result) => {
      setDatas([result])
    })
  }, []);


  return (
    <div>
      {data.map((data, i) => {
        return (
          <div key={i} className='fixed z-10 top-4 mx-auto left-0 flex flex-col justify-center bg-slate-600 border border-white rounded-xl h-auto w-11/12'>
            <div>
              <h1 className='text-3xl text-center my-[3%]'>{data.title}</h1>
              <div className='grid grid-flow-col grid-cols-2 my-10'>
                <div className='w-full mx-auto col-span-1 p-0'>
                  <img src={'https://image.tmdb.org/t/p/w500' + data.poster_path} alt={data.title} className='rounded mx-auto h-[400px]' />
                </div>
                <div className='col-span-1'>
                <div className='text-lg font-semibold text-left'>
                    Rating : {data.vote_average}
                  </div>
                  <div className='text-lg font-semibold text-left'>
                    Release Date : {data.release_date}
                  </div>
                  <div className='text-lg font-semibold text-left'>
                    Genre : {data.genres[0].name}
                  </div>
                  <div className='text-lg font-semibold text-left'>
                    Sinopsis : {data.overview}
                  </div>
                  <div className='text-lg font-semibold text-left'>
                    Budget : ${data.budget}
                  </div>
                  <div className='text-lg font-semibold text-left'>
                    Revenue : ${data.revenue}
                  </div>
                </div>
              </div>
              <button className='text-3xl text-white absolute top-0 right-0 m-4' onClick={props.closed}>
                <FaTimes size={30} />
              </button>
            </div>
          </div>
        )
      })
      }

    </div>
  )
}

export default ModalDetail