
var _nav = require('../common/nav/index.js');

require('../common/search/index.js');
require('util/carousel/index.js');
require('../common/foot/index.js');
require('../common/index.js');
require('./index.css');

const _util = require('util/index.js');

const _order = require('server/order/index.js');

const _modal =  require('./modal.js');

const _shippings = require('server/shippings/index.js');
const _shipping = require('server/shippings/index.js');
require('../../util/pagination/index.js');
const shippingtTpl = require('./shipping.tpl');
const productTpl = require('./productList.tpl');

var page={
	data:{
		shippingId:null
	},

	init:function(){
		this.$shipping = $('.shipping-box');
		this.onload();
		this.bindEvent();

		
	},
	bindEvent:function(){
		var _this =  this;

		$('.shipping-box').on('click','.shipping-add',function(){
		
			_modal.show({
				success:function(shippings){
					_this.renderShippings(shippings)
				}
			});
		})
		//删除地址
		$('.shipping-box').on('click','.delete',function(e){
			e.stopPropagation();
			var shippingId = $(this).parents('.shipping-item').data('shipping-id');
	
			 if(_util.confirm("您确定删除地址吗")){
			 	_shippings.deleteShipping({shippingId:shippingId},function(shippings){
						_this.renderShippings(shippings)
					},function(msg){
						_util.Errormsg(msg)
					})
			 }
			
		})
		//编辑地址
		$('.shipping-box').on('click','.edit',function(e){
			e.stopPropagation();
			var shippingId = $(this).parents('.shipping-item').data('shipping-id');
			_shippings.getShipping({shippingId:shippingId},function(shippings){
							_modal.show({
									data:shippings,
									success:function(shippings){
									_this.renderShippings(shippings)
								}
							});
					},function(msg){
						_util.Errormsg(msg)
					})
		})
		//选中地址
		$('.shipping-box').on('click','.shipping-item',function(){


			var $this = $(this);
			$this.addClass('active')
			.siblings('.shipping-item').removeClass('active');

			_this.data.shippingId = $this.data('shipping-id');

		})
		//提交订单

		$('.product-box').on('click','.btn',function(){
			if(_this.data.shippingId){
				_order.createOrder({shippingId:_this.data.shippingId},function(order){
					console.log(order)
					// window.location.href = "./payload.html?orderNo="+order.orderNo;
				},function(msg){
					_util.Errormsg(msg)
				})
			}else{
				alert('请选择地址')
			}
		})
	
	},
	onload:function(){
		
		this.loadShippingList();
		this.loadProductList();
	},
	loadShippingList:function(){
		var _this =  this;
		_shippings.getShippingList(function(shippings){


			_this.renderShippings(shippings)
		},function(msg){
			$('.cart-box').html('<p class= "empty-message">没有选中的订单商品</p>')
		})

		
	},
	loadProductList:function(){

		var _this =  this;
		_order.getOrderList(function(result){
			
			_this.renderProductList(result)
		},function(){
			$('.shipping-box').html('<p class= "empty-message">获取列表失败</p>')
		})
		
	},
	renderShippings:function(shippings){
		var _this = this;

			shippings.forEach(function(shipping){
				if(shipping._id == _this.data.shippingId){
					shipping.isActive = true;
				}
			})

			var html = _util.render(shippingtTpl,{
				shippings:shippings
			});
			
			$('.shipping-box').html(html)
	},
	renderProductList:function(result){


		result.cartList.forEach(item=>{
			if(item.product.image){
				item.product.img = item.product.image.split(',')[0]
			}else{
				item.product.img =  require('../../images/product-default.jpg')
			}
		})

		result.notEmpty = !!result.cartList.length;

		var html = _util.render(productTpl,result);
			
		$('.product-box').html(html)
	}
	


}
$(function(){
	page.init();
})






