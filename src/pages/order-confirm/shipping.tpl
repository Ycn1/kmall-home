<div class="shipping">
	<div class="shipping-body">
		{{#shippings}}
		{{#isActive}}
			<div class="shipping-item active" data-shipping-id= "{{_id}}">
		{{/isActive}}
		{{^isActive}}
			<div class="shipping-item" data-shipping-id= "{{_id}}">
		{{/isActive}}
		
			<h3 class="shipping-header">{{province}}  {{city}} {{name}}</h3>
			<div class="shipping-detail">{{province}}  {{city}} {{ address}} {{phone}}</div>
			<div class="shopping-option">
				<span class="link edit">编辑</span>
				<span class="link delete" >删除</span>
			</div>
		</div>
		{{/shippings}}
		
		<div class="shipping-add">
			<i class="fa fa-plus"></i>
			新增收货地址
		</div>
	
	</div>
</div>
