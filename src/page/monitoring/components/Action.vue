<template>
  <div id="Action">
    <div class="header">
      <img src="	https://www.smsscenter.com/img/common/ico-title.png" alt="" />
      <h1>Comment</h1>
    </div>
    <div class="main">
      <div class="chat">
        <ul>
          <li class="right">
            <span
              >[2023-04-19 10:51:02] (김현진 / hyunjin.kim78@secui.com)</span
            >
          </li>
          <li class="right">
            <span
              >[2023-04-19 10:51:02] (김현진 / hyunjin.kim78@secui.com)</span
            >
          </li>
          <li class="right">
            <span
              >[2023-04-19 10:51:02] (김현진 / hyunjin.kim78@secui.com)</span
            >
          </li>
          <li class="left">
            <span
              >[2023-04-24 10:24:22] (huyennht /
              huyen.nguyenhoangthu@imipgroup.com)</span
            >
          </li>
        </ul>
      </div>
      <div class="comment">
        <div class="textarea">
          <InputTextarea placeholder="placeholder" />
        </div>
        <div class="button">
          <Button content="Contents registrations" btn_css="btn_green" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../components/Button/Button.vue";
import InputTextarea from "../../../components/input/InputTextarea.vue";

export default {
  components: { InputTextarea, Button },
};
</script>
<style scoped lang="scss">
#Action {
  .header {
    display: flex;
    // height: 20px;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    padding-left: 12px;
    padding: 12px 12px 0;
    border-bottom: 2px solid #111;
    background-color: #fff;
    img {
      width: 20px;
    }
  }
  .main {
    .chat {
      padding: 12px;
      background-color: #fff;

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        .right {
          align-self: flex-end;
          background-color: #feffd2;
        }
        .left {
          background-color: #f2f2f2;
        }
      }
      li {
        width: 50%;
        margin: 4px 0;
        border-radius: 8px;
        span {
          padding: 8px;
          border-radius: 4px;
          display: block;
          font-size: 1rem;
        }
      }
    }
    .comment {
      display: flex;
      height: 150px;
      border: 1px solid #999;
      padding: 20px;
      .textarea {
        flex: 2;
        font-size: 1rem;
        border-radius: 8px;
        overflow: hidden;
      }
      .button {
        flex: 1;
        height: 100%;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
