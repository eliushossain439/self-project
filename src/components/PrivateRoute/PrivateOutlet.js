import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const PrivateOutlet = () => {
    const { user } = useAuth()
    return user.email ? <Outlet /> : <Navigate to="/signIn" />
};

export default PrivateOutlet;