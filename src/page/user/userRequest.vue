<template>
  <div id="user-request">
    <div class="input-search">
      <div class="input-search_item">
        <div class="input-search_item-label">Address book Name</div>
        <div class="input-search_item-input">
          <Input
            placeholder="Name"
            type=""
            cssColorBorder="greenBorder"
            cssColor="greenColor"
            :disabled="false"
          />
        </div>
      </div>
      <div class="input-search_item">
        <div class="input-search_item-label">Address book Name</div>
        <div class="input-search_item-input">
          <Input
            placeholder="Name"
            type=""
            cssColorBorder="greenBorder"
            cssColor="greenColor"
            :disabled="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../../components/input/Input.vue";
export default {
  components: { Input },
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
#user-request {
  .input-search {
    padding: 20px 40px;
    background-color: $bg-default;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    gap: 40px;
    &_item {
      display: flex;
      align-items: center;
      gap: 30px;
      flex: 1;
      &-label {
        font-size: 1rem;
      }
      &-input {
        flex: 1;
      }
    }
  }
}
</style>
