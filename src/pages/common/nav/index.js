require ('./index.css');
const _user =  require('../../../server/user/index.js');
const _util = require('util/index.js');
const _cart = require('server/cart/index.js');

var nav={
	init:function(){
		this.bindEvent();
		this.cartLogin();
		this.userLogin();
		return this;
	},
	bindEvent:function(){
		$('#logout').on('click',function(){
			
			_user.logout(function(result){
				window.location.reload()
			},function(message){
				_util.Errormsg(message)
			})
			
		});

	},
	cartLogin:function(){
		_cart.getCartCount(function(count){
			console.log(count)
			$('.cart-num').text(count)

		},function(){

		})
	},
	userLogin:function(){
		_user.getUserName(function(user){
		
			
			$('.not-login').hide();
			$('.use-login')
			.show()
			.find('.username')
			.text(user.username)
		})
	}
}



module.exports =  nav.init();