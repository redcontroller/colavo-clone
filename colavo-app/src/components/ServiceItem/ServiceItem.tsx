import { useState } from 'react';
import Button from '../common/Button/Button';
import {
    ItemButton,
    ItemCount,
    ItemPrice,
    ItemName,
    ItemInfo,
    ServiceItemContainer,
    Wrapper,
} from './ServiceItemStyle';
import { Service } from '../../api/cartOptionApi';
import icon_check from '../../assets/icon/icon_check.svg';

interface ServiceItemProps {
    key: string;
    data: Service;
}

const ServiceItem = ({data}: ServiceItemProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = () => {
        setIsClicked(!isClicked);
    }

    return (
        <ServiceItemContainer 
            onClick={onClickHandler}
        >
            <ItemInfo>
                <Wrapper>
                    <ItemName>
                        {data.name}
                    </ItemName>
                    <ItemPrice>
                        {data.price.toLocaleString() + '원'}
                    </ItemPrice>
                </Wrapper>
                <ItemCount>
                    {data.count}
                </ItemCount>
            </ItemInfo>
            <ItemButton>
                {
                    isClicked ? (
                        <Button
                            type="image"
                            width={20}
                            height={20}
                            path={icon_check}
                        />
                    ) : null
                }
            </ItemButton>
        </ServiceItemContainer>
    );
};

export default ServiceItem;