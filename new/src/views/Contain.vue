<template>
  <div class="main-page">
    <div class="main-top">↑</div>
    <div class="main-bottom">
      <div
        id="main-left"
        class="main-left"
        :class="{ 'mian-left-active': !isHideMenu }"
      >
        <!-- 下拉菜单 -->
        <Menu
          class="menu"
          name="menu1"
          @on-select="selectMenuItem"
          :active-name="activeNames"
          :open-names="activeNames"
          mode="vertical"
          width="100%"
        >
          <!-- 一级菜单 -->
          <Submenu name="subm">
            <!-- 一级菜单标题 -->
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              试验区↓
            </template>
            <!-- 二级菜单 -->
            <Submenu name="option1">
              <!-- 二级菜单标题 -->
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                Echarts
              </template>
              <MenuItem name="">line</MenuItem>
              <MenuItem name="hex">hex</MenuItem>
              <MenuItem name="pie">pie</MenuItem>
            </Submenu>
            <MenuItem name="left">left Page</MenuItem>
            <MenuItem name="option3">选项三</MenuItem>
            <MenuItem name="option4">选项四</MenuItem>
            <MenuItem name="option5">选项五</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="main-right" :class="{ 'main-right-small': !isHideMenu }">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data() {
    return {
      isHideMenu: false,
      openNames: [],
      activeNames: '/'
    }
  },
  watch: {
    $route: 'redirectRoute'
  },
  methods: {
    getToken() {},

    selectMenuItem(name) {
      // 当name不为空时 跳转到/name指向的页面  *name要和跳转路由名一致
      if (name !== '') {
        this.$router.push('/' + name)
      } else {
        alert('页面未完成')
        console.log('not now!')
      }
    },
    // 路由重定位
    redirectRoute() {
      console.log('got it')
      let currentPath = this.$router.currentRoute.path
      switch (currentPath) {
        case '/left':
          this.openNames = ['menu1']
          this.$router.push('/left')
          this.activeNames = 'left'
          break
        case '/hex':
          this.openNames = ['menu1']
          this.$router.push('/hex')
          this.activeNames = 'hex'
          break
        case '/pie':
          this.openNames = ['menu1']
          this.$router.push('/pie')
          this.activeNames = 'pie'
          break
        default: {
          this.openNames = ['menu1']
          this.$router.push('/')
          this.activeNames = ''
          break
        }
      }
    }
  },
  mounted() {
    this.redirectRoute()
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.main-page {
  width: 1080px;
  height: 768px;
  .main-top {
    width: 100%;
    height: calc(100% - 90%);
    border: 1px dashed black;
    background-color: #ddd;
  }
  .main-bottom {
    height: calc(100% - 10%);
    width:100%;
    .main-left {
      width: calc(100% - 85%);
      height: calc(100% - 10%);
      border: 1px dashed black;
      background-color: #ddd;
    }
    .main-right {
      position: absolute;
      left: calc(100% - 90%);
      top: calc(100% - 95%);
      width: calc(100% - 15%);
     height: calc(100% - 10%);
      background-color: #eee;
      border: 1px dashed black;
    }
  }
}
</style>
