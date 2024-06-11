import axios from "axios";
import BASE_URL from "./baseUrl";

export interface Service {
    count: number;
    name: string;
    price: number;    
}

export interface Discount {
    name: string;
    rate: number;
    [key: string]: unknown;
}

export interface CartOption {
    items: Record<string, Service>;
    discounts: Record<string, Discount>;
    currency_code: string;
    [key: string]: unknown;
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