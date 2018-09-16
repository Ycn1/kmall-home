
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
		page:_util.getParamFormUrl('page') || 1,
	},
	init:function(){
		this.initPagination();
		this.onload();
		this.loadInfo();
	},
	initPagination:function(){
		var _this = this;
		var $pagination = $('.pagination-box');
		$pagination.on('page-change',function(e,value){
			_this.params.page=  value;
			_this.loadInfo();
		})
		$pagination.pagination()

	},
	onload:function(){
		_side.render('order-list')
	},
	loadInfo:function(){
		
		_order.getProductList(this.params,function(orders){
			let list = orders.list.map(order=>{
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
			})
			console.log(orders)
			var html = _util.render(tpl,{
				list:orders.list,
				notEmpty:!!orders.list
			})

			$('.content-box').html(html)
			$('.pagination-box').pagination('render',{
				current :orders.current,
				total:orders.total,
				pageSize:orders.pageSize,
				range:3
			})
		},function(msg){
			alert(msg)
		})


	},
	

	
	
}


$(function(){
	page.init();
})

