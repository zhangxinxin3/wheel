import request from '@/utils/request.ts';

export function detail(params:any) {
    return request({
        url: "http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=5371&_1563195473209",
        method: "GET"
    })
}
//首页车系
export function wheel(){
    return request({
        url:"/v2-car-getMasterBrandList.html",
        method:"GET"
    })
};
//侧边栏车系
export function leftNav(payload:any){
    return request({
        url:'/v2-car-getMakeListByMasterBrandId.html?MasterID='+payload,
        method:"GET"
    })
}
//询问低价
export function dealer(params:any){
    console.log('params',params)
    return request({
        url:'/v2-dealer-alllist.html?carId='+params.carId+'&cityId='+params.cityId,
        method:"GET"
    })
}
//定位
export function local(){
    return request({
        url:'/location-client.html',
        method:"GET"
    })
}
//省
export function city(){
    return request({
        url:'/v1-city-alllist.html',
        method:"GET"
    })
}
//市
export function province(params:any){
    return request({
        url:'/v1-city-alllist.html?provinceid='+params.provinceid,
        method:"GET"
    })
}
//提交
export function submiss(params:any){
    return request({
        url:'/h2-submit-lowprice.html?carid='+params.carid+'&carname='+params.carname+'&cl_from='+params.cl_from+
        '&dealerids='+params.dealerids+'&flag='+params.flag+'&location='+params.location+'&locationid='+params.locationid+
        '&mobile='+params.mobile+'&name='+params.name+'&openUDID='+params.openUDID+'&ordertypeid='+params.ordertypeid+
        '&ordertypeid='+params.ordertypeid+'&os='+params.os,
        method:'GET'
    })
}
//详情
export function carDetail(params:any){
    return request({
        url:'/v2-car-getInfoAndListById.html?SerialID='+params,
        method:"GET"
    })
}
