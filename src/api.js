import axios from "axios";


export const getNowPlayingMovie = async() => {
    const playingMovie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/now_playing?region=ID&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return playingMovie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return search.data
}

export const getMoviePopular = async() => {
    const popularMovie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?region=ID&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return popularMovie.data.results
}

export const getMovieTopRated = async() => {
    const topRatedMovie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/top_rated?region=ID&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return topRatedMovie.data.results
}

export const getMovieUpcoming = async() => {
    const upcomingMovie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/upcoming?region=ID&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return upcomingMovie.data.results
}

export const getMovieDetail = async(d) => {
    const movieDetail = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/${d}?api_key=${process.env.REACT_APP_APIKEY}&language=id-ID`)
    return movieDetail.data
}