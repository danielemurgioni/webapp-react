import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

const initialMovies = [
    {
        id: 1,
        title: "titolo 1",
        director: "direttore 1",
        genre: "genere 1",
        release_year: "anno di rilascio 1",
        abstract: "La le lu lei lo La le lu lei lo 1",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 1",
                vote: 1
            },
            {
                id: 2,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 2",
                vote: 2
            },
            {
                id: 3,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 3",
                vote: 3
            }
        ]
    },
    {
        id: 2,
        title: "titolo 2",
        director: "direttore 2",
        genre: "genere 2",
        release_year: "anno di rilascio 2",
        abstract: "La le lu lei lo La le lu lei lo 2",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 1",
                vote: 1
            },
            {
                id: 2,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 2",
                vote: 2
            },
            {
                id: 3,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 3",
                vote: 3
            }
        ]
    },
    {
        id: 3,
        title: "titolo 3",
        director: "direttore 3",
        genre: "genere 3",
        release_year: "anno di rilascio 3",
        abstract: "La le lu lei lo La le lu lei lo 3",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 1",
                vote: 1
            },
            {
                id: 2,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 2",
                vote: 2
            },
            {
                id: 3,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 3",
                vote: 3
            }
        ]
    },
    {
        id: 4,
        title: "titolo 4",
        director: "direttore 4",
        genre: "genere 4",
        release_year: "anno di rilascio 4",
        abstract: "La le lu lei lo La le lu lei lo 4",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 1",
                vote: 1
            },
            {
                id: 2,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 2",
                vote: 2
            },
            {
                id: 3,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae eum, repellendus nostrum accusantium ducimus sed debitis",
                author: "autore 3",
                vote: 3
            }
        ]
    }
]

const Moviepage = () => {
    const { id } = useParams()
    console.log(id)

    const [movies, setMovies] = useState(initialMovies)

    const [movieDetail, setMovieDetail] = useState(null)

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
            <div className="row gy-4 pb-4">
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
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <h3>Community Reviews</h3>
                            </div>
                        </div>
                        {movieDetail.reviews.map((review) => (
                            <ReviewCard review={review} key={`review-${review.id}`} />
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default Moviepage