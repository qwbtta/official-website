<template>
  <div class="head">
    <div class="headLeft" @click="goHome(1)">
      <img src="@/assets/logo.png" alt="" />
      <span>Open-IM</span>
    </div>
    <div class="headRight">
      <span :class="page == 1 ? 'actived' : ''" @click="goProductFunction(2)"
        >产品功能</span
      >
      <div class="vertical-line"></div>
      <span :class="page == 2 ? 'actived' : ''" @click="goFile(3)"
        >开发者文档</span
      >
      <div class="vertical-line"></div>
      <span :class="page == 3 ? 'actived' : ''" @click="goDownload(4)"
        >下载</span
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["pageNum"],
  data() {
    return {
      page: 0,
    };
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
    goDownload() {
      this.$router.push("download");
    },
  },
  created() {
    console.log(this.pageNum, "页数");
    this.page = this.pageNum;
  },
};
</script>

<style lang="scss" scoped>
.head {
  height: 10rem;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .headLeft {
    display: flex;
    align-items: center;
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
</style>