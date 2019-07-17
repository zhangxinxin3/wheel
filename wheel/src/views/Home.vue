<template>
    <div class="home">
        <Wheel :data="data"></Wheel>
        <LeftList :data="data"></LeftList>
        <LeftMosk v-if="leftFlag"></LeftMosk>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Wheel from '@/components/wheel.vue';
import LeftList from '@/components/leftList.vue';
import LeftMosk from '@/components/leftMosk.vue';
import { mapState } from 'vuex';

export default Vue.extend({
    name: 'home',
    components:{
        Wheel,
        LeftList,
        LeftMosk
    },
    computed:{
        ...mapState({
            data:(state:any)=>state.wheel.data,
            carsDate:(state:any)=>state.wheel.carsDate,
            leftFlag:(state:any)=>state.wheel.leftFlag
        })
    },
    mounted(){
        this.$store.dispatch('wheel/getHome');
    }
});
</script>

<style lang="scss" scoped>
.home{
    width:100%;
    height:100%;
    overflow: hidden;
}
</style>
