import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import SigninPage from './pages/SigninPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/signin' element={<SigninPage />} />
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
