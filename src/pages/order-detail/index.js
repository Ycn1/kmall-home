
require('./index.css');

require('../common/logo/index.js');
require('../common/foot/index.js');
require('../common/side/index.js');
const tpl = require('./index.tpl');

require('../common/nav/index.js');
const _order =  require('../../server/order/index.js');

const _util = require('util/index.js');
const _side = require('../common/side/index.js');
require('../../util/pagination/index.js');

var page={
	params:{
		orderNo:_util.getParamFormUrl('orderNo') || 1,
	},
	init:function(){
	
		this.onload();
		this.loadInfo();
		this.bindEvent();
	},
	bindEvent:function(){
		var _this =  this;

		$('.content').on("click",'.cancel',function(){
			if(_util.confirm("您确定取消订单吗？")){
				_order.updateCancel({orderNo:_this.params.orderNo},function(order){
					console.log(order)
					_this.renderProductDetail(order)
				},function(){

				})
			}
			
		})
		
	},
	onload:function(){
		_side.render('order-list')
	},
	loadInfo:function(){
		var _this =  this;
		_order.getOrderDetail(this.params,function(order){
			
			_this.renderProductDetail(order)
		},function(msg){

		})
	},
	renderProductDetail:function(order){

		if(order){

			order.productList.forEach(product=>{
				if(product.image){
					if(product.image){
						product.img =product.image.split(',')[0]
					}else{
						product.img =  require('../../images/product-default.jpg')
					}
					order.createdTime = new  Date(order.createdAt).toLocaleString();
					return order;
				}
			})
		}
	
	var html = _util.render(tpl,{
		order:order,
		notEmpty:!!order,
		needpay:order.status == 10,
		cancel:order.status == 10
				
	

		})
		$('.content').html(html)	

	},
	

	
	
}


$(function(){
	page.init();
})

