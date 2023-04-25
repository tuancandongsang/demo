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
    this.header = this.$route.matched[1].meta.title;
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
@import "@/styles/index.scss";
#app-main {
  padding: 20px;
  background-color: $bg-app;
  position: relative;
  left: 200px;
  top: 60px;
  width: calc(100% - 210px);

  h1 {
    font-weight: 600;
    margin-bottom: 20px;
  }
}
</style>
