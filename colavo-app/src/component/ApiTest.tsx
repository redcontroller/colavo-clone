import React, { useEffect } from "react";
import axios from 'axios';
import baseUrl from '../api/baseUrl';

export default function ApiTest() {

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const res = await axios.get(baseUrl,
                    {
                    headers: {
                        Accept: "application/json",
                    },
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.error('Error fetching uses:', err);
            }
        };

        fetchOptions();
    }, []);

    return (
        <p>ApiTest</p>
    );
}