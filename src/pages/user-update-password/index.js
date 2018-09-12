require('../common/index.js');
require('./index.css');

require('../common/logo/index.js');
require('../common/foot/index.js');
require('../common/side/index.js');
require('../common/nav/index.js');

const _user =  require('../../server/user/index.js');

const _util = require('util/index.js');
const _side = require('../common/side/index.js');



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
		this.onload();
		this.userLogin();
	},
	onload:function(){
		_side.render('user-update-password')
	},
	userLogin:function(){
		var _this = this;
	
		
		$('#btn-submit').on('click',function(){
			_this.submit();

		})
		$('#btn-submit').on('keyup',function(e){
			if(e.keyCode == 13){
				_this.submit();
			}
		})

	},
	submit:function(){
		
			var formData = {
				
				 password : $.trim($('[name="password"]').val()),
				 repassword : $.trim($('[name="repassword"]').val()),

			}
			
			var vaiDateResult = this.validate(formData)
			
			if(vaiDateResult.status){
				formErr.hide();
				_user.updatePassword(formData,function(result){
					// window.location.href = "/";
				window.location.href = "./result.html?type=updatePassword"

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

		result.status = true;
		return result;
	},

	
}



$(function(){
	page.init();
})



