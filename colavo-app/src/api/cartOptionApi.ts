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
    items: Record<string, Item>;
    discounts: Record<string, Discount>;
    currency_code: string;
}

const cartOptionApi = async () => {
    const res = await axios.get<CartOption>(
        `${BASE_URL}`,
        {
            headers: {
                'content-type':'application/json'
            },
        }
    );
    return res;
};

export default cartOptionApi;