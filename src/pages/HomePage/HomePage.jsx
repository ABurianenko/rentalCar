import { NavLink } from "react-router-dom"
import s from './HomePage.module.css'

export const HomePage = () => {
    return (
        <div className={s.homePage}>
            <h1 className={s.mainTitle}>Find your perfect rental car</h1>
            <p className={s.slogan}>Reliable and budget-friendly rentals for any journey</p>
            <NavLink className={s.link} to="/catalog">View Catalog</NavLink>
        </div>
    )
}