
var _nav = require('../common/nav/index.js');

require('../common/search/index.js');
require('util/carousel/index.js');
require('../common/foot/index.js');
require('../common/index.js');
require('./index.css');

const _util = require('util/index.js');

const _order = require('server/order/index.js');


const _shippings = require('server/shippings/index.js');

require('../../util/pagination/index.js');
const shippingtTpl = require('./shipping.tpl');
const productTpl = require('./productList.tpl');

var page={

	init:function(){

		this.onload();
		this.bindEvent();
		
	},
	bindEvent:function(){
		var _this =  this;
	
	},
	onload:function(){
		
		this.loadShippingList();
		this.loadProductList();
	},
	loadShippingList:function(){
		var html = _util.render(shippingtTpl);
			
		$('.shipping-box').html(html)
	},
	loadProductList:function(){

		var _this =  this;
		_order.getOrderList(function(result){
			
			_this.renderProductList(result)
		},function(){
			$('.cart-box').html('<p class= "empty-message">没有选中的订单商品</p>')
		})
		
	},
	renderShippings:function(shippings){

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






