import { wheel, detail } from '@/serves/wheel'

const state = {
    detailObj:{}
};

const mutations = {
    upDetail(state:any,payload:any){
        return state.detailObj = payload
    }
};

const actions = {
    async getHome({ commit }: any, payload: any) {
        let data = await wheel();
        console.log(data)
    },
    async getDetail({ commit }: any, payload: any) {
        let data = await detail()
        console.log("dataDetail...",data.data)
        commit("upDetail",data.data)
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}