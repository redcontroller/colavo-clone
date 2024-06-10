import {
    StyledHeader,
    HeaderLeft,
    HeaderRight,
    HeaderCenter,
    StyledH1,
    StyledP,
} from './HeaderStyle';

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

export default Header;