export const fetchPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
}

export const fetchPost = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${id}`
    })
}

export const deletePost = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/posts/${id}`,
        data: { id }
    })
}

export const createPost = () => {
    return $.ajax({
        method: 'POST',
        url: `/api/posts`
    })
}