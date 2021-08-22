<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="Hello world" />
    <div>
      <h1>antd</h1>
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
