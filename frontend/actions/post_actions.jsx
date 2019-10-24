import * as PostApiUtil from '../util/post_api_util';

export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIEVE_ALL_POSTS = 'RECEIEVE_ALL_POSTS';

const receievePost = ({post}) => {
    return {
        type: RECEIVE_POST,
        post: post
    }
}
const receievePosts = ({posts}) => {
    return {
        type: RECEIEVE_ALL_POSTS,
        posts: posts
    }
}

const destroyPost = ({ postId }) => {
    return {
        type: DELETE_POST,
        postId: postId
    }
}

