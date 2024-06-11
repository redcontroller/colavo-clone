import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Button from "../components/common/Button/Button";
import icon_back from "../assets/icon/icon_back.svg";
import icon_drag_drop from "../assets/icon/icon_drag_drop.svg"
import useLastSegment from "../hooks/useUrlLastSegment";
import usePageTitle from "../hooks/usePageTitle";
import Footer from "../components/common/Footer/Footer";
import { StyledMain } from './Discount/DiscountStyle';
import { CartOption } from '../api/cartOptionApi';
import cartOptionApi from '../api/cartOptionApi';
import ServiceItem from '../components/ServiceItem/ServiceItem';

const Service = () => {
    const [serviceData, setServiceData] = useState<CartOption>();
    const nav = useNavigate();
    const lastSegment = useLastSegment();
    usePageTitle(`콜라보살롱: 시술 메뉴`);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const res = await cartOptionApi();
                setServiceData(res.data);
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
                text="시술 메뉴"
                leftChild={
                    <Button 
                        type="image"
                        width={20}
                        height={20}
                        path={icon_back}
                        onClick={() => nav(-1)}
                    />
                }
                rightChild={
                    <Button 
                        type="image"
                        width={20}
                        height={20}
                        path={icon_drag_drop}
                        onClick={() => alert("준비중입니다.")}
                    />
                }
            />
            <main>
                {!serviceData ? (
                    <div>API 요청 중 ...</div>
                ) : (
                    <StyledMain>
                        {Object.keys(serviceData.items).map((key) => (
                            <ServiceItem 
                                key={key}
                                data={serviceData.items[key]}
                            />
                        ))}
                    </StyledMain>
                )}
            </main>
            <Footer
                type={lastSegment}
                text="다음"
            />
        </>
    );
};

export default Service;