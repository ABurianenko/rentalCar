import { LuBadgeX } from "react-icons/lu";
import s from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={s.notFoundContainer}>
            <LuBadgeX />
            <p className={s.notFoundText}>
                Oopss... Page is not found! Please, try again.
            </p>
        </div>
        
    )
}