import { useState } from 'react';
import Button from '../common/Button/Button';
import {
    ItemButton,
    ItemRate,
    ItemName,
    ItemInfo,
    DiscountItemContainer,
} from './DiscountItemStyle';
import { Discount } from '../../api/cartOptionApi';
import icon_check from '../../assets/icon/icon_check.svg';

interface ItemProps {
    key: string;
    data: Discount;
}

const DiscountItem = ({data}: ItemProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = () => {
        setIsClicked(!isClicked);
    }

    return (
        <DiscountItemContainer 
            onClick={onClickHandler}
        >
            <ItemInfo>
                <ItemName>
                    {data.name}
                </ItemName>
                <ItemRate>
                    {
                    data.rate < 1
                        ? (Math.round(data.rate * 100) + '%')
                        : (data.rate.toLocaleString() + '원')
                    }
                </ItemRate>
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
        </DiscountItemContainer>
    );
};

export default DiscountItem;