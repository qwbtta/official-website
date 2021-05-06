<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
}
</style>
