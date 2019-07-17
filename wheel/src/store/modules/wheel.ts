import { wheel, leftNav, detail, dealer, local, city, province, submiss, carDetail } from '@/serves/wheel'

const state = {
    carsDate:[],
    list:[],
    data:[],
    leftFlag:false,
    index:0,
    detailObj: {},
    carId:'131315',
    SerialID:'2593',
    dealerArr:{}, //低价
    local:{}, //定位
    cityData:[], //省
    address:{},
    provinceData:[],
    provinceFlag:false,
    cityFlag:false
};

const mutations = {
    //首页所有汽车
    upCars(state: any, payload: any) {
        payload.map((item: any) => {
            let key = item.Spelling.substring(0, 1);
            if (state.data.filter((items: any) => items.value === key).length === 0) {
                state.data.push({
                    value: key,
                    id: key,
                    child: []
                })
            }
            state.data.map((items: any, index: any) => {
                if (item.Spelling.substring(0, 1) === items.value) {
                    state.data[index].child.push(item);
                }
            })
        })
        console.log('state.data...', state.data)
        return state.data;
    },
    //侧边栏
    changeLeft(state: any, payload: boolean) {
        return state.leftFlag = payload
    },
    //侧边栏数据
    upLeft(state: any, payload: any) {
        return state.carsDate = payload;
    },
    changeCarId(state:any,payload:any){
        state.SerialID = payload;
        console.log(state.SerialID);
    },
    upDetail(state: any, payload: any) {
        return state.detailObj = payload
    },
    //低价
    upDealer(state:any,payload:any){
        state.dealerArr = payload;
        console.log('state.dealerArr',state.dealerArr)
    },
    //定位
    upLocal(state:any,payload:any){
        state.local = payload;
    },
    //省
    upCity(state:any,payload:any){
        state.cityData = payload;
    },
    //市
    upProvince(state:any,payload:any){
        state.provinceData = payload;
    },
    //地点
    saveRes(state:any,payload:any){
        state.address = payload;
    },
    changes(state:any,payload:any){
        state.provinceFlag = payload;
    },
    changeFlag(state:any,payload:any){
        state.cityFlag = payload
    }
};

const actions = {
    async getDetail({ commit }: any, payload: any) {
        let data = await detail()
        console.log("dataDetail...", data.data)
        commit("upDetail", data.data)
    },
    //首页所有汽车
    async getHome({ commit }: any, payload: any) {
        let data = await wheel();
        console.log('data...', data.data)
        commit('upCars', data.data)
    },
    //侧边栏
    async getNav({ commit }: any, payload: any) {
        console.log('payload', payload)
        let data = await leftNav(payload);
        console.log('侧边栏...',data)
        commit('upLeft',data.data)
    },
    //询问低价
    async getDealer({commit}:any,payload:any){
        let data = await dealer(payload);
        console.log('询问低价',data)
        commit('upDealer',data.data)
        return data.data;
    },
    //定位
    async getLocal({commit}:any,payload:any){
        let data = await local();
        console.log('定位',data)
        commit('upLocal',data.data);
        return data.data;
    },
    //省
    async getCity({commit}:any,payload:any){
        let data = await city();
        console.log('省',data)
        commit('upCity',data.data)
    },
    //市
    async getProvince({commit}:any,payload:any){
        let data = await province(payload);
        console.log('市',data)
        commit('upProvince',data.data)
    },
    //提交
    async getSubmis({commit}:any,payload:any){
        console.log('payload',payload)
        let data = await submiss(payload);
        console.log('提交结果',data)
        return data;
    },
    //详情
    // async getDetail({commit,state}:any,payload:any){
    //     let data = await carDetail(state.SerialID);
    //     console.log('详情',data)
    // }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}