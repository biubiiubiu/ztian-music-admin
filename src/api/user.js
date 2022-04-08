import { get, post } from './request';

// 所有用户信息
const search = paging => {
    return get('/users/', { params: paging });
};

// 当前用户信息
const me = () => {
    return get('/users/me');
};

// 创建新用户
const create = user => {
    return post('/users', user);
};

export default {
    search,
    create,
    me
};


