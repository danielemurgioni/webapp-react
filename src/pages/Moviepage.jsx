import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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

const Moviepage = () => {
    const { id } = useParams()
    console.log(id)

    const [movies, setMovies] = useState(initialMovie)
    const [movieDetail, setMovieDetail] = useState({})

    //recupero l'oggetto della'array con l'id passato come parametro
    const fetchMovie = () => {
        movies.forEach((currentMovie) => {
            if (currentMovie.id === parseInt(id)) {
                setMovieDetail(currentMovie)
            }
        })
    }

    //montaggio
    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <>
            <div className="row border border-3 border-success">
                {/* effetuo un effetto di caricamento dei dati */}
                {movieDetail === null ? (
                    `Caricamento dati Movie`
                ) : (
                    <>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img className='img-fluid' src={movieDetail.image} alt='movie' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <h1>{movieDetail.title}</h1>
                            <h3>{movieDetail.director}</h3>
                            <p>{movieDetail.abstract}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Moviepage