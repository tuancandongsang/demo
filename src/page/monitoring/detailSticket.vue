<template>
  <div id="detail-sticket">
    <div class="header">
      <h1>{{ sticket }}</h1>
      <div class="header-button">
        <ButtonVue content="Solved" btn_css="btn_green" />
        <ButtonVue content="Hold" btn_css="btn_green" />
        <ButtonVue content="Save" btn_css="btn_green" />
        <ButtonVue content="List" btn_css="button_second" />
      </div>
    </div>
    <div class="main">
      <div class="main-header">
        <div class="button">
          <ButtonVue
            @click="changeTap('Infomation')"
            content="Detect Infomation"
            :btn_css="tap === 'Infomation' ? 'btn_green' : 'button_second'"
          />
          <ButtonVue
            @click="changeTap('Action')"
            content="Action"
            :btn_css="tap === 'Action' ? 'btn_green' : 'button_second'"
          />
        </div>
      </div>
      <div class="main-container">
        <KeepAlive>
          <component :is="tap" :sticket="sticket"></component>
        </KeepAlive>
      </div>
    </div>
    <Modal
      :visible="visible"
      :textOpenModal="textOpenModal"
      :btn_css="btn_css"
      ref="modal"
    >
      <h1>tuancan</h1>
    </Modal>
  </div>
</template>

<script>
import ButtonVue from "../../components/Button/Button.vue";
import Action from "./components/Action.vue";
import Infomation from "./components/Infomation.vue";
import Modal from "../../components/Modal/Modal.vue";
// import { mapGetters, mapMutations } from "vuex";
export default {
  props: ["sticket"],
  components: { ButtonVue, Action, Infomation, Modal },
  data() {
    return {
      tap: "Infomation",
      visible: false,
      textOpenModal: "aaaaaaaa",
      btn_css: "button_none",
    };
  },
  computed: {
    // ...mapGetters(["nameTicket"]),
    tap() {
      return this.tap;
    },
  },
  created() {
    console.log(this.$route);
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // react to route changes...
      }
    );
  },
  updated() {
    // console.log(this.$route)
  },
  methods: {
    // ...mapMutations(['CHANGE_NAME_STICKET'])
    changeTap(tap) {
      // console.log(tap);
      this.tap = tap;
    },
  },
};
</script>

<style lang="scss" scoped>
#detail-sticket {
  margin-top: 30px;
  .header {
    display: flex;
    justify-content: space-between;
    &-button {
      gap: 20px;
      display: flex;
      button {
        padding: 8px 20px;
      }
    }
  }
  .main {
    &-header {
      width: 100%;
      background-color: #e8e8e8;
      .button {
        padding: 10px 0;
        width: 30%;
        display: flex;
        gap: 20px;
      }
    }
  }
}
</style>
