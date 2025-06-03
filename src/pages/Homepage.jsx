import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <>
            <h1 className='text-primary'>Bool Movies</h1>
            <h2>
                <i>All the best Movies!</i>
            </h2>
            <div className="row gy-4">
                {/* 1 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img className='img-fluid' src='https://picsum.photos/500/300' alt='movie' />
                        </div>
                        <div className="card-body">
                            <h3 className="text-primary">Titolo</h3>
                            <h4><em>Attori</em></h4>
                            <p>Paragrafo</p>
                            <Link className='btn btn-primary' to="/movies/1">Dettagli 1</Link>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img className='img-fluid' src='https://picsum.photos/500/300' alt='movie' />
                        </div>
                        <div className="card-body">
                            <h3 className="text-primary">Titolo</h3>
                            <h4><em>Attori</em></h4>
                            <p>Paragrafo</p>
                            <Link className='btn btn-primary' to="/movies/2">Dettagli 2</Link>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img className='img-fluid' src='https://picsum.photos/500/300' alt='movie' />
                        </div>
                        <div className="card-body">
                            <h3 className="text-primary">Titolo</h3>
                            <h4><em>Attori</em></h4>
                            <p>Paragrafo</p>
                            <Link className='btn btn-primary' to="/movies/3">Dettagli 3</Link>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img className='img-fluid' src='https://picsum.photos/500/300' alt='movie' />
                        </div>
                        <div className="card-body">
                            <h3 className="text-primary">Titolo</h3>
                            <h4><em>Attori</em></h4>
                            <p>Paragrafo</p>
                            <Link className='btn btn-primary' to="/movies/4">Dettagli 4</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage