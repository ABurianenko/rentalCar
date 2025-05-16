import { CarList } from "../../components/CarList/CarList";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectError, selectIsLoading, selectLimit, selectPage, selectTotal} from "../../redux/catalog/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { fetchCatalog } from "../../redux/catalog/operations";
import { CatalogFilters } from "../../components/CatalogFilters/CatalogFilters";

export const CatalogPage = () => {
    const dispatch = useDispatch();

    const cars = useSelector(selectCars);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const limit = useSelector(selectLimit);
    const page = Number(useSelector(selectPage));
    const total = useSelector(selectTotal);

    const filters = useSelector(selectFilters);

    const handlePageChange = (newPage) => {
        dispatch(fetchCatalog({filters, page: newPage, limit}))
    }

    useEffect(() => {
        dispatch(fetchCatalog({ filters, page: 1, limit }));
    }, [dispatch, filters, limit]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <CatalogFilters />
            {(!cars) ? 
                <p>There are no cars according to your request.</p> :
                <CarList cars={cars} />
            }
            <button onClick={() => handlePageChange(page+1)} disabled={page>=total}>Load more</button>
        </div>
    )
}
