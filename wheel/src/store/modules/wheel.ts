import { wheel } from '@/serves/wheel'

const state = {

};

const mutations = {

};

const actions = {
    async getHome(){
        console.log('111')
        
        let data = await wheel();
        console.log(data)
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}