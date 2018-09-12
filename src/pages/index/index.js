
require('./index.css');
require('../common/nav/index.js');
require('../common/search/index.js');
require('util/carousel/index.js');
require('../common/foot/index.js');

const _util = require('util/index.js');
const keywordTpl = require('./keyword.tpl');
const carouselTpl = require('./carousel.tpl');
const floorTpl = require('./floor.tpl');
var page={

	init:function(){
		
		this.loadInfo();
		this.loadCarousel();
		this.loadFloor();
	},
	 keyword : [
		{item:[{name:"手机"},{name:"电话"}]},
		{item:[{name:"服饰"},{name:"上衣"}]},
		{item:[{name:"手机"},{name:"电话"}]},
		{item:[{name:"家电"},{name:"冰箱"}]},
		{item:[{name:"日用"},{name:"牙刷"}]},
		{item:[{name:"手机"},{name:"电话"}]},
		{item:[{name:"厨具"},{name:"碗碟"}]}

	],
	loadInfo:function(){
		
			var html = _util.render(keywordTpl,{
				keyword:this.keyword
			})

			$('.keywords').html(html)
	
	},
	category:[
			{categoryId:'5b95fd0b1ca20c34901e6a82',image:require('images/carousel-01.jpg')},
			{categoryId:'5b95fd0b1ca20c34901e6a82',image:require('images/carousel-02.jpg')},

			{categoryId:'5b95fd0b1ca20c34901e6a82',image:require('images/carousel-03.jpg')}


	],
	floor:[

			{
				title:'f1家纺',
				item:[
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",	price:"$111",image:require('images/floor/floor-01.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-02.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-03.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-04.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-05.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-06.jpg')},
				],


			},
			{
				title:'f2电器',
				item:[
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-06.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-05.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-04.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-03.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-02.jpg')},
					{categoryId:'5b95fd0b1ca20c34901e6a82',text:"北极家纺",image:require('images/floor/floor-01.jpg')},
				]

			}
	],
	loadCarousel:function(){
			var html = _util.render(carouselTpl,{
				category:this.category
			})

			$('.banner').html(html);
			var $carousel = $('.banner').unslider({
				dots: true,
				keys:true
			});


			$('.arrow').on('click',function(){
				let direction = $(this).hasClass('next') ? 'next' : 'prev';
				$carousel.data('unslider')[direction]();
			});
	
	},
	loadFloor:function(){
		var html = _util.render(floorTpl,{
				floor:this.floor
			})

			$('.floor-wrap').html(html)
	}
}

    


$(function(){
	page.init();
})






