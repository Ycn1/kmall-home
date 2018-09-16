
<div class="form-item">
{{#notEmpty}}

<ul class="product-header clearfix">
	
	<li class="header-product">
		<span>商品</span>
	</li>
	<li class="header-price">
		单价
	</li>
	<li class="header-count">
		数量
	</li>
	<li class="header-count">
		小计
	</li>
	
</ul>

{{#list}}
<ul class="order-list">
	<li class="order-item">
		<span>订单号 : {{orderNo}}</span>
		
	</li>
	<li class="order-item">
		<span>创建时间 : {{createdTime}}</span>
		
	</li>
	<li class="order-item">
		<span>订单状态 : {{statusDesc}}</span>
		
	</li>
	<li class="order-item">
		<span>收件人 ：{{shipping.name}}</span>
		
	</li>
	<li class="order-item">
		<span>价格： ￥</span>
		<span class="payment">{{payment}}</span>
		
	</li>
	<li class="order-item">
		<a target="_blank" href="./order-detail.html?orderNo={{orderNo}}">查看详情</a>
	</li>
</ul>
{{#productList}}
<ul class="product-item" data-product-id= "{{productList.product}}">
	
	<li class="product-info">
		<a href="./detail.html/productId = {{productList.product}}" class="link">
			<img src="{{img}}" alt="">
			<span>{{name}}</span>
		</a>
	</li>
	<li class="product-price">
		￥{{Price}}
	</li>
	
	<li class="product-price">
		￥{{count}}
	</li>
	
	<li class="product-totalprice">
		￥{{payment}}
	</li>

</ul>
{{/productList}}
{{/list}}


{{/notEmpty}}

{{^notEmpty}}

	<p class="empty-message">购物车空空如也!!!
	<a href="/" class="btn gohome-btn">立即去购物</a></p>

{{/notEmpty}}
</div>
	


