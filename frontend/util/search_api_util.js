export const userSearch = (query) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: 'api/users/search',
        data: {query}
    })
}