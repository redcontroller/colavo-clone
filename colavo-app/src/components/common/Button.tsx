import React from 'react';
import { StyledImg, StyledButton, StyledSpan } from './ButtonStyle';
import icon_Add from '../../assets/icon/icon_add.svg';

interface ButtonOptions {
    text?: string;
    color?: 'blue' | 'gray' | 'darkGray';
    disabled?: boolean;
    type?: 'default' | 'mixed' | 'image';
    onClick?: (even: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, color, disabled=false, type='default', onClick }: ButtonOptions) => {

    return (
        <>
            { type==='image' ? (
                    <StyledImg src={icon_Add} alt='할인 메뉴 추가' />
                ):(
                    <StyledButton
                        className={`button_${color}`}
                        disabled={disabled}
                        onClick={onClick}
                    >
                        <StyledSpan className={`span_${type}`}>
                            {text}
                        </StyledSpan>
                    </StyledButton>
            )}
        </>
    );
};

export default Button;