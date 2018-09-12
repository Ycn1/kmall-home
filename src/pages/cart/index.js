
require('../common/nav/index.js');

require('../common/search/index.js');
require('util/carousel/index.js');
require('../common/foot/index.js');
require('../common/index.js');
require('./index.css');

const _util = require('util/index.js');

const _cart = require('server/cart/index.js');


const _product = require('server/product/index.js');

require('../../util/pagination/index.js');
const tpl = require('./index.tpl');

var page={

	

	init:function(){
	
		this.onload();
		this.bindEvent();


	},
	onload:function(){
		var _this =  this;
		_cart.getCart(function(){
				_this.renderCart()
		},function(){
			$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
		})
	

	},
	renderCart:function(cart){
		var html = _util.render(tpl);
			
		$('.cart-box').html(html)
	},
	
	bindEvent:function(){
		var _this =  this;



	},

}
$(function(){
	page.init();
})






