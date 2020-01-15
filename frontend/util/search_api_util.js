export const userSearch = (data) => {
    return $.ajax({
        method: 'POST',
        url: 'api/users/search',
        data: {data}
    })
}