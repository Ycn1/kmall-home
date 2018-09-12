require('./index.css')

require('../common/logo/index.js');
require('../common/foot/index.css');

const _util = require('../../util/index.js')
$(function(){

	var type = _util.getParamFormUrl('type') || 'default';
	$("."+type).show()
})


