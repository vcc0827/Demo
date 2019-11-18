import request from '@/utils/axios'

// 登入
export function login(params) {
    return request({
        url:'/',
        method:'get',
        data:params
    })
}

// 登出
export function logout(params){
    return request({
        url:'/',
        method:'get',
        data:params
    })
}

//获取用户信息
export function getUserInfo(params){
    return request({
        url:'/',
        method:'get',
        data:params
    })
}
//获取用户列表
export function getUserList(reqData){
    return request({
        url:'/',
        method:'get',
        data:reqData
    })
}