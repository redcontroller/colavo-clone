import { useReducer, createContext } from "react";
import { CartOption } from "../../api/cartOptionApi";
import useFetchService from "../../hooks/useFetchService";

export const ServiceStateContext = createContext<CartOption | undefined>(undefined);
export const ServiceDispatchContext = createContext<React.Dispatch<ServiceAction> | undefined>(undefined);

type ServiceAction = { type: "CREATE" } | { type: "DELETE" } | { type: "UPDATE" };

const serviceReducer = (state: CartOption | undefined, action: ServiceAction) => {
    switch (action.type) {
        case "CREATE":
            return state;
        case "DELETE":
            return state;
        case "UPDATE":
            return state;
        default: 
            return state;
        }
};

type ServiceProviderProps = {
    children: React.ReactNode;
}

export default function ServiceProvider ({ children }: ServiceProviderProps) {
    const serviceData = useFetchService();
    console.log(serviceData);
    const [service, dispatch] = useReducer(serviceReducer, serviceData);


    return (
        <ServiceStateContext.Provider value={service}>
            <ServiceDispatchContext.Provider value={dispatch}>
                { children }
            </ServiceDispatchContext.Provider>
        </ServiceStateContext.Provider>
    );
}