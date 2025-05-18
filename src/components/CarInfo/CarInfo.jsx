import { CiLocationOn, CiCircleCheck } from "react-icons/ci";
import { IoCalendarOutline, IoCarSportOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { formatNumber } from "../../utils/formatNumber";

export const CarInfo = ({ car }) => {
    const [, city, country] = car.address.split(",");

    return (
        <div>
            <h2>{`${car.brand} ${car.model}, ${car.year}`}</h2>
            <p>Id: {car.id}</p>
            <p>
                <CiLocationOn />
                {`${city}, ${country}`}
            </p>
            <p>Mileage: {formatNumber(car.mileage)} km</p>
            <p>{car.rentalPrice}</p>
            <p>{car.description}</p>
            <h3>Rental Conditions:</h3>
            <ul>
                {car.rentalConditions.map((condition, ind) => (
                    <li key={ind}>
                        <p>
                            <CiCircleCheck /> 
                            {condition}
                        </p>
                    </li>
                ))}
            </ul>
            <h3>Car Specifications:</h3>
            <ul>
                <li>
                    <p>
                        <IoCalendarOutline /> 
                        Year: {car.year}
                    </p>
                </li>
                <li>
                    <p>
                        <IoCarSportOutline /> 
                        Type: {car.type}
                    </p>
                </li>
                <li>
                    <p>
                        <BsFuelPump /> 
                        Fuel Consumption: {car.fuelConsumption}
                    </p>
                </li>
                <li>
                    <p>
                        <GoGear /> 
                        Engine Size: {car.engineSize}
                    </p>
                </li>
            </ul>
            <h3>Accessories and functionalities:</h3>
            <ul>
                {car.accessories.map((accessory, ind) => (
                    <li key={ind}>
                        <p>
                            <CiCircleCheck /> 
                            {accessory}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}