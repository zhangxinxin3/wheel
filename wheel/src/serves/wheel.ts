import request from '@/utils/request';

export function wheel() {
    return request({
        url: "/v2-car-getMasterBrandList.html?_1563178209611",
        method: "GET"
    })
}

export function detail() {
    return request({
        url: "http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=5371&_1563195473209",
        method: "GET"
    })
}