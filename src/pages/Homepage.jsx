import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
                {/* 1 */}
                {movies.map((movie) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-image-top">
                                    <img className='img-fluid' src={movie.image} alt='movie' />
                                </div>
                                <div className="card-body">
                                    <h3 className="text-primary">{movie.title}</h3>
                                    <h4><em>{movie.director}</em></h4>
                                    <h4>{movie.genre}</h4>
                                    <h4>{movie.release_year}</h4>
                                    <p>{movie.abstract}</p>
                                    <Link className='btn btn-primary' to="/movies/1">Dettagli 1</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Homepage