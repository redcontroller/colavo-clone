import styled from "styled-components";


export interface UserInfo {
    name: string;
    manager: string;
    reserved: string;
}

interface HeaderOptions {
    type: 'cart' | 'item' | 'discount';
    info?: UserInfo;
    text?: string;
    leftChild: JSX.Element;
    rightChild?: JSX.Element; 
}

const Header = ({type, info, text, leftChild, rightChild}: HeaderOptions) => {
    return (
        <StyledHeader>
            <HeaderLeft>{leftChild}</HeaderLeft>
            <HeaderCenter>
                <StyledH1>{text ? text : `${info?.name}(담당: ${info?.manager})`}</StyledH1>
                <StyledP>{type==='item' ? info?.name : info?.reserved}</StyledP>
            </HeaderCenter>
            <HeaderRight>{rightChild}</HeaderRight>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    width: 100%;
    height: 5.0rem;
    display: flex;
    place-content: center;
`;

const HeaderLeft = styled.div`
    display: flex;
    width: 15%;
    justify-content: flex-start;
    align-items: center;
    `;

const HeaderRight = styled.div`
    display: flex;
    width: 15%;
    justify-content: flex-end;
    align-items: center;
`;

const HeaderCenter = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    place-content: center;
`;

const StyledH1 = styled.h1`
    font-size: 1.4rem;
    font-weight: bold;
`;

const StyledP = styled.p`
    color: var(--font-reserved-color);
    font-size: 1.1rem;
`;


export default Header;