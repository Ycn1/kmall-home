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
	getProductList:function(data,success,error){
		_util.request({
			url:"/order/getlist",
			data:data,
			success:success,
			error:error

		})
	},
	getOrderDetail:function(data,success,error){
		_util.request({
			url:"/order/detail",
			data:data,
			success:success,
			error:error

		})
	},
	updateCancel:function(data,success,error){
			_util.request({
			url:"/order/cancel",
			data:data,
			method:"put",
			success:success,
			error:error

		})
	}

	
}
module.exports =   _order;