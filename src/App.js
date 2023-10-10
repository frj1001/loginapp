// I have added the logout bonus functionality and I was also working on admin role as a bonus but since that will be exercised in portfolio project 2, I left that bonus functionality in this assignment


import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/loginapp' element={<Home/>}/>
        <Route element={<ProtectedRoutes />}>      
          <Route path='/products' element={<Products />}/>    
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<NotFound />}/>   
      </Routes>
    </div>
  );
}

export default App;
