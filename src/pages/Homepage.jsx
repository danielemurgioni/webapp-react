import React from 'react'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'

const initialMovie = [
    {
        id: 1,
        title: "titolo 1",
        director: "direttore 1",
        genre: "genere 1",
        release_year: "anno di rilascio 1",
        abstract: "La le lu lei lo La le lu lei lo 1",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 2,
        title: "titolo 2",
        director: "direttore 2",
        genre: "genere 2",
        release_year: "anno di rilascio 2",
        abstract: "La le lu lei lo La le lu lei lo 2",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 3,
        title: "titolo 3",
        director: "direttore 3",
        genre: "genere 3",
        release_year: "anno di rilascio 3",
        abstract: "La le lu lei lo La le lu lei lo 3",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 4,
        title: "titolo 4",
        director: "direttore 4",
        genre: "genere 4",
        release_year: "anno di rilascio 4",
        abstract: "La le lu lei lo La le lu lei lo 4",
        image: "https://picsum.photos/500/300"
    }
]

const Homepage = () => {

    const [movies, setMovies] = useState(initialMovie)

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