export const formatNumber = (num) => {
    return num.toLocaleString('uk', {
        useGrouping: true,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}