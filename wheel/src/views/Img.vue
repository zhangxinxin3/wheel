<template>
  <div class="imgList">
    <div class="header">
      <div>颜色</div>
      <div>车款</div>
    </div>
    <div class="allImg">
      <div class="facade" v-for="(item,index) in 5" :key="index">
        <div v-for="(item,index) in 6" :key="index">
          <img :src="item.Url" alt v-for="(item,index) in imgList" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      imgList: state => state.wheel.imgList,
      SerialID: state => state.wheel.SerialID
    })
  }
};
</script>

<style lang="scss">
.imgList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.3rem;
  .header {
    height: 0.8rem;
    width: 100%;
    line-height: 0.8rem;
    display: flex;
    border-bottom: 1px solid #ccc;
    div {
      width: 50%;
      text-align: center;
    }
  }
  .allImg {
    flex: 1;
    overflow-y: scroll;
    .facade {
      height: 5rem;
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        height: 2.3rem;
        width: 2.3rem;
        background: #ccc;
        margin: 0.1rem;
      }
    }
  }
}
</style>
