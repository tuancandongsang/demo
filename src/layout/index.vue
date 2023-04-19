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

<style lang='scss' scoped>
#layout{
  display: flex;
  // background-color: aqua;
  width: 100%;
  height: 100%;
  .layout-appmain{
    flex: 1;
    .footer{
      background-color: dodgerblue;
    }
  }
}
</style>
