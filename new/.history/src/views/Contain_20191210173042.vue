<template>
  <div class="main-page">
    <div class="main-top">
      <div style="color:white;font-size:26px;text-algin:center;">
        第三套中小学生前端例题
      </div>
    </div>
    <div class="main-bottom">
      <div
        id="main-left"
        class="main-left"
        :class="{ 'mian-left-active': !isHideMenu }"
      >
        <!-- 下拉菜单 -->
        <Menu
          ref="menu"
          @on-select="selectMenuItem"
          :active-name="activeName"
          :open-names="openNames"
          mode="vertical"
          width="100%"
          theme="dark"
        >
          <!-- 一级菜单 -->
          <Submenu name="0">
            <template slot="title">
              <Icon type="ios-paper"></Icon>Js基础
            </template>
            <MenuItem name="JsBase">网站链接</MenuItem>
          </Submenu>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              Echarts
            </template>
            <MenuItem name="">line</MenuItem>
            <MenuItem name="energy">bar</MenuItem>
            <MenuItem name="circle">pie</MenuItem>
            <MenuItem name="pie">3dpie</MenuItem>
            <MenuItem name="Hex">radar</MenuItem>
            <Submenu name="echart">
              <template slot="title">
                <Icon type="ios-paper"></Icon> 二级菜单
              </template>
              <MenuItem name="notyet">n1</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-paper"></Icon>Moment
            </template>
            <MenuItem name="moment">moment</MenuItem>
            <MenuItem name="notyet">line</MenuItem>
            <MenuItem name="notyet">line</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-paper"></Icon>Json应用
            </template>
            <MenuItem name="jsons">jsons</MenuItem>
            <MenuItem name="notyet">line</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="main-right" :class="{ 'main-right-small': !isHideMenu }">
        <router-view></router-view>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
// <link type='text/css' rel='styleSheet' href='../style/instagram.css'/>
// <link type='text/css' rel='styleSheet' href='../style/instagram.min.css'/>
</script>
<script>
export default {
  name: 'mainPage',
  data() {
    return {
      isHideMenu: false,
      openNames: [],
      activeName: 'jsbase'
    }
  },
  watch: {
    // 重定向路由 的作用是防止有人未登录就进入其他没有权限的页面
    // $route: 'redirectRoute'
  },
  methods: {
    selectMenuItem(name) {
      if (name != '') {
        this.$router.push('/' + name)
      } else {
        this.$router.push('/')
      }
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.main-page {
  width: 1920px;
  height: 1080px;
  overflow-y: auto;
  background-color: #ccc;
  .main-top {
    width: 100%;
    height: 10%;
    background-color: #ddd;
  }
  .main-bottom {
    width: 100%;
    height: 90%;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .main-left {
      width: 10%;
      height: 100%;
      background-color: #ddd;
    }
    .main-right {
      position: absolute;
      width: 88%;
      height: 88%;
      left: 11%;
      background-color: #eee;
    }
    .main-right-small {
      width: calc(100% - 240px);
      left: 11%;
    }
  }
  .mybox {
    width: 300px;
    height: 300px;
    border: 1px dashed #eee;
    background-color: blue;
  }
}
</style>
