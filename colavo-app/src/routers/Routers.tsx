import { Routes, Route } from 'react-router-dom';
import Discount from '../pages/Discount/Discount';
import NotFound from '../pages/NotFount';
import Test from '../pages/Test';
import Cart from '../pages/Cart/Cart';
import Service from '../pages/Service';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Cart />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/test' element={<Test />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Routers;