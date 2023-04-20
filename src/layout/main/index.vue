<template>
  <div id="app-main">
    <h1>{{ header }}</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "",
    };
  },
  created() {
    this.header = this.$route.matched[1].meta.title
    this.$watch(
      () => this.$route.matched[1].meta.title,
      (toParams, previousParams) => {
        this.header = toParams;
      }
    );
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
#app-main {
  padding: 16px;
  background-color: $bg-app;
  h1{
    font-weight: 600;
    margin-bottom: 20px;
  }
}
</style>
