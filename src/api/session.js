import {post,get} from './apiIndex';

export function signup(data) {
    return post('/signup',data);
}

export function login(data) {
    return post('/login',data);
}

export function validate() {
    get('/validate')
}