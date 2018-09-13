
var _nav = require('../common/nav/index.js');

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
		this.$box = $('.cart-box');
		this.onload();
		this.bindEvent();


	},
	bindEvent:function(){
		var _this =  this;
		//单个物品的取消和选择
		this.$box.on('click','.select-one',function(){
			var $this =  $(this)
			
			let productId = $this.parents('.cart-product').data('product-id');
	
			if($this.is(':checked')){
				
				
				
				_cart.selectOne({productId:productId},
					function(cart){
						
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
					})

			}else{
				
			
				_cart.unselectOne({productId:productId},
					function(cart){
						
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
					})
			}
		})

		//全部的选择和取消
		this.$box.on('click','.select-all',function(){
			var $this =  $(this);
			if($this.is(':checked')){
					_cart.selectAll(
					function(cart){
						
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
					})
				}else{
					_cart.unselectAll(
					function(cart){
						
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
					})
				}
		})

		//单个删除商品
		this.$box.on('click','.delete-one',function(){
			var $this =  $(this)
			
			let productId = $this.parents('.cart-product').data('product-id');
			if(_util.confirm('是否删除选择的商品')){

				_cart.deleteOne({productId:productId},
					function(cart){
						
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
				})
			}
			

		})
		this.$box.on('click','.deleteSelect',function(){
			
		
			if(_util.confirm('是否删除选择的商品')){
				
				_cart.deleteSelete(
					function(cart){
						
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
				})
			}
			

		})
		//input框的值得增减
		this.$box.on('click','.count-btn',function(){
			var $this =  $(this)		
			let productId = $this.parents('.cart-product').data('product-id');
			var $input =  $this.siblings('.count-input');
		
			var current  =  parseInt($input.val());
			var max = $input.data('stock');
		
			var min =  1;
			var newCount  = 0;

			if($this.hasClass('plus')){
			
				if(current >= max){
					msg:'商品数量到达上限'
					return;
				}
				newCount =  current +1;


			}else{
				if(current <= min){
					msg:'商品数量不能小于一件'
					return;
				}
				newCount =  current - 1;
			}

			_cart.changeInput({productId:productId,count:newCount},
					function(cart){
						
						_this.renderCart(cart)
					},function(){
						$('.cart-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
				})


		})
		//去结算页面
		this.$box.on('click','.footer-submit .btn',function(){

			
			if (_this.cart && _this.cart.toatlPrice >0) {
				window.location.href = './order-confirm.html'
			}else{
				_util.Errormsg('请选择商品后再提交')
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
		_nav.cartLogin()
		this.cart = cart;
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






