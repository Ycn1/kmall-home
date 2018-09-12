<div class="main">
				<div class="main-img">
					<div class="main-detail-img">
						<img src="{{mainImg}}" alt="">
					</div>
					<ul class="detail-main-images">
						{{#image}}
						<li class="detail-image">
							<img src="{{.}}" alt="" >
						</li>
						{{/image}}
						
					</ul>
				</div>
				<div class="product-info clearfix">
					<div class="product-name">
						<span>商品名称 ： </span>
						{{name}}
					</div>
					<div class="desc">
						<span>商品介绍 ： </span>
						{{desc}}
					</div>
					<div class="product-price">
						<span class="lable">价格：  ￥</span>
						<span class="price">{{price}}</span>
					</div>
					<div class="product-stock">
						<span class="lable">库存 ：</span>
						<span class="stock">{{stock}}</span>
					</div>
					<div class="product-count">
						<span class="lable">数量  ：</span>
						<input type="text" value="1" class="count-input">
						<span class="count-btn plus">-</span>
						<span class="count-btn minus">+</span>

					</div>
					<div class="add-cart">
						<a href="javascript:;" class="btn">添加购物车</a>
						
					</div>
				</div>
			</div>
			<div class="main-detail">
				<div class="tab">
					<ul class="tab-list">
						<li class="tab-item active">商品详情</li>
						<li class="tab-item">用户评论</li>
					</ul>
					
				</div>
				<div class="tab-content">
					{{{detail}}}
				</div>
				
			</div>