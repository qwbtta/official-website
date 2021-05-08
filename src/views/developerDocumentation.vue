<template>
  <div id="developerDocumentation">
    <div class="head">
      <div class="headLeft" @click="goHome">
        <img src="@/assets/logo.png" alt="" />
        <span>Open-IM</span>
      </div>
      <div class="headRight">
        <span @click="goProductFunction">产品功能</span>
        <div class="vertical-line"></div>
        <span class="actived">开发者文档</span>
        <div class="vertical-line"></div>
        <span>下载</span>
      </div>
    </div>
    <div class="main">
      <el-container style="width: 100%; min-height: 800px">
        <el-aside width="300px">
          <el-menu active-text-color="#409EFF" default-active="1-1">
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-s-home"></i>
                <span>Open-IM介绍</span>
              </template>
              <el-menu-item index="1-1" @click="show1">简介</el-menu-item>
              <el-menu-item index="1-2" @click="show2">产品架构</el-menu-item>
              <el-menu-item index="1-3" @click="show3"
                >产品功能更新</el-menu-item
              >
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <i class="el-icon-truck"></i>
                <span>快速开始</span>
              </template>
              <el-menu-item index="2-1" @click="show4">服务端部署</el-menu-item>
              <el-menu-item index="2-2" @click="show5"
                >iOS集成详解</el-menu-item
              >
              <el-menu-item index="2-3" @click="show6"
                >Android集成详解</el-menu-item
              >
            </el-submenu>

            <el-menu-item index="3" @click="show7">
              <i class="el-icon-s-tools"></i>
              <template #title>服务端架构</template> </el-menu-item
            ><el-menu-item index="4">
              <i class="el-icon-user-solid"></i>
              <template #title>客户端架构</template> </el-menu-item
            ><el-menu-item index="5">
              <i class="el-icon-message-solid"></i>
              <template #title>状态码</template>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-phone"></i>
              <template #title>联系方式</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main
          ><iframe :src="iframeSrc" frameborder="0" class="iframeStyle"></iframe
        ></el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: "htmlFile/introduction.html",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goProductFunction() {
      this.$router.push("/productFunction");
    },
    show1() {
      this.iframeSrc = "htmlFile/introduction.html";
    },
    show2() {
      this.iframeSrc = "htmlFile/productArchitecture.html";
    },
    show3() {
      this.iframeSrc = "htmlFile/productUpdate.html";
    },
    show7() {
      this.iframeSrc = "htmlFile/serverArchitecture.html";
    },
  },
};
</script>

<style lang="scss" scoped>
#developerDocumentation {
  height: 100%;
  min-width: 1920px;
  overflow: hidden !important;
  .el-menu {
    min-height: 800px;
  }

  ::v-deep .el-submenu__title:hover {
    background-color: #ecf5ff !important;
  }

  .el-menu-item.is-active {
    background-color: #ecf5ff !important;
  }
  .el-menu-item:hover {
    background-color: #ecf5ff !important;
  }
  .el-main {
    overflow: hidden;
  }
  .head {
    width: 1920px;
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
      .actived {
        color: #2fb3ff;
      }
    }
  }
  .main {
    height: 100% !important;
    .iframeStyle {
      width: 100%;
      min-height: 800px;
    }
  }
}
</style>