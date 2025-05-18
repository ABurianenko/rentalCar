import { formatNumber } from "../../utils/formatNumber";
import { Link } from "react-router-dom";
import { useFavorites } from "./FavouriteCars";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CarImg } from "../CarInfo/CarImg";

import s from './CarCard.module.css'

export const CarCard = ({ car }) => {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(car.id);

    const [, city, country] = car.address.split(",");
    
    return (   
        <li className={s.carItem} key={car.id}>
            <button className={s.icon}
                onClick={() => toggleFavorite(car.id)}
                aria-label="Toggle favorite"
                style={{ background: "none", border: "none", cursor: "pointer" }}
            >
                {isFavorite ? <FaHeart color="#3470FF" /> : <FaRegHeart />}
            </button>
            <CarImg className={s.img} car={car} />
            <div className={s.cardHeader}>
                <h2 className={s.brand}>{car.brand} <span>{car.model}</span>, {car.year}</h2>
                <p className={s.price}>${car.rentalPrice}</p>
            </div>
            <div className={s.cardTextWrap}>
                <p className={s.cardText}>{city} | {country} | {car.rentalCompany} |</p>
                <p className={s.cardText}>{car.type} | {formatNumber(car.mileage)} km</p>
            </div>
            
            <Link className={s.carInfoBtn} to={`/catalog/${car.id}`}>
                Read more
            </Link>
        </li>
    )
}