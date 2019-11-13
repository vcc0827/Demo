<template>
  <div>
    <input
      type="text"
      v-model="formItem.user_name"
      class="user-name"
      placeholder="user name"
    />
    <input
      type="text"
      v-model="formItem.user_pwd"
      class="password"
      placeholder="password"
    />
    <button type="primary" class="btn" @click="submit">Login</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      api:``,
      formItem:{
        user_name:'',
        user_pwd:''
      }
    }
  }
}
</script>

<style scoped></style>
