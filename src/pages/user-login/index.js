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
		$('#btn-submit').on('click',function(){
			_this.submit();
		})
		$('.password').on('keyup',function(e){
			if(e.keyCode == 13){
				_this.submit();
			}
		})


	},
	submit:function(){
		
			var formData = {
				 username : $.trim($('[name="username"]').val()),
				 password : $.trim($('[name="password"]').val()),
			
			}
			
			var vaiDateResult = this.validate(formData)
			console.log(vaiDateResult)
			if(vaiDateResult.status){
				formErr.hide();
				_user.login(formData,function(result){
					window.location.href = _util.getParamFormUrl('redirect') || './index.html';

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

		result.status = true;
		return result;
	},

	
}



module.exports =  page.init();

