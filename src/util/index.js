
var Hogan = require('hogan.js');

const  _util = {
	
	request:function(params){
			var _this = this;
			$.ajax({url:params.url||'',
			method:params.method||'get',
			dataType:params.dataType||'json',
			data:params.data||'',
			success:function(result){
				if(result.code ==0 ){
					params.success && params.success(result.data)
				}else if(result.code == 10){
					_this.doLogin()
				}else if(result.code == 1 ){
					params.error && params.error(result.message)

				}
			},
			error:function(error){
				params.error && params.error(error.statusText)

			}
		})
	},
	Errormsg:function(message){
		alert(message)
	},
	render:function(tmp,data){
		var template = Hogan.compile(tmp);
		var html = template.render(data);
		return html;
	},
	confirm:function(msg){
		return window.confirm(msg)

	},
	doLogin:function(){
		window.location.href='./user-login.html?redirect=' + encodeURIComponent(window.location.href);
		// window.location.href = './user-login.html?redirect='+encodeURIComponent(window.location.href)
	},
	validate:function(value,type){
		var value = $.trim(value);
		//非空验证
		if(type== 'require'){
			return !!value
		}
		if(type == 'username'){
			return /^[a-zA-Z0-9_]{3,10}$/.test(value)
		}
		if(type == 'password'){
			return /^[a-zA-Z0-9_]{3,10}$/.test(value)
		}
		if(type == 'repassword'){
			return /^[a-zA-Z0-9_]{3,10}$/.test(value)
		}
		if(type == 'phone'){
			return /^1[358]\d{9}$/.test(value)
		}
		if(type == 'phone'){
			return /^1[358]\d{9}$/.test(value)
		}
		if(type == 'email'){
			return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
		}


	},
	goHome:function(){
		window.location.href= "/";
	},

	getParamFormUrl:function(key){
		var query = window.location.search.substr(1);
		var reg = new RegExp('(^|&)'+key+'=([^&]*)(&|$)');
		var result =  query.match(reg);
		return result ? decodeURIComponent(result[2]) : null;

	}
	
}
module.exports =   _util;