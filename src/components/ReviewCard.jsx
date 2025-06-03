import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="col-12">
                <div className="card p-4">
                    <p>{review.text}</p>
                    <p>Voto: {review.vote}</p>
                    <p>{review.author}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewCard