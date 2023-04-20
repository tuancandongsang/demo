<template>
  <div id="sidebar">
    <h1>SAM SUNG</h1>
    <div class="fold-all"><span>FOLD/EXPAND ALL</span></div>
    <OptionSidebar />
  </div>
</template>

<script>
import OptionSidebar from "./components/optionSidebar.vue";
export default {
  components: { OptionSidebar },
};
</script>

<style lang="scss" scoped>
#sidebar {
  width: 200px;
  height: 100%;
  background-color: #001529;
  h1 {
    display: block;
    text-shadow: #fc0 1px 0 10px;
    color: aliceblue;
    text-align: center;
    padding: 20px 0;
    font-weight: 800;
    width: 100%;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .fold-all {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    span {
      border: 2px solid aliceblue;
          text-shadow: #fc0 1px 0 10px;
      border-radius: 50px;
      color: aliceblue;
      padding: 8px 12px;
      font-size: 0.7rem;
      font-weight: 800;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
}
</style>
