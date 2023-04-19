<template>
  <div id="sidebar">
    <img src="https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/256_144_4.png?$512_N_PNG$" alt="">
    <OptionSidebar />
  </div>
</template>

<script>
import OptionSidebar from './components/optionSidebar.vue';
export default {
  components:{OptionSidebar}
};
</script>

<style lang="scss" scoped>
#sidebar {
  width: 200px;
  height: 100%;
  background-color: #000;
  img{
    display: block;
    width: 100%;
    cursor: pointer;
    &:hover{
      opacity: 0.8;
    }
  }
}
</style>
