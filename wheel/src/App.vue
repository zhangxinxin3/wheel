<template>
  <div id="app">
      <router-link to="/"></router-link>
      <router-link to="/detail"></router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
    padding: 0;margin: 0;
}
html,body,#app{
    height:100%;
    width: 100%;
}
</style>
