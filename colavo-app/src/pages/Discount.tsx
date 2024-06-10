import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Button from "../components/common/Button/Button";
import Footer from "../components/common/Footer/Footer";
import icon_back from '../assets/icon/icon_back.svg';

const Discount = () => {
    const nav = useNavigate();

    return (
        <>
            <Header 
                type='discount'
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
                type="discount"
                text={'완료'}
            />
        </>
    );
};

export default Discount;