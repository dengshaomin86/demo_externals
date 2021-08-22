<template>
  <a-locale-provider :locale="locales.zh_CN">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
const { locales } = window.antd;

export default {
  name: 'app',
  data() {
    return {
      locales,
    };
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  &:before,
  &:after {
    display: table;
    content: '';
  }
}
</style>
