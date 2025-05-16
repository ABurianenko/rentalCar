import { useSelector } from "react-redux"
import { CarCard } from "../CarCard/CarCard.jsx"
import { selectCars } from "../../redux/catalog/selectors.js"

export const CarList = () => {
    const cars = useSelector(selectCars);
    
    return (
        <ul>
            {cars.map((car, i) => (
                <CarCard key={i} car={car} />
            ))}
        </ul>
    )
}