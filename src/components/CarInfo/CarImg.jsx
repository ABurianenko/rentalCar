import s from './CarInfo.module.css'

export const CarImg = ({ car, className }) => {
    return (
        <div>
            <img className={className} src={car.img} alt={`${car.brand} ${car.model}`} />
        </div>
    )
}