
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
	<li class="header-totalprice">
		小计
	</li>
</ul>
{{#cartList}}
<ul class="product-item" data-product-id= "{{product._id}}">
	
	<li class="product-info">
		<a href="./detail.html/productId = {{product._id}}" class="link">
			<img src="{{product.img}}" alt="">
			<span>{{product.name}}</span>
		</a>
	</li>
	<li class="product-price">
		￥{{product.price}}
	</li>
	<li class="product-count">
		<span class="count-btn minus">-</span>
		<input type="text" class="count-input" value="{{count}}" data-stock = "{{product.stock}}" />
		<span class="count-btn plus">+</span>
	</li>
	<li class="product-totalprice">
		￥{{Price}}
	</li>

</ul>
{{/cartList}}
<ul class="product-footer">
	<li class="footer-submit" id="footer-submit">
		<span class="totao-price-text">总价</span>
		<span class="totao-price">￥{{toatlPrice}}</span>
		<a href="javascript:;" class="btn">去支付</a>

	</li>


</ul>

{{/notEmpty}}

{{^notEmpty}}

	<p class="empty-message">没有选中的商品订单!!!
	<a href="/" class="btn gohome-btn">立即去购物</a></p>

{{/notEmpty}}
