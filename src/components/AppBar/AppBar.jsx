import { Navigation } from "../Navigation/Navigation.jsx"
import s from './AppBar.module.css'

export const AppBar = () => {
    return (
        <div className={s.header}>
            <p className={s.logo}>Rental<span>Car</span></p>
            <Navigation />
        </div>
    )
};