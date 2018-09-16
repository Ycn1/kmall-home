
require('./index.css');

require('../common/logo/index.js');
require('../common/foot/index.js');
require('../common/side/index.js');
const tpl = require('./index.tpl');

require('../common/nav/index.js');
const _payment =  require('../../server/payment/index.js');

const _util = require('util/index.js');
const _side = require('../common/side/index.js');
require('../../util/pagination/index.js');

var page={
	params:{
		orderNo:_util.getParamFormUrl('orderNo') || 1,
	},

	init:function(){
	
		this.onload();
	
	},

	onload:function(){
		var _this = this;
		if(_this.params.orderNo){

			_this.renderPayment()

		}
	},
	
	renderPayment:function(order){
		var _this = this;

		_payment.getPayment({orderNo:_this.params.orderNo},function(order){
					console.log(order)

					var html = _util.render(tpl,{
						order:order,	
					})

					$('.content').html(html)
					_this.listenPaymentStatus()
				},function(){
					$('.content').html('<p class= "empty-message">没有选中的订单商品</p>')
				})	

	},
	//监听支付状态说
	listenPaymentStatus:function(){
		var _this = this;
		window.setInterval(function(){
			_payment.getPaymenStatus({orderNo:_this.params.orderNo},function(result){
				if(result== true){
					window.location.href= './result.html?type=payment'
				}
			})
		},5000)
	}
	

	
	
}


$(function(){
	page.init();
})

