export const range = (start: number, end: number) => {
    return [...Array(end).keys()].map(item => item + start)
}
