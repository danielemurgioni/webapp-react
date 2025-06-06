import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

const Moviepage = () => {
    const { id } = useParams()

    const [movieDetail, setMovieDetail] = useState(null)

    //recupero l'oggetto della'array con l'id passato come parametro
    const fetchMovie = () => {
        axios.get(`http://127.0.0.1:3000/api/movies/${id}`).then((resp) => {
            setMovieDetail(resp.data)
        }).catch((err) => {
            console.log(err)
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