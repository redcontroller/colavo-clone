import styled from 'styled-components';

const StyledHeader = styled.header`
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

export {
    StyledHeader,
    HeaderLeft,
    HeaderRight,
    HeaderCenter,
    StyledH1,
    StyledP,
}