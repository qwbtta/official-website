<template>
  <div id="productFunction">
    <Head :pageNum="page" />
    <div class="main">
      <div class="describe">
        <div class="words">
          <span class="title">Open-IM组成部分</span>
          <span>(1)Andorid、iOS集成ui库的sdk；</span>
          <span>(2)纯golang服务端代码及docker镜像； </span>
          <span>(3)对应的运营管理系统；</span>
        </div>
        <img src="@/assets/resources.png" alt="" />
      </div>
      <div class="introduce">
        <div class="cardCon">
          <div class="client">
            <div class="client-head">客户端</div>
            <div class="client-body">
              <div class="info">
                <div class="circle"></div>
                <span
                  >代码全部开源，可以随意修改，几行代码集成到各种应用中；</span
                >
              </div>
              <div class="info">
                <div class="circle"></div>
                <span>目前Andorid、iOS集成ui库，其他终端正在开发中； </span>
              </div>
              <div class="info">
                <div class="circle"></div>
                <span
                  >提供ui全托管能力，重点是会话、好友关系链、个人资料；
                </span>
              </div>
              <div class="info">
                <div class="circle"></div>
                <span>提供demo体验；</span>
              </div>
            </div>
          </div>

          <div class="server">
            <div class="server-head">服务端</div>
            <div class="server-body">
              <div class="info">
                <div class="circle"></div>
                <span
                  >纯golang实现，全部开源，三层分层架构，支持集群和微服务；
                </span>
              </div>
              <div class="info">
                <div class="circle"></div>
                <span
                  >使用gin、grpc开发框架，kafka、etcd等组件，mysql、mongodb、redis存储；</span
                >
              </div>
              <div class="info">
                <div class="circle"></div>
                <span
                  >支持跨平台部署，支持自行build，或者docker一键部署；
                </span>
              </div>
              <div class="info">
                <div class="circle"></div>
                <span>运维脚本完善，一键启停、检测； </span>
              </div>
              <div class="info">
                <div class="circle"></div>
                <span>日志系统完善，染色贯穿各模块； </span>
              </div>
            </div>
          </div>
          <div class="management">
            <div class="management-head">管理系统</div>
            <div class="management-body">
              <div class="info">
                <div class="circle"></div>
                <span>消息、用户统计报表，运营数据透视；</span>
              </div>
              <div class="info">
                <div class="circle"></div>
                <span>开发调试工具，快速检测系统，节省开发时间； </span>
              </div>
              <div class="info">
                <div class="circle"></div>
                <span>历史记录查询，运营利器，满足各种用途； </span>
              </div>
              <div class="info">
                <div class="circle"></div>
                <span
                  >封号、告警、系统消息推送等运营服务，维护系统健康运营；</span
                >
              </div>
            </div>
          </div>
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
    goFile() {
      this.$router.push("developerDocumentation");
    },
    goDownload() {
      this.$router.push("download");
    },
  },
  created() {
    this.page = 1;
  },
};
</script>

<style lang="scss" scoped>
html,
body,
#productFunction {
  height: 100%;

  .main {
    height: 100% !important;
    background-image: url("~@/assets/secondBackGround.png");
    background-size: 100% 100%;
    height: 100%;
    padding-top: 16rem;
    padding-bottom: 41rem;
    .describe {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .words {
        display: flex;
        flex-direction: column;
        span {
          font-size: 3rem;
          font-weight: 500;
          margin-top: 2.8rem;
        }
        .title {
          font-size: 5rem;
          font-weight: 600;
          margin-bottom: 3rem;
          margin-top: 0;
        }
      }
      img {
        margin-right: 5rem;
      }
    }
    .introduce {
      display: flex;
      justify-content: center;
      margin-top: 17rem;
      .cardCon {
        width: 150rem;
        display: flex;
        justify-content: space-evenly;
        .client {
          width: 29.2rem;
          min-height: 65rem;
          box-shadow: 0px 2px 20px 10px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          border-radius: 1rem;

          &-head {
            height: 14.8rem;
            background-image: linear-gradient(to bottom, #114893, #a6bee8);
            font-size: 3.4rem;
            font-weight: 600;
            color: #ffffff;
            text-align: center;
            line-height: 14.8rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
          }
          &-body {
            padding: 0 2.8rem;
            .info {
              display: flex;
              margin-top: 3.2rem;
              .circle {
                width: 1rem;
                height: 1rem;
                border-radius: 1rem;
                background-color: #83a2d4;
                min-width: 1rem;
                margin-top: 0.6rem;
              }
              span {
                font-size: 16px;
                font-weight: 400;
                color: #141414;
                margin-left: 0.6rem;
              }
            }
          }
        }
        .server {
          width: 29.2rem;
          min-height: 65rem;
          box-shadow: 0px 2px 20px 10px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          border-radius: 1rem;
          // margin-left: 16rem;
          &-head {
            height: 14.8rem;
            background-image: linear-gradient(to bottom, #4f47a3, #aaa6e8);
            font-size: 3.4rem;
            font-weight: 600;
            color: #ffffff;
            text-align: center;
            line-height: 14.8rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
          }
          &-body {
            padding: 0 2.8rem;
            .info {
              display: flex;
              margin-top: 3.2rem;
              .circle {
                width: 1rem;
                height: 1rem;
                border-radius: 1rem;
                background-color: #8b86d1;
                min-width: 1rem;
                margin-top: 0.6rem;
              }
              span {
                font-size: 16px;
                font-weight: 400;
                color: #141414;
                margin-left: 0.6rem;
              }
            }
          }
        }
        .management {
          width: 29.2rem;
          min-height: 65rem;
          box-shadow: 0px 2px 20px 10px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          border-radius: 1rem;
          // margin-left: 16rem;
          &-head {
            height: 14.8rem;
            background-image: linear-gradient(to bottom, #1b2b7f, #87a7e0);
            font-size: 3.4rem;
            font-weight: 600;
            color: #ffffff;
            text-align: center;
            line-height: 14.8rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
          }
          &-body {
            padding: 0 2.8rem;
            .info {
              display: flex;
              margin-top: 3.2rem;
              .circle {
                width: 1rem;
                height: 1rem;
                border-radius: 1rem;
                background-color: #556eb3;
                min-width: 1rem;
                margin-top: 0.6rem;
              }
              span {
                font-size: 16px;
                font-weight: 400;
                color: #141414;
                margin-left: 0.6rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>