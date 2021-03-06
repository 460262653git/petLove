import {get} from './apiIndex';

// 向后台发送数据请求轮播图
export function fetchSliders() {
    return get('/sliders');
}

// 获取所有的图片
export function fetchKinds(offset,limit) {
    return get(`/kinds?offset=${offset}&limit=${limit}`)
}

//获取详情页信息
export function fetchPet(id) {
    return get(`/detail/${id}`)
}

