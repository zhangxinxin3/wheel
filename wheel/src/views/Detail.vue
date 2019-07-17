<template>
  <div class="detail">
    <div class="banner" @click="jumpDetailImg">
      <img :src="detailObj.Picture" alt />
      <div>{{detailObj.pic_group_count}}张照片</div>
    </div>
    <div class="price">
      <div class="leftPrice">
        <div class="detailPrice">{{detailObj.market_attribute.dealer_price}}</div>
        <div class="zhidaoPrice">指导价:{{detailObj.market_attribute.official_refer_price}}</div>
      </div>
      <div class="rightBtn">{{detailObj.BottomEntranceTitle}}</div>
    </div>
    <div class="tab">
      <div v-for="(item,index) in tabList" :key="index">{{item}}</div>
    </div>
    <carDetail></carDetail>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import carDetail from "@/components/carDetail.vue";
export default Vue.extend({
  name: "detail",
  data() {
    return {
      tabList: ["全部", "2019"]
    };
  },
  computed: {
    ...mapState({
      detailObj: state => state.wheel.detailObj,
      carId: state => state.wheel.carId
    })
  },
  methods: {
    jumpDetailImg(){
      this.$router.push("/img")
    }
  },
  components: {
    carDetail
  },
  mounted() {
    this.$store.dispatch("wheel/getDetail",this.carId);
  }
});
</script>
<style lang="scss">
.detail {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  font-size: 0.32rem;
  background: #eee;
  .banner {
    width: 100%;
    height: 4rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    div {
      position: absolute;
      bottom: 0.2rem;
      right: 0.2rem;
      background: rgba(0, 0, 0, 0.7);
      color: white;
    }
  }
  .price {
    height: 1rem;
    width: 100%;
    display: flex;
    background: white;
    .leftPrice {
      width: 50%;
      div {
        text-align: center;
        &:nth-child(1) {
          font-size: 0.4rem;
          color: red;
        }
        &:nth-child(2) {
          color: #ccc;
          font-size: 0.28rem;
        }
      }
    }
    .rightBtn {
      width: 50%;
      background: blueviolet;
      color: white;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
    }
  }
  .tab {
    height: 0.8rem;
    width: 100%;
    display: flex;
    background: white;
    line-height: 0.8rem;
    margin: 0.15rem 0;
    div {
      padding: 0 0.2rem;
    }
  }
}
</style>
