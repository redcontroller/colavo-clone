import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Item from './pages/Item';
import Discount from './pages/Discount';
import NotFound from './pages/NotFount';
// import ApiTest from './components/ApiTest';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Cart />} />
        <Route path='/item' element={<Item />} />
        <Route path='/discount' element={<Discount />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
      {/* <ApiTest/> */}
    </>
  )
}

export default App;
