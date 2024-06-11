import { styled } from 'styled-components';

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
    background-color: white;
`;

const DiscountWrapper = styled.div`
    &.footer_discount {
        position: relative;
    }
`;

const FooterTopButton = styled.div`
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 0;
    top: calc(-2.5rem + -1.6rem);
`;

const FooterChild = styled.h2`
    text-align: left;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: -3%;
    margin: auto 0;
`;

const Wrapper = styled.div``;

const TotalInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
`;
const MainText = styled.h2`
    font-family: Inter;
    font-weight: 600;
    color: var(--font-aggr-color);
    font-size: 1.2rem;
    margin: 1rem 0;
`;
const TotalAmount = styled.p`
    font-weight: bolder;
    display: flex;
    place-items: center;
`;
const TotalDetail = styled.p`
    letter-spacing: -3%;
    text-align: end;
    color: var(--font-discount-detail-color);
`;
const TotalDetailSpan = styled.span`
    color: var(--font-discount-color);
`;

const QuestionButton = styled.div`
    margin: auto;
`;

const TotalItem = styled.div`
    display: flex;
    place-content: center;
`;

const ItemAddButton = styled.div``;

const DefaultTimeButton = styled.div`
    width: fit-content;
`;

export {
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
}