import request from '@/utils/request';

export function wheel() {
    return request({
        url: "/v2-car-getMasterBrandList.html?_1563178209611",
        method: "GET"
    })
}

export function detail() {
    return request({
        url: "http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=4759&_1563263910736",
        method: "GET"
    })
};

export function leftNav(payload:any){
    return request({
        url:'/v2-car-getMakeListByMasterBrandId.html?MasterID='+payload+'&_1563196545213',
        method:"GET"
    })
}