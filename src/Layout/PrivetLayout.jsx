import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetLayout = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    
    console.log(user);
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivetLayout;