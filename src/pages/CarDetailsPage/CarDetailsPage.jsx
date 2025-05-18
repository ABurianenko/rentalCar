import { useDispatch, useSelector } from "react-redux"
import { CarInfoError, CarInfoIsLoading, SelectCarInfo } from "../../redux/car/selectors";
import { useEffect, useRef } from "react";
import fetchCarInfo from "../../redux/car/operations";
import { CarInfo } from "../../components/CarInfo/CarInfo";
import { Link, useLocation, useParams } from "react-router-dom";
import { BookingForm } from "../../components/BookingForm/BookingForm";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { CarImg } from "../../components/CarInfo/CarImg";

import s from './CarDetailsPage.module.css'
import { Loader } from "../../components/Loader/Loader";

export const CarDetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const location = useLocation();
    const goBackRef = useRef(location.state ?? "/catalog")

    const car = useSelector(SelectCarInfo);
    const error = useSelector(CarInfoError);
    const isLoading = useSelector(CarInfoIsLoading);

    useEffect(() => {
        if (id) {
            dispatch(fetchCarInfo(id));
        }
    }, [dispatch, id]);

    if (isLoading) return <Loader />;
    if (error) return <p>Error: {error}</p>;
    if (!car) return <p>Car not found</p>;

    return (
        <div className={s.container}>
            <Link className={s.goBackBtn} to={goBackRef.current}><FaRegArrowAltCircleLeft /></Link>
            <div className={s.infoPage}>
                <CarImg className={s.poster} car={car} />
                <CarInfo className={s.info} car={car} />
                <BookingForm className={s.bookingForm} />
            </div>
            
        </div>
    )
}