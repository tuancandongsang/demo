<!-- 
<CheckBox value="value" id="id" label="label" />
 -->
<template>
  <div id="check-box">
    <input type="checkbox" :id="id" :value="value" v-model="checkBox" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: ["value", "id", "label"],
  data() {
    return {
      checkBox: [],
    };
  },
};
</script>

<style>
#check-box {
  font-size: 1rem;
}
#check-box input {
  margin-right: 4px;
}
</style>
