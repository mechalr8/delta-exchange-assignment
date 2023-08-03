import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';

const SigninPage = () => {
  const {user} = useSelector(state => state.custom)
  const navigate = useNavigate()
  useEffect(() => {
    if (user != null) {
      navigate("/");
      console.log(user);
    }
  })
  return (
    <div>
      <Login/>
    </div>
  )
}

export default SigninPage;
