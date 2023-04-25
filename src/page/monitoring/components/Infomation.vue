<template>
  <div id="Infomation">
    <div class="header">
      <img src="	https://www.smsscenter.com/img/common/ico-title.png" alt="" />
      <h1>Basic Information</h1>
    </div>
    <div class="table">
      <table>
        <tr>
          <th>Ticket ID</th>
          <td><span class="td_full-padding">TCK230419000013</span></td>
          <th>Status</th>
          <td>
            <div>
              <SelectOptionBaseVue
                placeholder="Process"
                :options="options"
                :disabled="true"
              />
            </div>
          </td>
        </tr>
        <tr>
          <th>Ticket Title <span class="requied-red">*</span></th>
          <td colspan="3">{{ sticket }}</td>
        </tr>
        <tr>
          <th>Detection Time <span class="requied-red">*</span></th>
          <td>
            <div>
              <CalendarVue />
            </div>
          </td>
          <th>End Time</th>
          <td>
            <div>
              <CalendarVue />
            </div>
          </td>
        </tr>
        <tr>
          <th>Company</th>
          <td><span class="td_full-padding">secui_test</span></td>
          <th>Monitoring Type <span class="requied-red">*</span></th>
          <td>
            <SelectOptionBaseVue
              placeholder="WebSite"
              :options="options"
              :disabled="true"
            />
          </td>
        </tr>
        <tr>
          <th>Monitoring Manager</th>
          <td><span class="td_full-padding">김현진</span></td>
          <th>Urgency Level <span class="requied-red">*</span></th>
          <td>
            <SelectOptionBaseVue
              placeholder="URGENT"
              :options="options"
              :disabled="true"
            />
          </td>
        </tr>
        <tr>
          <th>Event Source <span class="requied-red">*</span></th>
          <td>
            <div class="table-checkbox">
              <CheckBox value="Firewall" id="Firewall" label="Firewall" />
              <CheckBox value="N-IDS/IPS" id="N-IDS/IPS" label="N-IDS/IPS" />
              <CheckBox
                value="WebFirewall"
                id="WebFirewall"
                label="Web Firewall"
              />
              <CheckBox value="H-IDS" id="H-IDS" label="H-IDS" />
              <CheckBox value="WebShell" id="WebShell" label="Web Shell" />
              <CheckBox value="WebLog" id="WebLog" label="Web Log" />
              <CheckBox value="Malware" id="Malware" label="Malware" />
              <CheckBox value="DDoS" id="DDoS" label="DDoS" />
              <CheckBox value="VPN" id="VPN" label="VPN" />
              <CheckBox value="ETC" id="ETC" label="ETC" />
            </div>
          </td>
          <th>Attack Country</th>
          <td>
            <SelectOptionBaseVue
              placeholder="Selected"
              :options="options"
              :disabled="true"
            />
          </td>
        </tr>
        <tr>
          <th>Host Name</th>
          <td>
            <div>
              <SelectOptionBaseVue
                placeholder="Selected"
                :options="options"
                :disabled="true"
              />
              <InputTextarea placeholder="placeholder" />
            </div>
          </td>
          <th>Monitoring</th>
          <td>
            <div>
              <SelectOptionBaseVue
                placeholder="Selected"
                :options="options"
                :disabled="true"
              />
              <InputTextarea placeholder="placeholder" />
            </div>
          </td>
        </tr>
        <tr>
          <th>SRC IP</th>
          <td>secui_test</td>
          <th>Monitoring</th>
          <td>DST IP</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import CalendarVue from "../../../components/Celendar/Calendar.vue";
import SelectOptionBaseVue from "../../../components/SelectOption/SelectOptionBase.vue";
import CheckBox from "../../../components/CheckBox/CheckBox.vue";
import InputTextarea from "../../../components/input/InputTextarea.vue";
export default {
  components: { SelectOptionBaseVue, CalendarVue, CheckBox, InputTextarea },
  props: ["sticket"],
  data() {
    return {
      options: [
        {
          value: "Process",
          label: "Process",
        },
        {
          value: "Error",
          label: "Error",
        },
        {
          value: "Pending",
          label: "Pending",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/index.scss";
#Infomation {
  width: 100%;
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
  .table {
    width: 100%;
    table {
      width: 100%;
      font-size: 1rem;
      th,
      td {
        border: 1px solid #999;
      }
      th {
        padding: 8px 12px;
        text-align: start;
        width: 15%;
      }
      td {
        padding: 8px;
        background-color: #fff;
        width: 35%;
      }
      .td_full-padding {
        background-color: $bg-app;
        display: block;
        padding: 8px;
      }
      .table-checkbox {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        font-size: 1.5rem;
      }
    }
    .requied-red {
      color: red;
    }
  }
}
</style>
