<template>
  <div class="container">
    <div class="container-login">
      <div class="login-form">
        <h2 class="login-form-title">SAMSUNG SECUI</h2>
        <div class="input-form">
          <div class="input-form-user">
            <label for=""><i class="fa-solid fa-user"></i></label>
            <input type="text" placeholder="ID" v-model="user.name" />
          </div>
          <div class="input-form-user">
            <label for="" @click="tongglePassword" v-if="password"
              ><i class="fa-solid fa-eye-slash"></i
            ></label>
            <label for="" @click="tongglePassword" v-else
              ><i class="fa-solid fa-eye"></i
            ></label>
            <input
              :type="password ? 'password' : 'text'"
              placeholder="PASSWORD"
              v-model="user.password"
            />
          </div>
          <div class="input-form-language">
            <select id="cars" @change="onChangeLanguage" v-model="langValue">
              <option value="en" :selected="langValue == 'en'">English</option>
              <option value="kr" :selected="langValue == 'kr'">한국인</option>
            </select>
          </div>
        </div>
        <div class="login-form-btn">
          <button @click="handleSubmit">Login</button>
          <!-- <Button content="Log In"  @click="handleSubmit"/> -->
          <!-- <button @click="handleSubmit">
            {{ $tc('login') }}
          </button> -->
        </div>
        <p class="error login-form-message" v-if="messageError">
          {{ $tc("errorLogin") }}
        </p>
        <p class="success login-form-message" v-if="messageSuccess">
          {{ $tc("successLogin") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Button from '../../components/Button/Button.vue'
// import { i18n } from '@/config/setup-i18n';
// import { DEFAULT_LANG } from '@/constants/index';
// import "./Login.scss";
// import { setJwtToken } from '@/utils/helpers';

export default {
  // components:{Button},
  data: () => {
    return {
      // langValue: DEFAULT_LANG,
      user: {
        name: "",
        password: "",
      },
      // messageError: false,
      // messageSuccess: false,
      // password: true,
    };
  },
  methods: {
    tongglePassword() {
      this.password = !this.password;
    },
    onChangeLanguage() {
      i18n.global.locale = this.langValue;
    },
    handleSubmit() {
      if (this.user.name == "") {
        return (this.messageError = true);
      } else if (this.user.password == "") {
        return (this.messageError = true);
      } else {
        this.messageError = false;
        this.messageSuccess = true;
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/styles/index.scss";

.container {
  @include flexCenter;
  background: $bg-app;
  .container-login {
    background-image: url("../../assets/image/login/login-background.jpg");
    width: 70vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    @include flexCenter;
    position: relative;
    min-height: 375px;
    min-width: 320px;

    .login-form {
      width: 70%;
      @include flexCenter;
      flex-direction: column;

      &-title {
        color: $text-logo;
        margin-bottom: 100px;
        font-size: 4rem;
        align-self: center;
      }

      .input-form {
        display: flex;
        flex-direction: column;

        &-user {
          background-color: $bg-input;
          margin: 4px 0px;
          padding: 8px 12px;
          display: flex;
          border-radius: 5px;

          input {
            outline: none;
            border: none;
            flex-grow: 1;
            max-width: 95%;
            padding-left: 10px;
          }
        }

        &-language {
          align-self: flex-end;
          margin-top: 8px;

          select {
            border-radius: 4px;
            outline: none;
            border: none;
            padding: 4px 12px;
            cursor: pointer;

            option {
              padding: 4px 12px;
              cursor: pointer;
            }
          }
        }
      }

      &-btn {
        align-self: center;
        width: 200px;
        margin-top: 100px;
        cursor: pointer;

        button {
          // @include btn($bg-app, $text);

          &:hover {
            background-color: $btn-error;
          }
        }
      }

      .error {
        color: $text-error;
      }

      .success {
        color: $text-success;
      }

      &-message {
        font-weight: 600px;
        font-size: 2rem;
        align-self: center;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, 50%);
      }
    }

    @media screen and (max-width: 1440px) {
      width: 100vw;

      .login-form {
        &-title {
          font-size: 4rem;
        }

        .input-form {
          &-user {
            font-size: 2rem;

            input {
              padding-left: 10px;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1024px) {
      .login-form {
        width: 80%;

        .input-form {
          &-user {
            font-size: 1.5rem;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      .login-form {
        &-title {
          font-size: 3rem;
          margin-bottom: 80px;

          @media screen and (max-width: 570px) {
            font-size: 2rem;
          }
        }

        .input-form {
          &-user {
            font-size: 1.5rem;
          }
        }
      }
    }

    @media screen and (max-width: 420px) {
      .login-form {
        &-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .input-form {
          &-user {
            font-size: 1rem;
          }
        }

        &-message {
          font-size: 1rem;
        }
      }
    }
  }
}

@media screen and (max-height: 500px) {
  .container {
    align-items: flex-start;

    .container-login {
      .login-form {
        margin-top: 10px;

        &-title {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .input-form {
          &-user {
            font-size: 1rem;
          }
        }

        &-btn {
          margin-top: 20px;
        }

        &-message {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
