
require('./index.css');

require('../common/logo/index.js');
require('../common/foot/index.js');
require('../common/side/index.js');
const tpl = require('./index.tpl');

require('../common/nav/index.js');
const _user =  require('../../server/user/index.js');

const _util = require('util/index.js');
const _side = require('../common/side/index.js');


var page={

	init:function(){
		this.onload();
		this.loadInfo();
	},
	onload:function(){
		_side.render('user-content')
	},
	loadInfo:function(){
		_user.getUserContent(function(userInfo){
			var html = _util.render(tpl,userInfo)

			$('.content').html(html)
		},function(){
			
		})
	},
	

	
	
}


$(function(){
	page.init();
})

