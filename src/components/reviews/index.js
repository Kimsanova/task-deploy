import React from "react";
import Review from "./review";

function Reviews({ reviews }) {
    return (
        <div>
            {
                reviews.map(review => (
                    <Review {...review} key={review.id} />
                ))
            }
        </div>
    )
}

export default Reviews