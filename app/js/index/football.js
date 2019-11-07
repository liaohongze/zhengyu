require(['jquery', 'layer'], function (jquery, layer) {
	$(document).on('click', '#football_goto_confirm', function () {
		var gameType = $('.zuqiuxialachoose p').attr('game-type');

		if (gameType === 'shengpingfu') shengpingfuFlow();

		if (gameType === 'rangfenshengfu') rangfenshengfuFlow();

		if (gameType === 'bifenwanfa') bifenwanfaFlow();

		if (gameType === 'banquanchang') banquanchangFlow();

		if (gameType === 'zongjinqiu') zongjinqiuFlow();
	});

	// 胜平负流程
	function shengpingfuFlow() {
		var takeOrderList = [];

		var array = $('.shengpingfu .datalist_team_rt');

		if (!array.length) {
			layer.open({
        content: '选择不能为空',
        skin: 'msg',
        time: 2
      });
			return;
		}

		for (var index = 0; index < array.length; index++) {
			var selectList = $(array[index]).find('.datalist_team_rt_bottom .selected');
			if (!selectList.length) continue;

			takeOrderList.push({
				html: $(array[index]).find('.datalist_team_rt_bottom').html(),
				teamName: [$(array[index]).find('.datalist_team_rt_top span:first').text(), $(array[index]).find('.datalist_team_rt_top span:last').text()]
			});
		}

		window.localStorage.setItem('shengpingfuData', JSON.stringify(takeOrderList));
		location.href = './footballOrder.html?type=shengpingfu';
	}

	// 让分胜平负流程
	function rangfenshengfuFlow() {
		var takeOrderList = [];

		var array = $('.rangfenshengfu .datalist_team_rt');

		if (!array.length) {
			layer.open({
        content: '选择不能为空',
        skin: 'msg',
        time: 2
      });
			return;
		}
		for (var index = 0; index < array.length; index++) {
			var selectList = $(array[index]).find('.datalist_team_rt_bottom .selected');
			if (!selectList.length) continue;

			takeOrderList.push({
				html: $(array[index]).find('.datalist_team_rt_bottom').html(),
				teamName: [$(array[index]).find('.datalist_team_rt_top span:first').text(), $(array[index]).find('.datalist_team_rt_top span:last').text()]
			});
		}

		window.localStorage.setItem('rangfenshengfuData', JSON.stringify(takeOrderList));
		location.href = './footballOrder.html?type=rangfenshengfu';
	}

	// 比分流程
	function bifenwanfaFlow() {
		var takeOrderList = [];
		var array = $('.bifenwanfa .historydatabottom');

		for(var i = 0; i < array.length; i++) {
			var $item = $(array[i]);
			var	$span = $item.find('.datalist_team_rt_bottomtc span').text();

			if ($span !== '点击展开投注区') {
				takeOrderList.push({
					teamName: [
						$item.find('.datalist_team_rt_top span:first').text(),
						$item.find('.datalist_team_rt_top span:last').text()
					],
					selectStr: $span
				});
			}
		}

		if (!takeOrderList.length) {
			layer.open({
        content: '选择不能为空',
        skin: 'msg',
        time: 2
      });
			return;
		}

		window.localStorage.setItem('bifenwanfaData', JSON.stringify(takeOrderList));
		location.href = './footballOrder.html?type=bifenwanfa';
	}

	// 半全场流程
	function banquanchangFlow() {
		var takeOrderList = [];
		var array = $('.banquanchangcontainer .historydatabottom');

		for(var i = 0; i < array.length; i++) {
			var $item = $(array[i]);
			var	$span = $item.find('.datalist_team_rt_bottomtc2 span').text();

			if ($span !== '点击展开投注区') {
				takeOrderList.push({
					teamName: [
						$item.find('.datalist_team_rt_top span:first').text(),
						$item.find('.datalist_team_rt_top span:last').text()
					],
					selectStr: $span
				});
			}
		}

		if (!takeOrderList.length) {
			layer.open({
        content: '选择不能为空',
        skin: 'msg',
        time: 2
      });
			return;
		}

		window.localStorage.setItem('banquanchangData', JSON.stringify(takeOrderList));
		location.href = './footballOrder.html?type=banquanchang';
	}

	// 总进球流程
	function zongjinqiuFlow() {
		var takeOrderList = [];

		var array = $('.zongjinqiu .datalist_team_rt');

		if (!array.length) {
			layer.open({
        content: '选择不能为空',
        skin: 'msg',
        time: 2
      });
			return;
		}
		for (var index = 0; index < array.length; index++) {
			var selectList = $(array[index]).find('.datalist_team_rt_bottom_wrap .selected');
			if (!selectList.length) continue;

			takeOrderList.push({
				html: $(array[index]).find('.datalist_team_rt_bottom_wrap').html(),
				teamName: [$(array[index]).find('.datalist_team_rt_top span:first').text(), $(array[index]).find('.datalist_team_rt_top span:last').text()]
			});
		}

		window.localStorage.setItem('zongjinqiuData', JSON.stringify(takeOrderList));
		location.href = './footballOrder.html?type=zongjinqiu';
	}

	// 比分的弹窗点击
	$('#morestc1 .submitbtn').on('click', function () {
		var arr = $('#morestc1 .samebiaoge .isselected p');
		if (arr.length) {
			var string = [];
			for (var i = 0; i < arr.length; i++) {
				string.push($(arr[i]).text());
			}

			$('.bifenwanfa .datalist_team_rt_bottomtc[data-id="' + $('#morestc1').attr('data-id') + '"] span').html(string.join(','));
		} else {
			$('.bifenwanfa .datalist_team_rt_bottomtc[data-id="' + $('#morestc1').attr('data-id') + '"] span').html('点击展开投注区');
		}
	});

	// 半全场的弹窗点击
	$('#morestc2 .submitbtn').on('click', function () {
		var arr = $('#morestc2 .samebiaoge .isselected p');
		if (arr.length) {
			var string = [];
			for (var i = 0; i < arr.length; i++) {
				string.push($(arr[i]).text());
			}

			$('.banquanchang .datalist_team_rt_bottomtc2[data-id="' + $('#morestc2').attr('data-id') + '"] span').html(string.join(','));
		} else {
			$('.banquanchang .datalist_team_rt_bottomtc2[data-id="' + $('#morestc2').attr('data-id') + '"] span').html('点击展开投注区');
		}
	});
});