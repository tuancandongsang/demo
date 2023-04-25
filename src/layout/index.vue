<template>
  <div id="layout">
    <div class="layout-sidebar">
      <Sidebar />
    </div>
    <div class="layout-appmain">
      <div class="header">
        <Header />
      </div>
      <div class="main-app">
        <MainApp />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./sidebar/index.vue";
import Header from "./header/index.vue";
import Footer from "./footer/index.vue";
import MainApp from "./main/index.vue";
export default {
  components: { Sidebar, Header, Footer, MainApp },
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
#layout {
  .layout-appmain {
    .footer {
      background-color: $bg-footer;
      height: 70px;
      position: relative;
      z-index: 1;
      top: 60px;
      left: 200px;
      width: calc(100% - 210px);
    }
  }
}
</style>
