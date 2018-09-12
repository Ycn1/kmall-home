
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
	bindEvent:function(){
		var _this =  this;

		$('.cart-box').on('click','.select-one',function(){
			var $this =  $(this)
			
			let productId = $this.parents('.cart-product').data('product-id');
	
			if($this.is(':checked')){
				alert("check")
				
				
				_cart.selectOne({productId:productId},
					function(cart){
						alert("successful")
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
					})

			}else{
				alert('uncheck')
			
				_cart.unselectOne({productId:productId},
					function(cart){
						alert('success')
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
					})
			}
		})

	},
	onload:function(){
		var _this =  this;
		_cart.getCart(function(cart){
		
			_this.renderCart(cart)
		},function(){
			$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
		})
	

	},
	renderCart:function(cart){
		console.log(cart)
		cart.cartList.forEach(item=>{
			if(item.product.image){
				item.product.img = item.product.image.split(',')[0]
			}else{
				item.product.img =  require('../../images/product-default.jpg')
			}
		})
		cart.notEmpty = !!cart.cartList.length;
		var html = _util.render(tpl,cart);
			
		$('.cart-box').html(html)
	},
	


}
$(function(){
	page.init();
})






