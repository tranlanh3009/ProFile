<template>
  <div>
    <!-- Nếu route có meta.layout === 'none', render trực tiếp router-view -->
    <router-view v-if="$route.meta.layout === 'none'"></router-view>
    
    <!-- Ngược lại, sử dụng layout như bình thường -->
    <component v-else :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
const default_layout = "default";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>
<style>
</style>