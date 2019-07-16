<template>
  <div class="leftList">
    <ul class="list" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <li data-hover="hover">#</li>
      <li v-for="(item,index) in data" :key="index" data-hover="hover">{{item.value}}</li>
    </ul>
    <span v-if="isTouch" class="letter">{{current}}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import bus from "@/utils/bus";

export default Vue.extend({
  name: "LeftList",
  data() {
    return {
      current: "",
      isTouch: false
    };
  },
  props: {
    data: {
      type: Array,
      value: []
    }
  },
  methods: {
    touchStart(e: Event): void {
      this.$data.isTouch = true;
    },
    touchMove(e: Event): void {
      let pageY = e.touches[0].pageY;
      let letterHeight = ((0.4 * window.innerWidth) / 750) * 100;
      let letterOffsetTop =
        (window.innerHeight - letterHeight * this.$props.data.length) / 2;
      let letterIndex = Math.floor((pageY - letterOffsetTop) / letterHeight);
      // 处理上边界
      if (letterIndex < 0) {
        letterIndex = 0;
      }
      // 处理下边界
      if (letterIndex > this.$props.data.length - 1) {
        letterIndex = this.$props.data.length - 1;
      }
      // console.log('letter...', this.$props.data[letterIndex].value);
      this.$data.current = this.$props.data[letterIndex].value;
    },
    touchEnd(e: Event): void {
      this.$data.isTouch = false;
      this.$data.current = "";
    }
  }
});
</script>

<style lang="scss" scoped>
.leftList {
  z-index: 99;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  padding-left: 0.2rem;
  display: flex;
  align-items: center;
}
.list {
  width: 100%;
  height: 50%;
  li {
    list-style: none;
    font-size: 0.24rem;
    color: #666;
    font-weight: 500;
    padding: 0.05rem 0.1rem;
    box-sizing: border-box;
  }
}
.letter {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.1rem;
  top: 50%;
  left: 50%;
  position: fixed;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.6rem;
  transform: translate3d(-50%, -50%, 0);
}
</style>

