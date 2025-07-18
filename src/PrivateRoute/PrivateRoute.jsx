import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <p>Loading...</p>;

    if (!user) {
        return <Navigate state={location?.pathname} to='/logIn' ></Navigate>
    }
    return children;
};

export default PrivateRoute;