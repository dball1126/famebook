export const userSearch = (query) => {
    return $.ajax({
        method: 'POST',
        url: 'api/users/search',
        data: {query}
    })
}