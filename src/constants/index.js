const START_PRICE = 30;
const END_PRICE = 120;

export const PRICE = Array.from({ length: (END_PRICE - START_PRICE) / 10 + 1}, (_, i) => {
    const price = START_PRICE + i*10;
    return {value: price, label: String(price)}
});

