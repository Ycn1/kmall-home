
require('../common/nav/index.js');

require('../common/search/index.js');
require('util/carousel/index.js');
require('../common/foot/index.js');
require('../common/index.js');
require('./index.css');

const Tpl = require('./index.tpl');
const _util = require('util/index.js');

const _product = require('server/product/index.js');

require('../../util/pagination/index.js');

var page={
	listParmas:{
		keyword:_util.getParamFormUrl('keyword') || '',
		categoryId:_util.getParamFormUrl('categoryId') || '',
		page:_util.getParamFormUrl('page') || 1,
		orderBy :_util.getParamFormUrl('orderBy') || 'default'
	},

	init:function(){

		this.initPagination();
		this.bindEvent();
		this.loadProductList();
	
	},
	initPagination:function(){
		var _this = this;
		var $pagination = $('.pagination-box');
		$pagination.on('page-change',function(e,value){
			_this.listParmas.page=  value;
			_this.loadProductList();
		})
		$pagination.pagination()

	},
	bindEvent:function(){
		var _this =  this;
		$('.sort-item').on('click',function(){
			var $this = $(this);
			if($this.hasClass('default')){

				if($this.hasClass('active')){
					return 
				}else{
					$this.addClass('active')
					.siblings('.sort-item')
					.removeClass('active')
					_this.listParmas.orderBy = 'default';
				}
			}else{
				if($this.hasClass('price')){
					$this.addClass('active')
					.siblings('.sort-item')
					.removeClass('active')
					if(!$this.hasClass('asc')){
						$this.addClass('asc')
						.removeClass('desc');
						_this.listParmas.orderBy = 'price_asc';

					}else{
						$this.addClass('desc')
						.removeClass('asc');
						_this.listParmas.orderBy = 'price_desc';
					}

				}
			}
			_this.loadProductList();
		});
	},
	loadProductList:function(){

		this.listParmas.categoryId
		? (delete this.listParmas.keyword)
		:(delete this.listParmas.categoryId)

		_product.getProductList(this.listParmas,function(result){

			
				
			var list = result.list.map(function(product){
				
				if(product.image){
					
					product.img = product.image.split(',')[0]
				}else{
					product.img = require('images/product-default.jpg');
				}
				return product;
			})

			var html = _util.render(Tpl,{
				list :result.list
			})

			$('.product-list').html(html)


			$('.pagination-box').pagination('render',{
				current :result.current,
				total:result.total,
				pageSize:result.pageSize,
				range:3
			})



		},function(e){

		})

	}

}
$(function(){
	page.init();
})






