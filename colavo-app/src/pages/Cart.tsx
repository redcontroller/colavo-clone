// import { useParams, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import Header, { UserInfo } from '../components/common/Header/Header';
import formatTime from '../feature/formatTime';
import icon_add from '../assets/icon/icon_add.svg';
import icon_esc from '../assets/icon/icon_esc.svg';
import icon_back from '../assets/icon/icon_back.svg';

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
                leftChild={
                    <Button
                        type='icon'
                        iconPath={icon_esc}
                        onClick={() => nav(-1)}
                    />
                }
                info={info}
            />
            <Header
                leftChild={
                    <Button
                        type='icon'
                        iconPath={icon_back}
                        onClick={() => nav(-1)}
                    />
                }
                info={info}
                text='시술 메뉴'
            />
            <Header
                leftChild={
                    <Button
                        type='icon'
                        iconPath={icon_back}
                        onClick={() => nav(-1)}
                    />
                }
                text='할인 메뉴'
                rightChild={
                    <Button
                        type='icon'
                        iconPath={icon_back}
                        onClick={() => alert("준비 중 입니다.")}
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
                    iconPath={icon_add}
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