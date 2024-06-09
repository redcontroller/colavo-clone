import React from 'react';
import Button from '../components/common/Button';

const Cart = () => {
    return (
        <div>
            Shopping Cart Page
            <div>
                <Button 
                    text='다음'
                    color='blue'
                    disabled={true}
                    />
            </div>
            <div>
                <Button
                    text='완료'
                    color='blue'
                    disabled={false}
                />
            </div>
            <div>
                <Button 
                    text='시술'
                    color='gray'
                    type='mixed'
                />
            </div>
            <div>
                <Button 
                    text='할인' 
                    color='gray'
                    type='mixed'
                />
            </div>
            <div>
                <Button 
                    type='image'
                />
            </div>
            <div>
                <Button
                    text='직접 입력하기'
                    color='darkGray'
                />
            </div>
        </div>
    );
};

export default Cart;