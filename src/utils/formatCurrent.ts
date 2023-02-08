
export const formatCurrent = (current: number): string => {
    return current.toLocaleString(
        'pt-br', { style: 'currency', currency: 'BRL' }
    )
}

export const formatDate = (date: string): string => {
    const dateformatted = new Date(date)

    const day = dateformatted.getDay() > 9
        ? dateformatted.getDay()
        : `0${dateformatted.getDay()}`

    const month = dateformatted.getMonth() > 9
        ? (dateformatted.getMonth() + 1)
        : `0${dateformatted.getMonth() + 1}`

    const year = dateformatted.getFullYear();


    return `${day}/${month}/${year}`

}