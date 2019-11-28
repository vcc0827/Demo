export const userStatus = (state,user) => {
    if(user){
        state.currentUser = user
        state.isLogin = true
    } else if (user == null){
        //登出清空sessionStorage内容
        sessionStorage.setItem('userName',null)
        sessionStorage.setItem('userToken','')
        state.currentUser = null
        state.isLogin = false
        state.token = ''
    }
}