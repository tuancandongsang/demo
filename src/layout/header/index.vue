<template>
  <div id="header">
    <div class="nav">
      <span><unordered-list-outlined :style="{ fontSize: '20px' }" /></span>
      <span><home-outlined :style="{ fontSize: '16px' }" /></span>
      <span v-for="item in levelList" :key="item.name" class="nav-text">
        <right-outlined /> {{ item.meta.title }}
      </span>
    </div>
    <div class="profile">
      <span class="reload" @click="reload"><undo-outlined /></span>
      <span class="nav-text">tuancandongsang</span>
      <div id="components-dropdown-demo-placement">
        <a-dropdown placement="bottomRight">
          <span class="avatar">
            <img
              src="https://symbols.vn/wp-content/uploads/2021/11/Icon-meo-dang-yeu.jpg"
              alt=""
            />
          </span>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <span>Change My Infor</span>
              </a-menu-item>
              <a-menu-item>
                <span @click="logout">Logout</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UnorderedListOutlined,
  HomeOutlined,
  RightOutlined,
  UndoOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    UnorderedListOutlined,
    HomeOutlined,
    RightOutlined,
    UndoOutlined,
  },

  data() {
    return {
      levelList: null,
    };
  },
  created() {
    this.getBreadcrumb();
    this.$watch(
      () => this.$route,
      (toParams, previousParams) => {
        this.getBreadcrumb();
      }
    );
  },
  methods: {
    getBreadcrumb() {
      this.levelList = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
    },
    reload() {
      location.reload();
    },
    logout() {
      setTimeout(() => this.$router.push("/login"), 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 8px 30px -20px;
  height: 60px;
  display: flex;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 200px;
  width: calc(100% - 200px);
  z-index: 1;
  .nav {
    font-size: 1.5rem;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .profile {
    margin-right: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    .avatar {
      width: 30px;
      border-radius: 50px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
  .nav-text {
    font-size: 1rem;
    font-weight: 700;
  }
  span {
    display: inline-block;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
