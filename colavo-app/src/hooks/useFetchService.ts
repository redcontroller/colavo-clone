import { useState, useEffect, useCallback } from 'react';
import cartOptionApi, { CartOption } from '../api/cartOptionApi';

export default function useFetchService () {
    const [serviceData, setServiceData] = useState<CartOption | undefined>();

    const fetchOptions = useCallback(async () => {
        try {
            const res = await cartOptionApi();
            setServiceData(res.data);
        } catch (err) {
            console.error('Error fetching uses:', err);
        }
    }, []);

    useEffect(() => {
        fetchOptions();
    }, [fetchOptions]);

    return serviceData;
}