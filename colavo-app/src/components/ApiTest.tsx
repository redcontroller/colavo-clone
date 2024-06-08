import React, { useState, useEffect } from "react";
import { cartOptionApi } from '../api/cartOptionApi';
import { CartOption } from "../api/cartOptionApi";

export default function ApiTest() {
    const [option, setOption] = useState<CartOption>();

    const fetchOptions = async () => {
        try {
            const res = await cartOptionApi();
            // console.log(res.data);
            setOption(res.data);
        } catch (err) {
            console.error('Error fetching uses:', err);
        }
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    return (
        <div>
            {option && <p>{JSON.stringify(option)}</p>}
        </div>
    );
}