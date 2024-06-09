import styled from "styled-components";


export interface UserInfo {
    name: string;
    manager: string;
    reserved: string;
}

interface HeaderOptions {
    info?: UserInfo;
    text?: string;
    leftChild: JSX.Element;
    rightChild?: JSX.Element; 
}

const Header = ({info, text, leftChild, rightChild}: HeaderOptions) => {
    return (
        <StyledHeader>
            <HeaderLeft>{leftChild}</HeaderLeft>
            <HeaderCenter>
                <StyledH1>{text ? text : `${info?.name}(담당: ${info?.manager})`}</StyledH1>
                <StyledP>{info?.reserved}</StyledP>
            </HeaderCenter>
            <HeaderRight>{rightChild}</HeaderRight>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    display: flex;
    place-content: center;
`;

const HeaderLeft = styled.div`
    width: 25%;
    justify-content: flex-start;
`;

const HeaderRight = styled.div`
    width: 25%;
    justify-content: flex-end;
`;

const HeaderCenter = styled.div`
    width: 50%;
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