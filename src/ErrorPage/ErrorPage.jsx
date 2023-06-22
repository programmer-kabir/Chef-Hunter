import React from 'react';
import Lottie from "lottie-react";
import Error from './Error.json'

const ErrorPage = () => {
    return (
        <div style={{width:'30rem', textAlign:'center', margin:'auto'}}>
            <Lottie animationData={Error}></Lottie>
            <button className='bg-blue-400 px-3 py-2 rounded font-semibold hover:bg-blue-700 hover:text-white' >Back To Home Page</button>
        </div>
    );
};

export default ErrorPage;