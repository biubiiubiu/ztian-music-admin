import { post, get } from './request';

// 登录接口
export const createToken = (username, password) => {
    return post('/tokens', { username, password });
};
