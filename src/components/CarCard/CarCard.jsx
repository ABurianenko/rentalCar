import { formatNumber } from "../../utils/formatNumber"
import { Link } from "react-router-dom"

export const CarCard = ({ car }) => {
    return (   
        <li key={car.id}>
            <img src={car.img} alt={`${car.brand} ${car.model}`} />
            <h3>{car.brand} <span>{car.model}</span>, {car.year}</h3>
            <h3>{car.rentalPrice}</h3>
            <p>| {car.rentalCompany} |</p>
            <p>{car.type} | {formatNumber(car.mileage)} km</p>
            <Link to={`${car.id}`}>
                Read more
            </Link>
        </li>
    )
}