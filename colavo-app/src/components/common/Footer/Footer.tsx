import { useState } from 'react';
import { styled } from 'styled-components';
import './FooterStyle.tsx';
import Button from '../Button/Button';
import icon_add from '../../../assets/icon/icon_add.svg';

// interface AggregationData {
//     totalAmount:number;
//     sumItems:number;
//     countItems:number;
//     sumDiscount:number;
//     countDiscounts:number;
// }

interface FooterInfo {
    type: 'cart' | 'item' | 'discount';
    // AggregationData?: AggregationData;
    text?: string;
    disabled?: boolean;
}

const Footer = ({ type, text, disabled = false }: FooterInfo) => {
    const totalAmount:number = 80500;
    const sumItems:number = 95000;
    const countItems:number = 4;
    const sumDiscount:number = -14500;
    const countDiscounts:number = 2;
    const [isButton] = useState(
        // false
        type === 'discount' ? true : disabled
    );

    return (
        <StyledFooter>
            {type === 'discount' ? (
                <DiscountWrapper className={`footer_${type}`}>
                    <FooterTopButton>
                        <Button
                            type='image'
                            path={icon_add}
                            onClick={() => alert('준비중입니다.')}
                        />
                    </FooterTopButton>
                    <Child>
                        할인을 선택하세요(여러 개 선택가능)                
                    </Child>
                </DiscountWrapper>
            ):type === 'cart' ? (
                null
            ):(
                <TotalInfo>
                    <MainText>합계</MainText>
                    <TotalAmount>{`${totalAmount.toLocaleString()}원`}</TotalAmount>
                    <TotalDetail>
                        {`
                        ${sumItems.toLocaleString()}원 (${countItems} 시술메뉴)
                        `}
                        <TotalDetail className='detail_pink'>
                            {`
                                ${sumDiscount.toLocaleString()} (${countDiscounts} 할인)
                            `}
                        </TotalDetail>
                    </TotalDetail>
                </TotalInfo>
                )}
            <Button 
                text={text}
                disabled={isButton}
                onClick={() => alert('준비중입니다.')}
            />
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.6rem;
    width: 36rem;
    height: fit-content;
    position: fixed;
    bottom: 0;
    padding: 1.6rem;
    box-sizing: border-box;
    box-shadow: 0px -5px 10px -7px rgba(128, 128, 128, .2);

    /* background-color: skyblue; */
`;

const DiscountWrapper = styled.div`
    &.footer_discount {
        position: relative;
    }
`;

const FooterTopButton = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: calc(-2.5rem + -1.6rem);
`;

const Child = styled.p`
    text-align: left;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: -3%;
`;





const TotalInfo = styled.div`
    width: 100%;
`;
const MainText = styled.h2``;
const TotalAmount = styled.p``;
const TotalDetail = styled.p`
    color: var(--font-discount-detail-color);
    &.detail_pink {
        color: var(--font-discount-color);
    }
`;

export default Footer;