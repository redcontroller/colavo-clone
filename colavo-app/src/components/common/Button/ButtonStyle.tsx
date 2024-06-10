import { styled } from 'styled-components';
import icon_innerAdd from '../../../assets/icon/icon_inner_add.svg';

const StyledButton = styled.button`
    width: 33.8rem;
    height: 4.6rem;
    color: ${(props) => (props.disabled ?  'var(--font-disabled-color)' : 'white')};
    font-size: ${(props) => (props.disabled ?  '1.3rem' : '1.4rem')};
    border-radius: 1rem;
    cursor: ${(props) => (props.disabled ? 'not-allowed':'pointer')};
    background-color: ${(props) => (props.disabled ? 
            'var(--bg-disabled-footer-btn-color)' 
            : 'var(--bg-footer-btn-color)')};

    &.button_gray {
        width: 16.7rem;
        font-weight: 600;
        color: var(--primary-color);
        background-color: var(--bg-option-btn-color);
    }

    &.button_darkGray {
        width: fit-content;
        height: 100%;
        height: fit-content;
        margin: 5px 0px;
        color: var(--font-footer-tag-color);
        font-size: 1rem;
        font-weight: 600;
        border-radius: 50rem;
        background-color: var(--bg-footer-tag-color);
    }
`;

interface StyledImgProps {
    className?: string;
    src?: string;
    onClick?: (() => void) 
    |((even: React.MouseEvent<HTMLButtonElement>) => void);
    width: number;
    height: number;
}

const StyledImg = styled.img<StyledImgProps>`
    display: inline-block;
    width: ${props => (`${props.width}px` || '5rem')};
    height: ${props => (`${props.height}px` || '5rem')};
    padding: 0 10px;
    cursor: pointer;
`;

const StyledSpan = styled.span`
    display: inline-block;
    padding: 0.3rem 0.6rem;
    position: relative;
    line-height: 1.7rem;
    vertical-align: top;

    &.span_mixed {
        left: 1.2rem;
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

const Container = styled.div`
    width: 100%;
    display: flex;
    place-content: center;
`;

export {
    StyledButton,
    StyledSpan,
    StyledImg,
    Container,
}