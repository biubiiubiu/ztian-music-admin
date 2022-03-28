import { post } from './request';

// export const login = (username, password) => {
//     return post('/login', { username, password });
// };

export const search = paging => {
    return get('/users/', { params: paging });
};

export const me = () => {
    return get('/users/me');
};


