import { useContext } from 'react';
import {
    ServiceStateContext,
    ServiceDispatchContext
} from '../components/Context/ServiceContext';

export function useServiceState() {
    const serviceData = useContext(ServiceStateContext);

    // if(!serviceData) {
    //     throw new Error('useServiceState should be called inside ServiceProvider');
    // }

    return serviceData;
}

export function useServiceDispatch() {
    const dispatch = useContext(ServiceDispatchContext);
    
    if(!dispatch) {
        throw new Error('useServiceDispatch should be called inside ServiceProvider');
    }

    const onCreate = () => {
        dispatch({
            type: "CREATE",
        });
    };

    const onDelete = () => {
        dispatch({
            type: "DELETE",
        });
    };

    const onUpdate = () => {
        dispatch({
            type: "UPDATE",
        });
    };

    return { onCreate, onDelete, onUpdate }
}
