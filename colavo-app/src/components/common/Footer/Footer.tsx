import { useState } from 'react';
import './FooterStyle.tsx';
import Button from '../Button/Button';
import icon_add from '../../../assets/icon/icon_add.svg';
import icon_question from '../../../assets/icon/icon_question.svg';
import {
    DefaultTimeButton,
    ItemAddButton,
    TotalItem,
    QuestionButton,
    TotalDetailSpan,
    TotalDetail,
    TotalAmount,
    MainText,
    TotalInfo,
    Wrapper,
    FooterChild,
    FooterTopButton,
    DiscountWrapper,
    StyledFooter,
} from './FooterStyle.tsx';

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
    onClick?: (even: React.MouseEvent<HTMLButtonElement>) => void;
}

const Footer = ({ type, text, disabled = false }: FooterInfo) => {
    const totalAmount:number = 80500;
    const sumItems:number = 95000;
    const countItems:number = 4;
    const sumDiscount:number = -14500;
    const countDiscounts:number = 2;
    const sumTime = 3;
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
                            onClick={() => alert("준비중입니다.")}
                        />
                    </FooterTopButton>
                    <FooterChild>
                        할인을 선택하세요(여러 개 선택가능)                
                    </FooterChild>
                </DiscountWrapper>
            ):type === 'cart' ? (
                <Wrapper>
                    <TotalInfo>
                        <MainText>합계</MainText>
                        <TotalAmount>{`${totalAmount.toLocaleString()}원`}</TotalAmount>
                    </TotalInfo>
                    <TotalDetail>
                        {`${sumItems.toLocaleString()}원 (${countItems} 시술메뉴)`}
                        <TotalDetailSpan className='detail_pink'>
                            {` ${sumDiscount.toLocaleString()}원 (${countDiscounts} 할인)`}
                        </TotalDetailSpan>
                    </TotalDetail>
                </Wrapper>
            ):(
                <Wrapper>
                    <TotalInfo>
                        <TotalItem>
                            <FooterChild>
                                {countItems} 시술메뉴, {sumTime}시간
                            </FooterChild>
                            <QuestionButton>
                                <Button 
                                    type='image'
                                    width={20}
                                    height={20}
                                    path={icon_question}
                                    onClick={() => alert("준비중입니다.")}
                                />
                            </QuestionButton>
                        </TotalItem>
                        <ItemAddButton>
                            <Button
                                color='darkGray'
                                text='직접 입력하기'
                                onClick={() => alert("준비중입니다.")}
                            />
                        </ItemAddButton>
                    </TotalInfo>
                        <DefaultTimeButton>
                            <Button 
                                color='darkGray'
                                text='기본 서비스 시간 0분'
                                onClick={() => alert("준비중입니다.")}
                            />
                        </DefaultTimeButton>
                </Wrapper>
                )}
            <Button 
                text={text}
                disabled={isButton}
                onClick={() => alert('준비중입니다.')}
            />
        </StyledFooter>
    );
};

export default Footer;