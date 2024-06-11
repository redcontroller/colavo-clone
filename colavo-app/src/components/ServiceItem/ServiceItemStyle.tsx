import styled from "styled-components";

const ServiceItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 0;
    cursor: pointer;
    border-top: 1px solid #EDEDED;
`;

const ItemInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* gap: 1rem; */
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const ItemName = styled.p`
    /* width: fit-content; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--font-primary-color);
    font-size: 1.4rem;
    font-weight: 600;
    text-align: left;
`;

const ItemPrice = styled.p`
    color: var(--font-Primary-color);
    font-weight: bold;
    text-align: left;
`;

const ItemCount = styled.p`
    color: var(--font-Primary-color);
    font-weight: 600;
    margin: auto 0;
`;


const ItemButton = styled.div`
    margin: auto 0;
`;

export {
    ItemButton,
    ItemCount,
    ItemPrice,
    Wrapper,
    ItemName,
    ItemInfo,
    ServiceItemContainer,
}