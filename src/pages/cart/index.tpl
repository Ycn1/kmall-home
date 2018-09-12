{{#notEmpty}}

<ul class="cart-header clearfix">
	<li class="header-select">
		{{#totalCheck}}
		<input type="checkbox" class="select-all" checked />
		{{/totalCheck}}
		{{^totalCheck}}
		<input type="checkbox" class="select-all" />
		{{/totalCheck}}
		<span>全选</span>
	</li>
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
	<li class="header-option">
		操作
	</li>
</ul>
{{#cartList}}
<ul class="cart-product" data-product-id= "{{product._id}}">
	<li class="product-select">

		{{#check}}
		<input type="checkbox" class="select-one" checked />
		{{/check}}
		{{^check}}
		<input type="checkbox" class="select-one"  />
		{{/check}}
	
	</li>
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
		<input type="text" class="count-input" value="{{count}}" />
		<span class="count-btn plus">+</span>
	</li>
	<li class="product-totalprice">
		￥{{Price}}
	</li>
	<li class="product-option">
		<span>
			<i class="fa fa-trash-o"></i>删除
		</span>
	</li>
</ul>
{{/cartList}}
<ul class="cart-footer">
	<li class="footer-select">

		{{#totalCheck}}
		<input type="checkbox" class="select-all" checked />
		{{/totalCheck}}
		{{^totalCheck}}
		<input type="checkbox" class="select-all" />
		{{/totalCheck}}
		<span>全选</span>
	</li>
	<li class="footer-option">
		<span>
			<i class="fa fa-trash-o"></i>删除
		</span>
	</li>
	<li class="footer-submit" id="footer-submit">
		<span class="totao-price-text">总价</span>
		<span class="totao-price">￥{{toatlPrice}}</span>
		<a href="javascript:;" class="btn">去结算</a>

	</li>


</ul>
{{/notEmpty}}

{{^notEmpty}}

	<p class="empty-message">购物车空空如也!!!
	<a href="/" class="btn gohome-btn">立即去购物</a></p>

{{/notEmpty}}