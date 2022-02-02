
export const getDate = () => {
    const time = new Date()

    const year = time.getFullYear()
    const month = time.getMonth()
    const day = time.getDate()

    return `0${day}-0${month > 12 ? month - 1 : month + 1}-${year}`
}