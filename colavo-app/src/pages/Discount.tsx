import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Button from "../components/common/Button/Button";
import Footer from "../components/common/Footer/Footer";
import icon_back from '../assets/icon/icon_back.svg';
import usePageTitle from "../hooks/usePageTitle";
import useUrlLastSegment from "../hooks/useUrlLastSegment";
import { useServiceState } from "../hooks/service";
// import useFetchService from "../hooks/useFetchService";

const Discount = () => {
    usePageTitle('콜라보살롱: 할인 메뉴');
    const serviceData = useServiceState();
    // console.log(serviceData);

    useEffect(() => {
        if (serviceData) {
            console.log(serviceData);
        }
    }, [serviceData]);

    // const data = useFetchService();
    // console.log(data);
    
    const lastSegment = useUrlLastSegment();
    const nav = useNavigate();

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
            <main>main contents
            </main>
            <Footer
                type={lastSegment}
                text={'완료'}
            />
        </>
    );
};

export default Discount;