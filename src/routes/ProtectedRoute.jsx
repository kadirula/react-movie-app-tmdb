import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const currentUser = true;

    if (!currentUser) {
        return (
            <Navigate to='/login' />
        )
    }
    return children;
}

export default ProtectedRoute