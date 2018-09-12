
{{#floor}}
<div class="floor-box">
	<h3>{{title}}</h3>
	<ul class="floor-list">
		{{#item}}
		<li class="floor-item">
			<a href="./list.html?categoryId={{categoryId}}">
				<p>{{text}}</p>
				<img src={{image}} alt="">
				<p class="price">{{price}}</p>
			</a>
		</li>
		{{/item}}
	</ul>
</div>
{{/floor}}