import { useDispatch, useSelector } from "react-redux"
import { CarInfoError, CarInfoIsLoading, SelectCarInfo } from "../../redux/car/selectors";
import { useEffect, useRef } from "react";
import fetchCarInfo from "../../redux/car/operations";
import { CarInfo } from "../../components/CarInfo/CarInfo";
import { Link, useLocation, useParams } from "react-router-dom";
import { BookingForm } from "../../components/BookingForm/BookingForm";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { CarImg } from "../../components/CarInfo/CarImg";

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

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!car) return <p>Car not found</p>;

    return (
        <div>
            <Link to={goBackRef.current}><FaRegArrowAltCircleLeft /></Link>
            <CarImg car={car} />
            <CarInfo car={car} />
            <BookingForm />
        </div>
    )
}