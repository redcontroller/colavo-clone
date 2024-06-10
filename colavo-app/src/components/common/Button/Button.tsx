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
    type?: 'default' | 'mixed' | 'image';
    path?: string;
    width?: number;
    height?: number;
    onClick?: (even: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
    text,
    color,
    disabled=false,
    type='default',
    path,
    width=50,
    height=50,
    onClick 
}: ButtonOptions) => {

    return (
        <Container>
            { type==='image' ? (
                    <StyledImg
                        className={`button_${type}`}
                        src={path}
                        width={width}
                        height={height}
                        onClick={onClick}
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