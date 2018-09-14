
<div class="model close-btn">
	<div class="container-model">
		<div class="model-header">
			{{#isEdit}}
				<h3 class="header">编辑地址</h3>
			{{/isEdit}}
			{{^isEdit}}
				<h3 class="header">新增地址</h3>
			{{/isEdit}}
			
			<i class="fa fa-close close-btn"></i>
		</div>
		<div class="form-body">
				<div class="error-item">
					<i class="fa fa-minus-circle"></i>
					<span class="error-msg">error</span>
					
				</div>
				<div class="form-item">
					<label for="">
						<i class="fa fa-user"></i>
					</label>
					<input type="text" name="name" placeholder="请输入收货人姓名" class="username" value="{{data.name}}">
				</div>
				<div class="form-item selete">
					<label for="">
						<i class="fa fa-map-marker"></i>
					</label>
					<select name="province" class="selectAddress provinces">
						
					</select>	
					<select name="city" class="selectAddress cities">
						
					</select>
				</div>
				<div class="form-item ">
					<label for="">
						<i class="fa fa-map-marker"></i>
					</label>
					<input type="text" name="address" placeholder="请输入详细地址到门牌号" class="username" value="{{data.address}}">
				</div>
				<div class="form-item">
					<label for="">
						<i class="fa fa-phone"></i>
					</label>
					<input type="text" name="phone" placeholder="请输入手机号码" class="username" value="{{data.phone}}">
				</div>
				<div class="form-item">
					<label for="">
						<i class="fa fa-envelope"></i>
					</label>
					<input type="text" name="zip" placeholder="请输入邮编" class="username" value="{{data.zip}}">
				</div>
				<div class="btn" id="btn-submit">
					<a href="javascript:;">提交</a>
				</div>
		</div>

	</div>
</div>