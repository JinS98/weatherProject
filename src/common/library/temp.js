export const temp = (value) => {
    const result = Math.round(((value)-273.15)*10)/10
    return result
}