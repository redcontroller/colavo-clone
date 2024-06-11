// import { useParams, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import Header, { UserInfo } from '../../components/common/Header/Header';
import formatTime from '../../feature/formatTime';
import icon_esc from '../../assets/icon/icon_esc.svg';
import Footer from '../../components/common/Footer/Footer';
import useUrlLastSegment from '../../hooks/useUrlLastSegment';
import usePageTitle from '../../hooks/usePageTitle';
import { CartOption } from '../../api/cartOptionApi';
import { useState, useEffect } from 'react';
import cartOptionApi from '../../api/cartOptionApi';
import { StyledMain } from '../Discount/DiscountStyle';
import DiscountItem from '../../components/DiscountItem/DiscountItem';
import styled from 'styled-components';
import ServiceItem from '../../components/ServiceItem/ServiceItem';


const Cart = () => {
    const [cartData, setCartData] = useState<CartOption>();
    // const params = useParams();
    usePageTitle('콜라보살롱: 장바구니');
    const lastSegment = useUrlLastSegment();
    const nav = useNavigate();

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const res = await cartOptionApi();
                setCartData(res.data);
            } catch (err) {
                console.error('Error fetching uses:', err);
            }
        };
        fetchOptions();
    }, []);

    const info:UserInfo = {
        name: '김모건',
        manager: '콜라보디자이너',
        reserved: formatTime(new Date(), 'ko-KR'),
    };

    return (
        <div>
            <Header
                type={lastSegment}
                info={info}
                leftChild={
                    <Button
                        type='image'
                        width={20}
                        height={20}
                        path={icon_esc}
                        onClick={() => nav(-1)}
                    />
                }
            />
            <StyledCartMain>
                <OptionButton>
                    <Button 
                        color='gray'
                        type='mixed'
                        text='시술'
                        onClick={() => nav('service')}
                    />
                    <Button  
                        color='gray'
                        type='mixed'
                        text='할인'
                        onClick={() => nav('discount')}
                    />
                </OptionButton>
                {!cartData ? (
                    <div>API 요청 중 ...</div>
                ) : (
                    <StyledMain>
                        {Object.keys(cartData.items).map((key) => (
                            <ServiceItem 
                                key={key}
                                data={cartData.items[key]}
                            />
                        ))}
                        {Object.keys(cartData.discounts).map((key) => (
                            <DiscountItem 
                                key={key}
                                data={cartData.discounts[key]}
                            />
                        ))}
                    </StyledMain>
                )}
            </StyledCartMain>
            <Footer
                type={lastSegment}
                text='다음'
                disabled={false}
            />
        </div>
    );
};

const StyledCartMain = styled.main`
    /* margin: 0 1.6rem; */
`;

const OptionButton = styled.div`
    display: flex;
    margin: 0.7rem auto;
    justify-content: space-around;
`;


export default Cart;