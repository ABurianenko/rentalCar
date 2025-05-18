import { useSelector } from "react-redux"
import { CarCard } from "../CarCard/CarCard.jsx"
import { selectCars } from "../../redux/catalog/selectors.js"

export const CarList = ({className}) => {
    const cars = useSelector(selectCars);
    
    return (
        <ul className={className}>
            {cars.map((car, i) => (
                <CarCard key={i} car={car} />
            ))}
        </ul>
    )
}