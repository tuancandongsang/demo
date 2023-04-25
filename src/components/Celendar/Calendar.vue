<template>
  <a-space direction="vertical">
    <a-date-picker
      v-model:value="value"
      :format="dateFormat"
      @change="onChange"
    />
  </a-space>
</template>
<script>
import { timeChangeString, dateFormat } from "./dateMoment";
export default {
  data() {
    return {
      value: dateFormat,
      time: timeChangeString,
    };
  },

  onChange(date, dateString) {},
};
</script>
