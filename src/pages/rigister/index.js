require('./index.css');
require('../common/logo/index.js');
require('../common/foot/index.css');

require('../common/nav/index.js');
const _user =  require('../../server/user/index.js');

const _util = require('util/index.js');

var formErr = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text("")
	}
}

var page={
	init:function(){
		this.userLogin();
	},
	userLogin:function(){
		var _this = this;
	
		//用户名是否已存在
		$('[name="username"]').on('blur',function(){
			var	 username = $(this).val();
			if(!_util.validate(username,'require')){
				return;
			}
			if(!_util.validate(username,'username')){
				
				return;
			}
			_user.nameRigister(username,function(result){
				formErr.hide();
				
				
			},function(message){
				
				formErr.show(message)

			})

		})
		$('#btn-submit').on('click',function(){
			_this.submit();

		})
		$('.email').on('keyup',function(e){
			if(e.keyCode == 13){
				_this.submit();
			}
		})

	},
	submit:function(){
		
			var formData = {
				 username : $.trim($('[name="username"]').val()),
				 password : $.trim($('[name="password"]').val()),
				 repassword : $.trim($('[name="repassword"]').val()),

				 phone : $.trim($('[name="phone"]').val()),


				 email : $.trim($('[name="email"]').val()),

			}
			
			var vaiDateResult = this.validate(formData)
			
			if(vaiDateResult.status){
				formErr.hide();
				_user.getNewUser(formData,function(result){
					// window.location.href = "/";
				window.location.href = "./result.html?type="

					// _util.goHome()
				},function(msg){
					formErr.show(msg)
				})

			}else{

				formErr.show(vaiDateResult.msg)
			
			}
	
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		}
		if(!_util.validate(formData.username,'require')){
			result.msg = '用户名不能为空';
			return result;
		}
		if(!_util.validate(formData.username,'username')){
			result.msg = '用户名格式错误';
			return result;
		}
		if(!_util.validate(formData.password,'require')){
			result.msg = '密码不能为空';
			return result;
		}
		if(!_util.validate(formData.password,'password')){
			result.msg = '密码格式错误';
			return result;
		}
		if(!_util.validate(formData.repassword,'require')){
			result.msg = '密码不能为空';
			return result;
		}
		if(formData.repassword != formData.password){
			result.msg = '密码俩次不一样';
			return result;
		}
			if(!_util.validate(formData.phone,'require')){
			result.msg = '电话不能为空';
			return result;
		}
		if(!_util.validate(formData.phone,'phone')){
			result.msg = '电话格式错误';
			return result;
		}
			if(!_util.validate(formData.email,'require')){
			result.msg = '邮箱不能为空';
			return result;
		}
		if(!_util.validate(formData.email,'email')){
			result.msg = '邮箱格式错误';
			return result;
		}

		result.status = true;
		return result;
	},

	
}



module.exports =  page.init();

