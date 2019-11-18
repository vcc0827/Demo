<template>
  <div class="login-page">
    <div name="form-fade">
      <section class="form-container">
        <div class="form-head">
          <img :src="logo" alt="logo图片" class="logo" />
          <span class="tittle">标题</span>
        </div>
        <form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          class="login-form"
        >
          <!-- 用户名 -->
          <form-item prop="username" class="login-item">
            <span class="loginTips"><icon-svg icon-class="iconUser"/></span>
            <input
              type="text"
              placeholder="请输入用户名"
              class="area"
              v-model="loginForm.username"
              @keyup.enter="submitForm('loginForm')"
            />
          </form-item>
          <!-- 密码 -->
          <form-item prop="password" class="login-tiem">
            <span class="loginTips"><icon-svg icon-class="iconPass"/></span>
            <input
              type="password"
              placeholder="请输入密码"
              class="area"
              v-model="loginForm.password"
              @keyup.enter="submitForm('loginForm')"
            />
          </form-item>
          <!-- 登录按钮 -->
          <form-item>
            <button
              type="primary"
              @click="submitForm('loginForm')"
              class="submit-btn"
            >
              登录
            </button>
          </form-item>
        </form>
        <!-- tips -->
        <div class="tip-area">
          <p>没有账号请先注册</p>
        </div>
        <!-- login by other ways -->
        <div class="other-way">
          <p class="title">第三方登录</p>
          <ul class="rflex">
            <li @click="loginByWechat">
              <icon-svg icon-class="icon-wechat" />
            </li>
            <li @click="loginByWeibo">
              <icon-svg icon-class="icon-weibo" />
            </li>
            <li @click="loginByQQ">
              <icon-svg icon-class="icon-qq" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// 加{}的是通过export方式导出 可以直接导出变量表达式
//而export 可以有多个;export default只能有一个
import logoImg from '@/assets/logo.png'
// import {login} from '@api/user'

export default {
  data() {
    return {
      logo: logoImg,
      loginForm: {
        username: 'admin',
        password: '12345'
      },
      rules: {
        username: [
          { required: true, message: '还没有输入用户名', trigger: 'blur' },
          {
            min: 6,
            max: 10,
            message: '密码长度6至10个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '还没有输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    showMessage(type, message) {
      this.$message({
        type: type,
        message: message
      })
    },
    // 验证
    submitForm(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          let userinfo = this.loginForm
          login(userinfo).then(res => {
            let userList = res.data.userList
            setToken('Token', userList.token)
            this.$router.push({ path: '/' })
            this.$store.dispatch('initLeftMenu') //保持左侧目录打开 dispatch异步操作 向后台提交数据
          })
        }
      })
    },
    // 第三方登录
    loginByWechat() {},
    loginByWeibo() {},
    loginByQQ() {}
  },
  mounted() {}
}
</script>

<style lang="less" scoped></style>
