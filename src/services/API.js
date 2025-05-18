import axios from "axios"

export const BASE_URL = 'https://car-rental-api.goit.global'

const instance = axios.create({
    baseURL: BASE_URL,
});

const getAllCars = async (filters = {}, limit=12, page=1) => {
    const params = new URLSearchParams();

    if (filters.brand) params.append('brand', filters.brand);
    if (filters.price) params.append('rentalPrice', filters.price);
    if (filters.minMileage) params.append('minMileage', filters.minMileage);
    if (filters.maxMileage) params.append('maxMileage', filters.maxMileage);
    params.append('limit', limit);
    params.append('page', page);

    const { data } = await instance.get(`/cars?${params.toString()}`);
    
    return data;
};

const getCarById = async (id) => {
    const res = await axios(`${BASE_URL}/cars/${id}`)

    return res.data;
}

const getAllBrands = async () => {
    const { data } = await axios(`${BASE_URL}/brands`);
    return data;
}

export { getAllCars, getCarById, getAllBrands };