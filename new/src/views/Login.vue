<template>
  <div class="login_page">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
			     <div class='titleArea rflex'>
					<img class="logo" :src="logo" alt="标题图片">
					<span class='title'>这是标题</span>
				</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
					<el-form-item prop="username" class="login-item">
					    <span class="loginTips"><icon-svg icon-class="iconuser" /></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')"  class="area" type="text" placeholder="用户名" v-model="loginForm.username" ></el-input>
					</el-form-item>
					<el-form-item prop="password" class="login-item"> 
					    <span class="loginTips"><icon-svg icon-class="iconLock" /></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')" class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">SIGN IN</el-button>
				  	</el-form-item>
					<div class="sanFangArea">
						<p class="title">第三方账号登录</p>
						<ul class="rflex">
							<li @click="loginByWechat">
						       <icon-svg icon-class="iconwechat" />
							</li>
							<li>
							    <icon-svg icon-class="iconweibo" />
							</li>
							<li>
							    <icon-svg icon-class="iconGithub" />
							</li>
						</ul>
				    </div>
				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="less">
.login_page{
    	position: absolute;
		width: 100%;
		height: 100%;
		// background: url(../assets/img/bg9.jpg) no-repeat center center;
		background-size: 100% 100%;
}
</style>