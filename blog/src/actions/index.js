import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fecthPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // const userIds =_.uniq(_.map(getState().posts, 'userId'));
    // console.log(userIds);
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
     .map('userId')
     .uniq()
     .forEach(id => dispatch(fetchUser(id)))
     .value();
};

export const fetchPosts = () => async dispatch => {
    const reponse = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FECTH_POSTS', payload: reponse.data });
};

export const fetchUser = (id) => async dispatch => {
    const reponse = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FECTH_USER', payload: reponse.data });
};

// Memoized
// const _fecthUser = _.memoize(async (id, dispatch) => {
//     const reponse = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FECTH_USER', payload: reponse.data });
// });

/*
export const fetchPosts = () => {
    return async (dispatch) => {
        const reponse = await jsonPlaceholder.get('/post');

        dispatch({
            type: 'FECTH_POSTS',
            payload: reponse
        });
    }
};
*/