require(['jquery', 'layer'], function (jquery, layer) {
	var pageNum = 1;
	var pageSize = 10;
	morelist(pageNum, pageSize);

	function morelist(pageNum, pageSize) {
		var instance = layer.load(1, {
			shade: [0.5,'#000'] //0.1透明度的白色背景
		});
		$.ajax({
			url: '/index/ajax_more_designer',
			data: {
				pageNum: pageNum,
				pageSize: pageSize,
			},
			type: 'POST',
			success: function (res) {
				if (res.code !== 200) {
					console.log('数据异常');
					return;
				}

				if (!res.data || !res.data.list || res.data.list.length === 0) {
					return;
				}
				//页面加载完成判断是否存在数据，没有数据隐藏加载更多按钮，显示没有更多数据
				if (res.data.list.length === 0) {
					$('#add_more_btn').hide();
					$('.no_more_data').show();
				}
				var html = '';
				for (var i = 0; i < res.data.list.length; i++) {
					html +=
						('<li>' +
							'<div class="info">' +
							'<h3>层级：tt1500</h3>' +
							'<p>' +
							'用户名：tt1500(玩家)' +
							'<span>奖金组：1500</span>' +
							'</p>' +
							'<p>余额：0.00</p>' +
							'<p>最后登录：2019-10-19 20:29:38</p>' +
							'</div>' +
							'<button>升级</button>' +
							'<button>账变</button>' +
							'</li>');
				}
				//判断数据的长度，是否显示加载更多数据
				$('.team_manage_page').find('ul').append(html);
				pageNum += 1;

				// res.total为总条数

				// 总页数
				var totalPage = Math.ceil(res.total / pageSize);
				if (pageNum >= totalPage) {
					$('#add_more_btn').hide();
					$('.no_more_data').show();
				}
			}
		});
	}
	$('#btn').on('click', function (e) {
		e.preventDefault();
		morelist(pageNum, pageSize);
	});
});

