import React from "react";
import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Item from '../pages/Item';
import Discount from '../pages/Discount';
import NotFound from '../pages/NotFount';


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Cart />} />
            <Route path='/item' element={<Item />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Routers;