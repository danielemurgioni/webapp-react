import React from 'react'

const Moviepage = () => {
    return (
        <>
            <div className="row border border-3 border-success">
                <div className="col-12 col-md-6 col-lg-4">
                    <img className='img-fluid' src='https://picsum.photos/500/300' alt='movie' />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <h1>Titolo</h1>
                    <h3>Attori</h3>
                    <p>Altre informazioni</p>
                </div>
            </div>
        </>
    )
}

export default Moviepage