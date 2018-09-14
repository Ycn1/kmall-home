
var _nav = require('../common/nav/index.js');

require('../common/search/index.js');
require('util/carousel/index.js');
require('../common/foot/index.js');
require('../common/index.js');
require('./index.css');

require('../../util/pagination/index.js');
const _util = require('util/index.js');	
const modalTpl = require('./modal.tpl');

const _cities = require('util/cities/index.js');

const _shipping = require('server/shippings/index.js');
var formErr = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text("")
	}
}

var _modal={

	show:function(options){
		this.options = options;
		this.loadmodel();
		this.bindEvent();
	
		
		
	},
	bindEvent:function(){
		var _this =  this;
		//关闭窗口
		$('.model-box').find('.close-btn').on('click',function(){
			
			$('.model-box').empty()
		});
		$('.model-box').find('.container-model').on('click',function(e){
			e.stopPropagation();
		})
		//绑定联动事件

		var $provinceSelect = $('.model-box').find('.provinces');

		$provinceSelect.on('change',function(){
			
			_this.loadCities($provinceSelect.val())
		});

		//新增地址提交
		$('.model-box').find('.btn').on('click',function(){
			
			_this.submit()

		});
	},
	loadmodel:function(){
			var _this =  this;
			
			var html = _util.render(modalTpl,{
				data:_this.options.data || {},
				isEdit:!!_this.options.data
			});
			
			$('.model-box').html(html);

			_this.loadProvinces();
		
	},
	loadProvinces:function(){
		var _this = this;
		var Provinces = _cities.getProvinces();
		var ProvincesContent =  this.getSelectOptions(Provinces);
		$('.provinces').html(ProvincesContent);
		
		//省份的回填
		if(this.options.data && this.options.data.province){
		
			$('.provinces').val(this.options.data.province);
			_this.loadCities(this.options.data.province)
		}
		
	},
	getSelectOptions:function(arr){
		let html ='';
		for(var i= 0;i<arr.length;i++){
			html += '<option value= "'+arr[i]+'">' + arr[i] + '</option>'
		}

		return html;

	},
	loadCities:function(provinceName){

		var cities = _cities.getCities(provinceName);
		
		var citiesSelectOptions = this.getSelectOptions(cities);
		$('.model-box').find('.cities').html(citiesSelectOptions); 
		if(this.options.data && this.options.data.city){
		
			$('.cities').val(this.options.data.province);
			
		}
		

	},
	submit:function(){
			var _this =  this;
		
			var formData = {
				 name : $.trim($('[name="name"]').val()),
				 province : $.trim($('[ name="province"]').val()),
				 city : $.trim($('[name="city"]').val()),
				 address : $.trim($('[name="address"]').val()),
				 phone : $.trim($('[name="phone"]').val()),
				 zip : $.trim($('[name="zip"]').val()),

			}
			
			var vaiDateResult = this.validate(formData)
			
			if(vaiDateResult.status){
				formErr.hide();
				//如果存在说明是编辑否则是新增
				if(this.options.data){
					formData.shippingId = this.options.data._id;
					_shipping.editshippings(formData,function(shippings){
					
						$('.model-box').empty();
						_this.options.success(shippings);
					
						
					},function(msg){
						formErr.show(msg)
					})

				}else{
					_shipping.getshippings(formData,function(shippings){
					
						$('.model-box').empty();
						_this.options.success(shippings);
					
						
					},function(msg){
						formErr.show(msg)
					})
				}

				

			}else{

				formErr.show(vaiDateResult.msg)
			
			}
	
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		}
		if(!_util.validate(formData.name,'require')){
			result.msg = '用户名不能为空';
			return result;
		}
		
		if(!_util.validate(formData.province,'require')){
			result.msg = '省份不能为空';
			return result;
		}
		
		if(!_util.validate(formData.city,'require')){
			result.msg = '城市不能为空';
			return result;
		}
	
		if(!_util.validate(formData.phone,'require')){
			result.msg = '电话不能为空';
			return result;
		}

		if(!_util.validate(formData.address,'require')){
			result.msg = '邮箱不能为空';
			return result;
		}

		result.status = true;
		return result;
	},

	
	
}

module.exports =   _modal;





