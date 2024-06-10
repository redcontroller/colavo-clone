// import { useParams, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import Header, { UserInfo } from '../components/common/Header/Header';
import formatTime from '../feature/formatTime';
import icon_add from '../assets/icon/icon_add.svg';
import icon_esc from '../assets/icon/icon_esc.svg';
import icon_back from '../assets/icon/icon_back.svg';
import icon_drag_drop from '../assets/icon/icon_drag_drop.svg'
import Footer from '../components/common/Footer/Footer';

const Cart = () => {
    // const params = useParams();
    const nav = useNavigate();

    const info:UserInfo = {
        name: '김모건',
        manager: '콜라보디자이너',
        reserved: formatTime(new Date(), 'ko-KR'),
        // reserved: formatTime(now, 'en-US'),
    };

    return (
        <div>
            Shopping Cart Page
            <Header
                type='cart'
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
            <Header
                type='item'
                info={info}
                text='시술 메뉴'
                leftChild={
                    <Button
                        type='image'
                        width={20}
                        height={20}
                        path={icon_back}
                        onClick={() => nav(-1)}
                    />
                }
                rightChild={
                    <Button
                        type='image'
                        width={20}
                        height={20}
                        path={icon_drag_drop}
                        onClick={() => alert("준비 중 입니다.")}
                    />
                }
            />
            <Header
                type='discount'
                text='할인 메뉴'
                leftChild={
                    <Button
                        type='image'
                        width={20}
                        height={20}
                        path={icon_back}
                        onClick={() => nav(-1)}
                    />
                }
            />



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
                    path={icon_add}
                />
            </div>
            <div>
                <Button
                    text='직접 입력하기'
                    color='darkGray'
                />
            </div>

            <Footer
                type='cart'
                text='다음'
                disabled={false}
            />
        </div>
    );
};

export default Cart;