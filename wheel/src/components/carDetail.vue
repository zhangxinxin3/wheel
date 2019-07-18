<template>
  <dir>
    <div class="priceDetail" v-for="(item,index) in detailObj.list" :key="index">
      <p>{{item.market_attribute.year}}款 {{item.car_name}}</p>
      <p>马力当单速变速箱</p>
      <p>
        <span>指导价:{{item.market_attribute.official_refer_price}}</span>
        <span>{{item.market_attribute.dealer_price_max}}起</span>
      </p>
      <div class="btn" @click="jumpDetail" :data-ind="index">询问低价</div>
    </div>
  </dir>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "carDetail",
  computed: {
    ...mapState({
      detailObj: state => state.wheel.detailObj,
      carId: state => state.wheel.carId
    })
  },
  methods: {
    jumpDetail(e) {
      let id = this.detailObj.list[e.target.dataset.ind].car_id;
      console.log("xxx",id)
      this.$store.commit("wheel/saveDetailId", id);
    }
  }
});
</script>

<style lang="scss">
.priceDetail {
  margin-top: 0.2rem;
  background: white;
  p {
    height: 0.5rem;
    padding-left: 0.2rem;
    &:nth-child(1) {
      font-size: 0.4rem;
      padding-top: 0.2rem;
    }
    &:nth-child(2) {
      font-size: 0.28rem;
      color: #ccc;
      padding-top: 0.2rem;
    }
    &:nth-child(3) {
      margin-left: 3.5rem;
      span {
        font-size: 0.3rem;
        &:nth-child(1) {
          font-size: 0.26rem;
          color: #555;
        }
        &:nth-child(2) {
          font-size: 0.34rem;
          color: red;
          padding-left: 0.2rem;
        }
      }
    }
  }
  .btn {
    height: 0.8rem;
    width: 100%;
    line-height: 0.8rem;
    text-align: center;
    border-top: 0.01rem solid #ccc;
    color: blueviolet;
  }
}
</style>

