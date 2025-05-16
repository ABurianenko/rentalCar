import { useDispatch, useSelector } from "react-redux"
import { selectFilters } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { selectBrand } from "../../redux/brands/selectors";
import { getBrands } from "../../redux/brands/operations";
import { setBrand, setMaxMileage, setMinMileage, setPrice } from "../../redux/filters/slice";
import { Field, Formik, Form } from "formik";
import { PRICE } from "../../constants";

export const CatalogFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const brands = useSelector(selectBrand);

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    const initialValues = {
        brand: filters.brand || "",
        price: filters.price || "",
        minMileage: filters.minMileage || "",
        maxMileage: filters.maxMleage || "",
    }


    const handleSubmit = (values) => {
        dispatch(setBrand(values.brand));
        dispatch(setPrice(values.price ));
        dispatch(setMinMileage(values.minMileage));
        dispatch(setMaxMileage(values.maxMileage));
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="brand">
                            Car brand
                            <Field as="select" name="brand" >
                                <option value="">Choose a brand</option>
                                {brands.map((brand, id) => (
                                    <option key={id} value={brand}>{brand}</option>
                                ))}
                            </Field>
                        </label>

                        <label htmlFor="price">
                            Price/1hour
                            <Field as="select" name="price">
                                <option value="">Choose a price</option>
                                {PRICE.map((price, id) => (
                                    <option key={id} value={price.value}>{price.label}</option>
                                ))}
                            </Field>
                        </label>

                        <label>
                            Car mileage/km
                            <Field type="number" name="minMileage" />
                            <Field type="number" name="maxMileage" />
                        </label>

                        <button type="submit" >
                            Search
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}