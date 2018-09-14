const _util = require('util/index.js');

const  _order = {
	

	getOrderList:function(success,error){
		_util.request({
			url:"/order/orderList",
			success:success,
			error:error

		})
	},
	createOrder:function(data,success,error){
		_util.request({
			method:'post',
			url:"/order",
			data:data,
			success:success,
			error:error

		})
	},

	
}
module.exports =   _order;