import axios from "axios";
import BASE_URL from "./baseUrl";

interface Item {
    count: number;
    name: string;
    price: number;
}

interface Discount {
    name: string;
    rate: number;
}

export interface CartOption {
    item: Item;
    discounts: Discount;
    currency_code: string;
}

export const cartOptionApi = async () => {
    const { data } = await axios.get<CartOption>(`${BASE_URL}`,
        {
            headers: {
                'content-type':'application/json'
            },
        }
    );
    return data;
};