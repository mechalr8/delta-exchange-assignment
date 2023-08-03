import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {user} = useSelector(state => state.custom)
    if (!user) {
        console.log(user);
        return <Navigate to='/signin'/>;
    }
    return children
}

export default ProtectedRoute
