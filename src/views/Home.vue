<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="Hello world" />
    <div>
      <router-link to="/antd">antd</router-link>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped></style>
