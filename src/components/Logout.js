import React from 'react'
import { auth } from '../firebase/firebase-config'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();
    const logoutHandle = () => {
        auth.signOut().then(() => {
            navigate("/signin");
            localStorage.clear();
            window.location.reload();
        }).catch((error) => {
            console.error("Logout failed: ",error);
        })
    }
  return (
    <div>
      <button className='btn btn-light' onClick={logoutHandle}>Logout</button>
    </div>
  )
}

export default Logout
