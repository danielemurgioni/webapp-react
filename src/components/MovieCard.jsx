import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    //destrutturazione
    const { id, image, title, director, genre, release_year, abstract } = movie
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-image-top">
                        <img className='img-fluid' src={image} alt='movie' />
                    </div>
                    <div className="card-body">
                        <h3 className="text-primary">{title}</h3>
                        <h4><em>{director}</em></h4>
                        <h4>{genre}</h4>
                        <h4>{release_year}</h4>
                        <p>{abstract}</p>
                        <Link className='btn btn-primary' to={`/movies/${id}`}>{`Dettagli ${id}`}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard