import { styled } from 'styled-components';
import icon_innerAdd from '../../../assets/icon/icon_inner_add.svg';

const StyledButton = styled.button`
    width: 33.8rem;
    height: 4.6rem;
    font-size: 1.4rem;
    border-radius: 1rem;
    cursor: ${(props) => (props.disabled ? 'not-allowed':'pointer')};
    
    &.button_blue {
        font-size: ${(props) => (props.disabled ?  '1.3rem' : '1.4rem')};
        color: ${(props) => (props.disabled ?  'var(--font-disabled-color)' : 'white')};
        background-color: ${(props) => (props.disabled ? 'var(--bg-disabled-footer-btn-color)' : 'var(--bg-footer-btn-color)')};
    }

    &.button_gray {
        width: 16.7rem;
        font-weight: 600;
        color: var(--primary-color);
        background-color: var(--bg-option-btn-color);
    }

    &.button_darkGray {
        width: 7.2rem;
        height: 2.1rem;
        color: var(--font-footer-tag-color);
        font-size: 1rem;
        font-weight: 600;
        background-color: var(--bg-footer-tag-color);
    }
`;

const StyledSpan = styled.span`
    position: relative;
    line-height: 1.7rem;
    vertical-align: top;

    &.span_mixed {
        left: 1.2rem;
        /* left: calc((2.8rem + 1.7rem + 0.7rem)* 1.4rem / 2.8rem); */
        &::before {
            content: '';
            display: inline-block;
            position: absolute;
            width: 1.7rem;
            height: 1.7rem;
            background-image: url(${icon_innerAdd});
            background-size: cover;
            left: -2.4rem;
        }
    }
`;

const StyledImg = styled.img`
    display: inline-block;
    width: 5rem;
    height: 5rem;
    padding: 0 10px;
    cursor: pointer;

    &.button_icon {
        width: 2rem;
        height: 2rem;
    }
`;

const Container = styled.div`
    display: flex;
    place-content: center;
    /* margin-top: 10px; */
`;

export {
    StyledButton,
    StyledSpan,
    StyledImg,
    Container,
}