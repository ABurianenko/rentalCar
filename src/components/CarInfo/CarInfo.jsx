import { CiLocationOn, CiCircleCheck } from "react-icons/ci";
import { IoCalendarOutline, IoCarSportOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { formatNumber } from "../../utils/formatNumber";

import s from './CarInfo.module.css';

export const CarInfo = ({ car, className }) => {
    const [, city, country] = car.address.split(",");
    const id = car.id.split('-')[0]

    return (
        <div className={className}>
            <div className={s.titleWrap}>
                <h2 className={s.carName}>{`${car.brand} ${car.model}, ${car.year}`}</h2>
                <p className={s.carId}>Id: {id}</p>
            </div>
            <div className={s.textWrap}>
                <p className={s.carLocation}>
                    <CiLocationOn />
                    {`${city}, ${country}`}
                </p>
                <p className={s.carMileage}>Mileage: {formatNumber(car.mileage)} km</p>
            </div>
            
            <p className={s.rentalPrice}>${car.rentalPrice}</p>
            <p className={s.carDescription}>{car.description}</p>
            
            <div className={s.listsContainer}>
                <ul className={s.list}>
                    <h3 className={s.conditionsTitle}>Rental Conditions:</h3>
                    {car.rentalConditions.map((condition, ind) => (
                        <li className={s.listItem} key={ind}>
                            <CiCircleCheck /> 
                            <p>{condition}</p>
                        </li>
                    ))}
                </ul>
                
                <ul className={s.list}>
                    <h3 className={s.specificationsTitle}>Car Specifications:</h3>
                    <li className={s.listItem}>
                        <IoCalendarOutline /> 
                        <p>Year: {car.year}</p>
                    </li>
                    <li className={s.listItem}>
                        <IoCarSportOutline /> 
                        <p>Type: {car.type}</p>
                    </li>
                    <li className={s.listItem}>
                        <BsFuelPump /> 
                        <p>Fuel Consumption: {car.fuelConsumption}</p>
                    </li>
                    <li className={s.listItem}>
                        <GoGear /> 
                        <p>Engine Size: {car.engineSize}</p>
                    </li>
                </ul>
                
                <ul className={s.list}>
                    <h3  className={s.accessoriesTitle}>Accessories and functionalities:</h3>
                    {car.accessories.map((accessory, ind) => (
                        <li className={s.listItem} key={ind}>
                            <CiCircleCheck /> 
                            <p>{accessory}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}