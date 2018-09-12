const _util = require('util/index.js');

const  _user = {
	

	logout:function(success,error){
		_util.request({
			url:"/user/logout",
			success:success,
			error:error

		})
	},

	login:function(data,success,error){
		_util.request({
			method:'post',
			url:"/user/login",
			data:data,
			success:success,
			error:error

		})
	},
	//监听是否已存在用户名
	nameRigister:function(username,success,error){
		_util.request({
			
			url:"/user/namerigister",
			data:{
				username:username
			},
			success:success,
			error:error

		})
	},
	//注册新的用户

	getNewUser:function(data,success,error){
		_util.request({
			method:'post',
			url:"/user/register",
			data:data,
			success:success,
			error:error

		})
	},

	getUserName:function(success,error){
		_util.request({
			
			url:"/user/username",
		
			success:success,
			error:error

		})
	},
	getUserContent:function(success,error){
		_util.request({
			url:'/user/userInfo',
			success:success,
			error:error

		})
	},
	updatePassword:function(data,success,error){
		_util.request({
			method:'put',
			url:"/user/updatepassword",
			data:data,
			success:success,
			error:error

		})
	}
}
module.exports =   _user;