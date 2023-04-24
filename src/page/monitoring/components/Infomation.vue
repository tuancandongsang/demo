<template>
  <div id="Infomation">
    <div class="header">
      <img src="	https://www.smsscenter.com/img/common/ico-title.png" alt="" />
      <h1>Basic Information</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["props"],
  mounted() {
    console.log("props", this.props);
  },
};
</script>

<style scoped lang="scss">
#Infomation {
  .header {
    display: flex;
    // height: 20px;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    padding-left: 12px;
    padding: 12px 12px 0;
    background-color: #fff;
    border-bottom: 2px solid #111;
    img {
      width: 20px;
    }
  }
}
</style>
