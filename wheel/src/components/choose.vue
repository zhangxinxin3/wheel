<template>
    <div class="wrapper">
        <div class="top">
            <p></p>
        </div>
        <div class="main">
            <p></p>
            <div class="list">
                <p>
                    <i></i>
                    <span></span>
                </p>
                <p>
                    <i></i>
                    <span></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name:'choose'
})
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 999;
    .top{
        padding-left: .2rem;
        font-size: .3rem;
        line-height: .76rem;
        height: .76rem;
        background: #fff;
        overflow-x: scroll;
        box-sizing: border-box;
        p{
            color: #00afff;
        }
    }
    .main{
        width:100%;
        >p{
            height: .5rem;
            line-height: .5rem;
            padding: 0 .2rem;
            font-size: .24rem;
            color: #666;
            background: #eee;
            box-sizing: border-box;
        }
        .list{
            width:100%;
            padding:.3rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            p{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            p:nth-child(1) i{
                font-size: .3rem;
            }
            p:nth-child(1) span{
                font-size: .24rem;
                color: red;
            }
            p:nth-child(2) i{
                font-size: .24rem;
                color: #a2a2a2;
                max-width: 4.6rem;
            }
            p:nth-child(2) span{
                font-size: .24rem;
                color: #a2a2a2;
            }
        }
    }
}
</style>

