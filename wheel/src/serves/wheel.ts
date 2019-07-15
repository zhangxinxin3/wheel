import request from '@/utils/request';

export function wheel(){
    return request({
        url:"/v2-car-getMasterBrandList.html?_1563178209611",
        method:"GET"
    })
}