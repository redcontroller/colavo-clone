import { useLocation } from "react-router-dom";
import { PageType } from "../components/common/Header/Header";


export default function useUrlLastSegment ():PageType {
    const location = useLocation();
    const currentUrl = location.pathname;
    const lastSegment = (currentUrl.split('/').pop() || 'cart') as PageType ;

    return lastSegment;
}