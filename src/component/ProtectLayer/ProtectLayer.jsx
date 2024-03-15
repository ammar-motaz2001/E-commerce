import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

export default function ProtectLayer({ children }) {
    let token = localStorage.getItem('token');

    try {
        if (token) {
            const decoded = jwtDecode(token);
            console.log(decoded);
            return children;
        } else {
            throw new Error('Token not found');
        }
    } catch (error) {
        console.error(error);
        localStorage.clear();
        return <Navigate to="/Signin" />;
    }
}
