import {get} from './apiIndex';

// 向后台发送数据请求轮播图
export function fetchSliders() {
    return get('/sliders');
}

// 获取所有的图片
export function fetchKinds(offset,limit) {
    return get(`/kind?offset=${offset}&limit=${limit}`)
}