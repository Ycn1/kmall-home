<ul>
	{{#list}}
	<li class="product-item">
		<a href="./detail.html?productId={{_id}}">
			<img src="{{img}}" alt="" class="product-img">
			<p class="product-list">￥{{price}}</p>
			<p class="product-name">{{name}}</p>
		</a>
	</li>
	{{/list}}
</ul>

{{^list}}

<p class="empty-message">你选择的商品去火星了</p>
{{/list}}