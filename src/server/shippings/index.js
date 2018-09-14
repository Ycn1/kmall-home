const _util = require('util/index.js');

const  _shipping = {
	

	getshippings:function(data,success,error){
		_util.request({
			method:'post',
			url:"/shippings/add",
			data:data,
			success:success,
			error:error

		})
	},
	getShippingList:function(success,error){
		_util.request({
		
			url:"/shippings/list",
			success:success,
			error:error

		})
	},
	deleteShipping:function(data,success,error){
		_util.request({
			method:'put',
			url:"/shippings/delete",
			data:data,
			success:success,
			error:error

		})
	},
	getShipping:function(data,success,error){
		_util.request({
			data:data,
			url:"/shippings/shipping",
			success:success,
			error:error

		})
	},
	editshippings:function(data,success,error){
		_util.request({
			method:'put',
			url:"/shippings/edit",
			data:data,
			success:success,
			error:error

		})
	},


	
}
module.exports =   _shipping;