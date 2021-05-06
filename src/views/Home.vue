<template>
  <div id="Home">
    <div class="head">
      <div class="headLeft">
        <img src="@/assets/logo.png" alt="" />
        <span>Open-IM</span>
      </div>
      <div class="headRight">
        <span @click="goProductFunction">产品功能</span>
        <div class="vertical-line"></div>
        <span>开发者文档</span>
        <div class="vertical-line"></div>
        <span>下载</span>
      </div>
    </div>
    <div class="main">
      <div class="Describe">
        <span>Open-IM</span>
        <span>Open source SDK for Instant Messaging</span>
        <span>开源、免费、通用的即时通讯组件</span>
        <div class="detailArea">
          <span
            >Open-IM借鉴并优化了微信的通讯架构，实现了高性能、轻量级、易扩展等重要特性。开发者通过集成Open-IM组件，并私有化部署服务端，可以将即时通讯、实时网络能力免费、快速集成到自身应用中，并确保业务数据的安全性和私密性。</span
          >
          <div class="buttonAren">
            <button class="Github">GitHub</button>
            <button class="start">开始体验</button>
          </div>
        </div>
      </div>
      <img src="@/assets/background.png" alt="" class="background" />
      <div class="featureDescription">
        <div class="item">
          <img src="@/assets/itemA.png" alt="" />
          <span>全开源永久免费</span>
          <span
            >代码全部开源，永久免费，包括客户端和服务端，并邀请全球技术极客参与建设。</span
          >
        </div>
        <div class="item">
          <img src="@/assets/itemB.png" alt="" />
          <span>易扩展</span>
          <span
            >服务端采用golang实现，采用“一切皆消息”的通讯模型，轻松实现自定义消息和扩展功能。</span
          >
        </div>
        <div class="item">
          <img src="@/assets/itemC.png" alt="" />
          <span>专业技术服务</span>
          <span
            >每个技术人员都承担技术客服的角色，强化社区，不提工单，及时解答。
          </span>
        </div>
        <div class="item">
          <img src="@/assets/itemD.png" alt="" />
          <span>高性能</span>
          <span
            >借鉴并优化微信通讯架构，抽象在线消息、离线消息、历史消息存储模型，分层治理模式，支持集群部署。</span
          >
        </div>
        <div class="item">
          <img src="@/assets/itemE.png" alt="" />
          <span>安全</span>
          <span
            >代码全部开源，不存在闭源商业版。服务端私有化部署，数据自我掌控。未来考虑加入全球最安全的signal加密协议。</span
          >
        </div>
        <div class="item">
          <img src="@/assets/itemF.png" alt="" />
          <span>全平台支持</span>
          <span
            >支持Andorid、
            iOS，正在开发Flutter、Unity、Web、小程序等平台，逐步覆盖所有平台。</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    goProductFunction() {
      this.$router.push("/productFunction");
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body,
#Home {
  height: 100%;
  min-width: 1900px;
  .head {
    height: 10rem;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .headLeft {
      display: flex;
      align-items: center;
      margin-left: 36rem;
      cursor: pointer;
      span {
        margin-left: 3rem;
        font-size: 4rem;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .headRight {
      display: flex;
      align-items: center;
      margin-right: 31.4rem;
      * {
        margin-right: 4.6rem;
      }
      span {
        font-size: 2.8rem;
        font-weight: 400;
        color: #ffffff;
        cursor: pointer;
      }
      .vertical-line {
        width: 0.5rem;
        height: 2.4rem;
        background: #ffffff;
      }
    }
  }
  .main {
    background: linear-gradient(to bottom, #0f0f2e, #090817);
    padding-bottom: 25rem;
    .Describe {
      padding: 0 36rem;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      span:nth-of-type(1) {
        font-size: 6rem;
        font-weight: 600;
        margin-top: 11.7rem;
      }
      span:nth-of-type(2) {
        font-size: 4rem;
        font-weight: 300;
      }
      span:nth-of-type(3) {
        font-size: 3.8rem;
        font-weight: 500;
        margin-top: 0.6rem;
      }
      .detailArea {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 3.7rem;
        span {
          font-size: 2.2rem;
          font-weight: 400;
          max-width: 66.4rem;
          margin-top: 0;
        }
        .buttonAren {
          display: flex;
          flex-direction: column;
          margin-right: 9.2rem;
          .Github {
            width: 17.8rem;
            height: 4.8rem;
            border-radius: 3.1rem;
            border: 2px solid #fff;
            color: #fff;
            font-size: 2rem;
            font-weight: 500;
            background-image: linear-gradient(#0f0f2e, #090817);
            cursor: pointer;
          }
          .Github:hover {
            background-image: linear-gradient(#1f1f58, #171436);
          }

          .start {
            width: 17.8rem;
            height: 4.8rem;
            background-color: #0c36f0;
            border-radius: 3.1rem;
            border: none;
            font-size: 2rem;
            font-weight: 500;
            color: #fff;
            margin-top: 2.3rem;
            cursor: pointer;
          }
          .start:hover {
            background-color: #3455e9;
          }
        }
      }
    }
    .background {
      pointer-events: none;
      margin-top: 5.3rem;
      margin-bottom: -6.3rem;
      max-width: 100%;
    }
    .featureDescription {
      display: flex;
      padding: 0 10rem 0 15.6rem;
      flex-wrap: wrap;

      .item {
        display: flex;
        flex-direction: column;
        color: #59e2ff;
        align-items: center;
        margin-left: 20.4rem;
        margin-top: 21.3rem;
        img {
          width: 12rem;
          height: 12.36rem;
        }
        span:nth-of-type(1) {
          font-size: 2.6rem;
          font-weight: 600;
          margin-top: 3.3rem;
        }
        span:nth-of-type(2) {
          font-size: 1.6rem;
          font-weight: 400;
          max-width: 26rem;
          margin-top: 2.1rem;
        }
      }
    }
  }
}
</style>