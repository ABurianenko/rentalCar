const selectCars = state => state.catalog.cars;
const selectError = state => state.catalog.error;
const selectIsLoading = state => state.catalog.isLoading;
const selectLimit = state => state.catalog.limit;
const selectPage = state => state.catalog.page;
const selectTotal = state => state.catalog.totalPages;

export { selectCars, selectError, selectIsLoading, selectLimit, selectPage, selectTotal };