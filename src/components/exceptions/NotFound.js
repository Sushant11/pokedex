import React from 'react';

const NotFound = () => {
    return (
        <div className='notFound'>
            Page Not Found
            <div>
                <a href='/' type='button' alt='Go Back' className='notFoundBtn'>Go Back</a>
            </div>
        </div>
    );
};

export default NotFound;