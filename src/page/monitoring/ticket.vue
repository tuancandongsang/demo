<template>
  <div id="ticket">
    <div>
      <div>road map ticket</div>
      <div>search ticket</div>
      <div class="table-ticket">
        <TableTicket />
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import TableTicket from "./components/tableTicket.vue";
export default {
  components: { TableTicket },
};
</script>

<style></style>
