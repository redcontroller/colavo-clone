import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Button from "../components/common/Button/Button";
import icon_back from "../assets/icon/icon_back.svg";
import icon_drag_drop from "../assets/icon/icon_drag_drop.svg"
import useLastSegment from "../hooks/useUrlLastSegment";
import usePageTitle from "../hooks/usePageTitle";
import Footer from "../components/common/Footer/Footer";

const Item = () => {
    const nav = useNavigate();
    const lastSegment = useLastSegment();
    usePageTitle(`콜라보살롱: 시술 메뉴`);

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
            <main></main>
            <Footer
                type={lastSegment}
                text="다음"
            />
        </>
    );
};

export default Item;