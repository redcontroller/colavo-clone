import React from 'react';
import { 
    StyledIcon,
    StyledImg,
    StyledButton,
    StyledSpan,
    Container,
} from './ButtonStyle';

interface ButtonOptions {
    text?: string;
    color?: 'blue' | 'gray' | 'darkGray';
    disabled?: boolean;
    type?: 'default' | 'mixed' | 'image' | 'icon';
    iconPath?: string;
    onClick?: (even: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, color, disabled=false, type='default', iconPath, onClick }: ButtonOptions) => {

    return (
        <Container>
            { type==='image' ? (
                    <StyledImg src={iconPath} alt='할인 메뉴 추가' />
                ): type==='icon' ? (
                    <StyledIcon src={iconPath} alt='할인 메뉴 추가' />
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
        </Container>
    );
};

export default Button;