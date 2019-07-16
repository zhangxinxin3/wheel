<template>
    <div class="wrapper">
        <div class="wrap" v-for="(item,index) in data" 
            :key="index" id="item.id" ref="wrap">
            <p>{{item.value}}</p>
            <div class="main">
                <div class="wrapMain" v-for="(items,indexs) in item.child" 
                :key="indexs" 
                @click="bind(items.MasterID)">
                    <img :src="items.CoverPhoto" :alt="items.Name" />
                    <p>{{items.Name}}</p>
                </div>    
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import bus from '@/utils/bus';

export default Vue.extend({
    name: 'Wheel',
    props:{
        data:{
            type:Array,
            value:[]
        }
    },
    mounted(){
    },
    methods:{
        bind(MasterID:any){
            this.$store.commit('wheel/changeLeft',true)
            this.$store.dispatch('wheel/getNav',MasterID)
        }
    }
});
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    overflow-y:scroll;
    .wrap{
        width: 100%;
        display: flex;
        flex-direction: column;
        >p{
            font-size: .28rem;
            line-height: .6rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
            margin:0;
        }
        .main{
            width:100%;
            display: flex;
            flex-direction: column;
            padding:0 .3rem;
            box-sizing: border-box;
            .wrapMain{
                width:100%;
                height: 1rem;
                border-bottom: 1px solid #ddd;
                display: flex;
                align-items: center;
                justify-content: space-between;
                img{
                    height:.8rem;
                    width:1rem;
                }
                p{
                    margin:0;
                    flex:1;
                    height:100%;
                    font-size: .32rem;
                    margin-left: .4rem; 
                    line-height: 1rem;
                }
            }
        }
    }
}
</style>

