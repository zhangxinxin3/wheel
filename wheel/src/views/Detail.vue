<template>
  <div class="detail">
    <div class="banner">
      <img :src="detailObj.Picture" alt />
      <span>xxx张照片</span>
    </div>
    <div class="price">
      <div class="leftPrice">
        <div class="detailPrice">{{detailObj.market_attribute.dealer_price}}</div>
        <div class="zhidaoPrice">{{detailObj.market_attribute.official_refer_price}}</div>
      </div>
      <div class="rightBtn">{{detailObj.BottomEntranceTitle}}</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "detail",
  computed: {
    ...mapState({
      detailObj: state => state.wheel.detailObj
    })
  },
  methods: {},
  components: {},
  mounted() {
    this.$store.dispatch("wheel/getDetail");
  }
});
</script>
<style lang="scss">
.detail {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y:scroll;
  .banner {
    width: 100%;
    height: 200rpx;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      display: block;
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 100rpx;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      font-size: 30rpx;
      border-radius: 10rpx;
    }
  }
  .price {
    height: 100rpx;
    width: 100%;
    background:red;
    display: flex;
    .leftDetail{
      width: 200rpx;
      height: 100%;
      text-align: center;
      .detailPrice{
        font-size:40rpx;
        color:red;
      }
      .zhidaoPrice{
        font-size:26rpx;
        color:#ccc;
      }
    }
    .rightBtn{
      width: 50%;
      background:blueviolet;
      color:white;
      height: 40px;
      line-height: 40rpx;
      text-align:center;
    }
  }
}
</style>
