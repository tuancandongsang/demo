<template>
  <div style="background-color: #000">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <a-sub-menu v-for="item in dataOption" :key="item.path">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>{{ item.meta.title }}</template>
        <ItemSidebar :route="item.children" />
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import { MailOutlined } from "@ant-design/icons-vue";
import { appMainRouter } from "../../../router/module/appMain";
import ItemSidebar from "./itemSidebar.vue";
export default {
  components: {
    MailOutlined,
    ItemSidebar,
  },
  data() {
    return {
      selectedKeys: ["/"],
      dataOption: undefined,
      openKeys: ["/"],
      preOpenKeys: ["/"],
    };
  },
  created() {
    this.dataOption = appMainRouter;
    this.$watch(
      () => this.$route.name,
      (toParams, previousParams) => {
        // console.log(toParams);
      }
    );
    this.$watch(
      () => this.openKeys,
      (val, oldVal) => {
        // console.log("oldVal", val);
        this.preOpenKeys = oldVal;
      }
    );
  },
};
</script>
<style scoped lang="scss">
span {
  color: #fff;
  font-size: 1rem;
  text-shadow: #fc0 1px 0 10px;
}
</style>
