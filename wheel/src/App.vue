<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/detail"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
// html,body,*{
//     width: 100%;
//     height: 100%;
// }
html,body{
    height:100%;
    margin:0;
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
//   text-align: center;
  color: #2c3e50;
}
</style>
