<template>
  <div class="main-page">
    <div class="main-top">
      <div style="color:white;font-size:26px">第三套中小学生前端例题</div>
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
          <Submenu name="1">
            <!-- 一级菜单标题 -->
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              菜单区域↓
            </template>
            <MenuItem name="circle">circle</MenuItem>
            <MenuItem name="energy">energyBar</MenuItem>
            <MenuItem name="Hex">Hex</MenuItem>
            <MenuItem name="">echart</MenuItem>
            <Submenu name="echart">
              <template slot="title">
                <Icon type="ios-paper"></Icon> 二级菜单
              </template>
              <MenuItem name="n1">n1</MenuItem>
              <MenuItem name="n2">n2</MenuItem>
              <MenuItem name="n3">n3</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-paper"></Icon>同级菜单
            </template>
            <MenuItem name="n1">n1</MenuItem>
            <MenuItem name="n2">n2</MenuItem>
            <MenuItem name="n3">n3</MenuItem>
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
      activeName: 'circle'
    }
  },
  watch: {
    // 重定向路由
    $route: 'redirectRoute'
  },
  methods: {
    selectMenuItem(name) {
      if (name != '') {
        this.$router.push('/' + name)
      } else {
        this.$router.push('/')
      }
    },
    // 路由重定向
    redirectRoute() {
      let currentPath = this.$router.currentRoute.path
      switch (currentPath) {
        case '/circle':
          this.openNames = ['1']
          this.$router.push('/circle')
          this.activeNames = 'circle'
          break
        case '/energyBar':
          this.openNames = ['1']
          this.$router.push('/energyBar')
          this.activeNames = 'energyBar'
          break
        case '/Hex':
          this.openNames = ['1']
          this.$router.push('/Hex')
          this.activeNames = 'Hex'
          break
        case '/echart':
          this.openNames = ['1']
          this.$router.push('/echart')
          this.activeNames = 'echart'
          break
      }
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
        this.$refs.menu.updateActiveName()
      })
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
}
</style>
