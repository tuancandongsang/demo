<!-- 
<InputTextarea placeholder="placeholder" />
 -->
<template>
  <div id="textarea">
    <textarea v-model="textarea" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
export default {
  props: ["placeholder"],
  data() {
    return {
      textarea: "1.1.1.1",
    };
  },
};
</script>

<style>
#textarea{
  height: 100%;
}
#textarea textarea {
    outline: none;
    border: 1px solid #999;
    padding: 8px 12px;
    width: 100%;
    height: 100%;
}
</style>
