import { NavLink } from "react-router-dom"
import clsx from 'clsx';
import s from './Navigation.module.css'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={buildLinkClass} to="/">
                Home
            </NavLink>
            <NavLink className={buildLinkClass} to="/catalog">
                Catalog
            </NavLink>
        </nav>
    )
};