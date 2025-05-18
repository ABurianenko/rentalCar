export const formatNumber = (num) => {
    return num.toLocaleString('uk', {
        useGrouping: true,
    })
}