import React from 'react';
import errorImg from ".././assets/404/404-error-page-not-found.jpg"
const FourOFour = () => {
    return (
        <div className="bg-base-100 shadow-xl">
            <figure><img className='' src={errorImg} alt="" /></figure>
            <div className="card-body">
            </div>
        </div>
    );
};

export default FourOFour;