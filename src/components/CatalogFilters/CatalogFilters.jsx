import { useDispatch, useSelector } from "react-redux"
import { selectFilters } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { selectBrand } from "../../redux/brands/selectors";
import { getBrands } from "../../redux/brands/operations";
import { clearFilters, setBrand, setMaxMileage, setMinMileage, setPrice } from "../../redux/filters/slice";
import { Field, Formik, Form } from "formik";
import { PRICE } from "../../constants";

import s from './CatalogFilters.module.css'

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
        maxMileage: filters.maxMileage || "",
    }

    const hasActiveFilters = () => {
        return filters.brand || filters.price || filters.minMileage || filters.maxMileage;
    };

    const handleSubmit = (values) => {
        dispatch(setBrand(values.brand));
        dispatch(setPrice(values.price ));
        dispatch(setMinMileage(values.minMileage));
        dispatch(setMaxMileage(values.maxMileage));
    }

    return (
        <div className={s.filtersForm}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className={s.form}>
                        <label className={s.label}>
                            <p className={s.labelName}>Car brand</p>
                            <Field as="select" name="brand" className={s.selector}>
                                <option value="" disabled hidden>Choose a brand</option>
                                {brands.map((brand, id) => (
                                    <option key={id} value={brand} className={s.option}>{brand}</option>
                                ))}
                            </Field>
                        </label>

                        <label className={s.label}>
                            <p className={s.labelName}>Price/1hour</p>
                            <Field as="select" name="price" className={s.selector}>
                                <option value="" disabled hidden>Choose a price</option>
                                {PRICE.map((price, id) => (
                                    <option key={id} value={price.value} className={s.option}>{price.label}</option>
                                ))}
                            </Field>
                        </label>

                        <label>
                            <p className={s.labelName}>Car mileage/km</p>
                            <div className={s.mileageInput}>
                                <div className={s.inputMin}>
                                    <p>From</p>
                                    <Field type="number" name="minMileage" />
                                </div>
                                <div className={s.inputMax}>
                                    <p>To</p>
                                    <Field type="number" name="maxMileage"  />
                                </div>
                            </div>
                            
                            
                        </label>

                        <button type="submit" className={s.btn}>
                            Search
                        </button>

                        {hasActiveFilters() && (
                        <button
                            type="button"
                            className={s.btn}
                            onClick={() => dispatch(clearFilters())}
                        >
                            Clear filters
                        </button>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    )
}