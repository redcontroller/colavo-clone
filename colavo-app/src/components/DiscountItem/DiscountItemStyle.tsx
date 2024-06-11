import styled from "styled-components";

const DiscountItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 0;
    cursor: pointer;
    border-top: 1px solid #EDEDED;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
`;

const ItemName = styled.p`
    color: var(--font-primary-color);
    font-size: 1.4rem;
    font-weight: 600;
    text-align: left;
`;

const ItemRate = styled.p`
    color: var(--font-discount-color);
    font-weight: bold;
    text-align: left;
`;

const ItemButton = styled.div`
    margin: auto 0;
`;

export {
    ItemButton,
    ItemRate,
    ItemName,
    ItemInfo,
    DiscountItemContainer,
}