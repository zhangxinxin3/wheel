<template>
    <div class="top" ref="div">
        <div class="wrapper" >
            <div class="wrap" ref="wrap" v-for="(item,index) in data" :key="index" id="item.id">
                <p ref="tit">{{item.value}}</p>
                <div class="main">
                    <div
                        class="wrapMain"
                        v-for="(items,indexs) in item.child"
                        :key="indexs"
                        @click="bind(items.MasterID)"
                    >
                        <img :src="items.CoverPhoto" :alt="items.Name">
                        <p>{{items.Name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import bus from "@/utils/bus";
import BScroll from "better-scroll";

export default Vue.extend({
    name: "Wheel",
    props: {
        data: {
            type: Array,
            value: []
        }
    },
    data() {
        return {
            bscroll: ""
        };
    },
    computed: {
        ...mapState({
            index: (state) => state.wheel.index
        })
    },
    created() {
        this.$nextTick(() => {
            this.bscroll = new BScroll(this.$refs.div, {
                probeType: 2,
                click: true
            });
        });
    },
    mounted() {
        bus.$on("changeIndex", (index) => {
            console.log('index',index)
            this.bscroll.scrollToElement(this.$refs.wrap[index])
        });
    },
    methods: {
        bind(MasterID) {
        this.$store.commit("wheel/changeLeft", true);
        this.$store.dispatch("wheel/getNav", MasterID);
        }
    }
});
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.wrapper {
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    > p {
      font-size: 0.28rem;
      line-height: 0.6rem;
      background: #f4f4f4;
      padding-left: 0.3rem;
      color: #aaa;
      margin: 0;
    }
    .main {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 0.3rem;
      box-sizing: border-box;
      .wrapMain {
        width: 100%;
        height: 1rem;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          height: 0.8rem;
          width: 1rem;
        }
        p {
          margin: 0;
          flex: 1;
          height: 100%;
          font-size: 0.32rem;
          margin-left: 0.4rem;
          line-height: 1rem;
        }
      }
    }
  }
}
</style>

