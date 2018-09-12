const _util = require('util/index.js');

const  _cart = {
	

	addCart:function(data,success,error){
		_util.request({
			method:'post',
			url:"/cart/add",
			data:data,
			success:success,
			error:error

		})
	},

	getCart:function(success,error){
		_util.request({
			url:"/cart/getcart",
			
			success:success,
			error:error

		})
	},
	selectOne:function(data,success,error){
		_util.request({
			method:'put',
			url:"/cart/selectone",
			data:data,
			success:success,
			error:error

		})
	},
	unselectOne:function(data,success,error){
		_util.request({
			method:'put',
			url:"/cart/unselectone",
			data:data,
			success:success,
			error:error

		})
	}

	
}
module.exports =   _cart;