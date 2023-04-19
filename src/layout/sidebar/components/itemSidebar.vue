<template>
  <div>
    <a-menu-item
      v-for="item in route"
      :key="item.name"
      @click="selectOption(item.name)"
      >{{ item.meta.title }}</a-menu-item
    >
  </div>
</template>

<script>
export default {
  props: ["route"],
  methods: {
    selectOption(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style></style>
