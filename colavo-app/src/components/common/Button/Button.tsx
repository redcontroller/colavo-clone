import React from 'react';
import { 
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
    path?: string;
    onClick?: (even: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, color, disabled=false, type='default', path, onClick }: ButtonOptions) => {

    return (
        <Container>
            { type==='image' || type==='icon' ? (
                    <StyledImg 
                        className={`button_${type}`}
                        src={path}
                    />
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