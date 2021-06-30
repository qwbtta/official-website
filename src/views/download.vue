<template>
  <div id="productFunction">
    <Head :pageNum="page" />
    <div class="main">
      <span class="title">体验Open-IM</span>
      <div class="codeArea">
        <div class="item">
          <div class="itemMain">
            <img src="@/assets/uni-app.png" alt="" class="platform-logo" />
            <span class="platform-description">uni-app Andorid</span>
            <span class="info">请扫码下载：</span>
            <img src="@/assets/uniCode.png" alt="" class="code" />
          </div>
          <span class="link"
            >开发者链接：<a
              href="https://github.com/OpenIMSDK/Open-IM-SDK-Uniapp"
              target="_blank"
            >
              https://github.com/OpenIMSDK/Open-IM-SDK-Uniapp
            </a></span
          >
        </div>
        <div class="item">
          <div class="itemMain">
            <img src="@/assets/Flutter.png" alt="" class="platform-logo" />
            <span class="platform-description">Flutter Andorid</span>
            <span class="info">请扫码下载：</span>
            <img src="@/assets/flutterCode.png" alt="" class="code" />
          </div>
          <span class="link"
            >开发者链接：<a
              href="https://github.com/OpenIMSDK/Open-IM-SDK-Flutter"
              target="_blank"
              >https://github.com/OpenIMSDK/Open-IM-SDK-Flutter</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  data() {
    return {
      page: 0,
    };
  },
  components: {
    Head,
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goProductFunction() {
      this.$router.push("/productFunction");
    },
    goFile() {
      this.$router.push("developerDocumentation");
    },
  },
  created() {
    this.page = 3;
  },
};
</script>

<style lang="scss" scoped>
html,
body,
#productFunction {
  height: 100%;
  a {
    color: #0288cc;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  .main {
    height: 100% !important;
    background-image: url("~@/assets/secondBackGround.png");
    background-size: 100% 100%;
    height: 100%;
    padding-top: 12rem;
    .title {
      font-size: 6rem;
      font-weight: 500;
      color: #333333;
      display: block;
      text-align: center;
    }
    .codeArea {
      display: flex;
      justify-content: space-evenly;
      margin-top: 8rem;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .itemMain {
          width: 27.5rem;
          height: 38.5rem;
          background: #ffffff;
          box-shadow: 0px 0px 2.8rem 0.6rem rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          .platform-logo {
            width: 8rem;
            height: 8rem;
            margin-top: 5.6rem;
          }
          .platform-description {
            font-size: 2rem;
            font-weight: 500;
            color: #333333;
            margin-top: 1rem;
          }
          .info {
            font-size: 1.4rem;
            font-weight: 400;
            color: #333333;
            margin-top: 1.2rem;
          }
          .code {
            width: 11rem;
            height: 11rem;
            margin-top: 1.4rem;
          }
        }
      }
      .link {
        font-size: 1.8rem;
        font-weight: 500;
        color: #0288cc;
        margin-top: 6.2rem;
      }
    }
  }
}
</style>