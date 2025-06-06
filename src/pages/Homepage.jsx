import axios from 'axios'
import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'

const Homepage = () => {

    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        axios.get("http://127.0.0.1:3000/api/movies").then((resp) => {
            setMovies(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(fetchMovies, [])

    return (
        <>
            <h1 className='text-primary'>Bool Movies</h1>
            <h2>
                <i>All the best Movies!</i>
            </h2>
            <div className="row gy-4">
                {movies.map((movie) => {
                    return (
                        <MovieCard movie={movie} key={`movie-${movie.id}`} />
                    )
                })}
            </div>
        </>
    )
}

export default Homepage