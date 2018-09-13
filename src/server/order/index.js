const _util = require('util/index.js');

const  _order = {
	

	getOrderList:function(success,error){
		_util.request({
			url:"/order/orderList",
			success:success,
			error:error

		})
	},

	
}
module.exports =   _order;