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
          <a-menu-item
            v-for="route in item.children"
            :key="route.name"
            @click="selectOption(route.name)"
            >{{ route.meta.title }}</a-menu-item
          >
        <!-- <ItemSidebar :route="item.children" /> -->
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
      // openKeys: ["/"],
      // preOpenKeys: ["/"],
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
    methods: {
    selectOption(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
<style scoped lang="scss">
</style>
