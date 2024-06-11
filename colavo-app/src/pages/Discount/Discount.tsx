import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Button from "../../components/common/Button/Button";
import Footer from "../../components/common/Footer/Footer";
import DiscountItem from "../../components/DiscountItem/DiscountItem";
import icon_back from '../../assets/icon/icon_back.svg';
import usePageTitle from "../../hooks/usePageTitle";
import useUrlLastSegment from "../../hooks/useUrlLastSegment";
import { CartOption } from '../../api/cartOptionApi';
import cartOptionApi from "../../api/cartOptionApi";
import { StyledMain } from "./DiscountStyle";

const Discount = () => {
    const [discountData, setDiscountData] = useState<CartOption["discounts"]>();
    usePageTitle('콜라보살롱: 할인 메뉴');
    const lastSegment = useUrlLastSegment();
    const nav = useNavigate();
    
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const res = await cartOptionApi();
                setDiscountData(res.data.discounts);
            } catch (err) {
                console.error('Error fetching uses:', err);
            }
        };
        fetchOptions();
    }, []);

    return (
        <>
            <Header 
                type={lastSegment}
                text='할인 메뉴'
                leftChild={
                    <Button
                        type="image"
                        width={20}
                        height={20}
                        path={icon_back}
                        onClick={() => nav(-1)}
                    />
                }
            />
            {!discountData ? (
                <div>API 요청 중 ...</div>
            ) : (
                <StyledMain>
                    {Object.keys(discountData).map((key) => (
                        <DiscountItem 
                            key={key}
                            data={discountData[key]}
                        />
                    ))}
                </StyledMain>
            )}
            <Footer
                type={lastSegment}
                text={'완료'}
            />
        </>
    );
};




export default Discount;