<template>
  <div id="table-ticket">
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'date'">
          <span> Public Date </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'date'">
          <span>
            {{ record.date }}
          </span>
        </template>

        <template v-if="column.key === 'ticket'">
          <router-link :to="`/monitoring/ticket/${nameTicket}`">
            <a @click="routeSticketByName(record.ticket)">
              {{ record.ticket }}
            </a>
          </router-link>
        </template>

        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="
                tag === 'loser'
                  ? 'volcano'
                  : tag.length > 5
                  ? 'geekblue'
                  : 'green'
              "
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a>Invite 一 {{ record.date }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              More actions
              <down-outlined />
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
import { DownOutlined } from "@ant-design/icons-vue";
// import { mapMutations } from "vuex";
export default {
  components: {
    DownOutlined,
  },
  data() {
    return {
      columns: [
        {
          date: "Public Date",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Company Name",
          dataIndex: "Company",
          key: "Company",
        },
        {
          title: "Sticket Title",
          dataIndex: "ticket",
          key: "ticket",
        },
        {
          title: "Status",
          key: "tags",
          dataIndex: "tags",
        },
        {
          title: "Monitoring Type",
          key: "action",
        },
      ],
      data: [
        {
          key: "1",
          date: "Secui",
          Company: "secui_test",
          ticket: "jira",
          tags: ["process"],
        },
        {
          key: "2",
          date: "Sam Sung",
          Company: "secui_test",
          ticket: "secui",
          tags: ["process"],
        },
        {
          key: "3",
          date: "Potal",
          Company: "secui_test",
          ticket: "SamSung",
          tags: ["process"],
        },
      ],
      nameTicket: undefined,
      currentPath: undefined,
    };
  },
  mounted() {
    console.log(' this.$route.path',  this.$route);
    this.currentPath = this.$route.path;
  },
  methods: {
    routeSticketByName(route) {
      this.nameTicket = route;
      //   this.CHANGE_NAME_STICKET(route);
    },
    // ...mapMutations(["CHANGE_NAME_STICKET"]),
  },
};
</script>
<style scoped lang="scss">
#table-ticket {
  .link-ticket {
    color: red;
  }
}
</style>
