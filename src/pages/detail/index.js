
require('../common/nav/index.js');

require('../common/search/index.js');
require('util/carousel/index.js');
require('../common/foot/index.js');
require('../common/index.js');
require('./index.css');

const _util = require('util/index.js');

const _cart = require('server/cart/index.js');


const _product = require('server/product/index.js');

require('../../util/pagination/index.js');
const tpl = require('./index.tpl');

var page={

	params:{
		productId:_util.getParamFormUrl('productId') || '',
	},
	

	init:function(){
	
		this.onload();
		this.bindEvent();

	},
	onload:function(){
		if(this.params.productId){
			this.loadProductDetail();
		}
	},
	
	bindEvent:function(){
		var _this =  this;

		//处理详情页的图片

		$('.detail-box').on('mouseenter','.detail-image',function(){
			var $this = $(this);
			$this.addClass('active')
			.siblings('.detail-image').removeClass('active')

			var srcImg  = $(this).find('img').attr('src');
			$('.main-detail-img img').attr('src',srcImg);
		})

		//购物车数量
		$('.detail-box').on('click','.count-btn',function(){

			var $this = $(this);
			console.log($this);
			var stock =  _this.stock;
			var current = parseInt($('.count-input').val());
			if($this.hasClass('minus')) {
				$('.count-input').val(current   >= stock ? stock : current + 1)
			}else{
				$('.count-input').val(current   > 1 ? current - 1: 1)
			}
			
		})

		//添加购物车

		$('.detail-box').on('click','.add-cart .btn',function(){
			
			
			_cart.addCart({
				product:_this.params.productId,
				count:$('.count-input').val()

			},function(result){				
				window.location.href = "./result.html?type=addCart"
			},function(){

			})
		})


	},
	loadProductDetail:function(){
		var _this = this;

		_product.getProductDetail({productId:this.params.productId},function(product){
			if(product){
				if(product.image){
					product.image = product.image.split(',')
				}else{
					product.image = [require('../../images/product-default.jpg')]
				}
				product.mainImg = product.image[0];


				var html = _util.render(tpl,product);
				_this.stock = product.stock;
				
				$('.detail-box').html(html)
			}else{
				$('.detail-box').html('<p class= "empty-message">您访问的页面去火星了</p>')
			}
				

		},function(msg){

			_util.Errormsg(msg)
		})
	}
}
	

$(function(){
	page.init();
})






