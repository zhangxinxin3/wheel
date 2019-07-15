<template>
    <div class="home">
        <Wheel></Wheel>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Wheel from '@/components/wheel.vue';

export default Vue.extend({
    name: 'home',
    components:{
        Wheel
    },
    mounted(){
        this.$store.dispatch('wheel/getHome');
    }
});
</script>
