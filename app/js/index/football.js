require(['jquery', 'layer'], function (jquery, layer) {
	$(document).on('click', '#football_goto_confirm', function () {
		var gameType = $('.zuqiuxialachoose p').attr('game-type');

		if (gameType === 'shengpingfu') shengpingfuFlow();

		if (gameType === 'rangfenshengfu') rangfenshengfuFlow();

		if (gameType === 'zongjinqiu') zongjinqiuFlow();
	});

	function shengpingfuFlow() {
		var takeOrderList = [];

		var array = $('.shengpingfu .datalist_team_rt');
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

	function rangfenshengfuFlow() {
		var takeOrderList = [];

		var array = $('.rangfenshengfu .datalist_team_rt');
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

	function zongjinqiuFlow() {
		var takeOrderList = [];

		var array = $('.zongjinqiu .datalist_team_rt');
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
});