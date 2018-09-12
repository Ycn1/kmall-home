
require('./index.css');

const _user =  require('../../../server/user/index.js');

const _util = require('util/index.js');

var page={
	init:function(){
		this.loadCon();
		this.bindEvent();
	},
	loadCon:function(){
		
		var keyword = _util.getParamFormUrl('keyword') ;
		if(keyword){
			$('#input-search').val(keyword)
		}
			
		
	},
	bindEvent:function(){
		var _this = this;
		$('#btn-search').on('click',function(){
			_this.submit();

		})
		$('#input-search').on('keyup',function(e){
			if(e.keyCode == 13){
				_this.submit();
			}
		})
		

	},
	submit:function(){
		var keyword = $.trim($('#input-search').val());
			window.location.href = './list.html?keyword='+keyword;
		// alert(keyword)
	/*	if(keyword){
			console.log("1")
			
			window.location.href = './list.html?keyword='+keyword;

		}else{
			_util.goHome()
		}*/
	}

	
}



// module.exports =  page.init();
$(function(){
	page.init()
})

