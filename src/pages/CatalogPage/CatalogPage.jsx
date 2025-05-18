import { CarList } from "../../components/CarList/CarList";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectError, selectIsLoading, selectLimit, selectPage, selectTotal} from "../../redux/catalog/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { useRef, useEffect } from "react";
import { fetchCatalog } from "../../redux/catalog/operations";
import { CatalogFilters } from "../../components/CatalogFilters/CatalogFilters";
import { resetCars } from "../../redux/catalog/slice";

import s from './CatalogPage.module.css'
import { Loader } from "../../components/Loader/Loader";

export const CatalogPage = () => {
    const dispatch = useDispatch();

    const cars = useSelector(selectCars);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const limit = useSelector(selectLimit);
    const page = Number(useSelector(selectPage));
    const total = useSelector(selectTotal);

    const filters = useSelector(selectFilters);

    const loadMoreButtonRef = useRef(null);
    const prevPageRef = useRef(page);

    const handlePageChange = (newPage) => {
        dispatch(fetchCatalog({filters, page: newPage, limit}))
    }

    useEffect(() => {
        dispatch(resetCars());
        dispatch(fetchCatalog({ filters, page: 1, limit }));
    }, [dispatch, filters, limit]);

    useEffect(() => {
        if (prevPageRef.current !== page && page !== 1 && loadMoreButtonRef.current) {
            loadMoreButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        prevPageRef.current = page;
    }, [page]);

    if (isLoading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={s.catalogContainer}>
            <CatalogFilters />
            {(cars.length===0) ? 
                <p className={s.message}>There are no cars according to your request.</p> :
                (
                <div >
                    <CarList className={s.catalog} cars={cars} />
                    <button
                        className={s.loadMoreBtn}   
                        ref={loadMoreButtonRef}
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page >= total}
                    >
                        Load more
                    </button>   
                </div> 
                )
            }
            
        </div>
    )
}
