import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Students from './pages/Students';
import Photos from './pages/Photos';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Students' element={<Students/>} />
        <Route path='/Photos' element={<Photos/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      <Photos/>
    </Router>
  );
}

export default App;