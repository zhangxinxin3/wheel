<template>
    <div class="imgList">
        <div class="header">
            <div>颜色</div>
            <div>车款</div>
        </div>
        <div>{{detailObj}}</div>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
    computed:{
        ...mapState({
            detailObj:state => state.wheel.detailObj
        })
    }
}
</script>

<style lang="scss">
.imgList{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size:.3rem;
    .header{
        height: 0.8rem;
        width: 100%;
        line-height: 0.8rem;
        display: flex;
        border-bottom:1px solid #ccc;
        div{
            width: 50%;
            text-align: center
        }
    }
}
</style>
