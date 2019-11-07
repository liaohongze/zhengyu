require(['jquery', 'layer'], function (jquery, layer) {
	var gameType = getQueryVariable('type');
	var orderList = JSON.parse(window.localStorage.getItem(gameType + 'Data'));

	if (gameType === 'shengpingfu') shengpingfuOrderFlow();

	if (gameType === 'rangfenshengfu') rangfenshengfuOrderFlow();

	if (gameType === 'bifenwanfa') bifenwanfaOrderFlow();

	if (gameType === 'banquanchang') banquanchangOrderFlow();

	if (gameType === 'zongjinqiu') zongjinqiuOrderFlow();

	function shengpingfuOrderFlow() {
		setCommonHtml();
	}

	function rangfenshengfuOrderFlow() {
		setCommonHtml();
	}

	function bifenwanfaOrderFlow() {
		setOtherHtml();
	}

	function banquanchangOrderFlow() {
		setOtherHtml();
	}

	function zongjinqiuOrderFlow() {
		setCommonHtml(true);
	}

	function setCommonHtml(doubleRow) {
		var html = '';

		orderList.forEach(function(item, index) {
			if (!item) return;
			html += '<li>' +
			'<div class="info">' +
			'<p>' +
			'<i class="home_name">' + item.teamName[0] + '</i>' +
			'<span>VS</span>' +
			'<i class="visit_name">' + item.teamName[1] + '</i>' +
			'</p>' +
			'<div class="datalist_team_rt_bottom_wrap">' +
			(!doubleRow ? '<div class="datalist_team_rt_bottom">' : '') +
			item.html + 
			(!doubleRow ? '</div>' : '') +
			'</div>' +
			'</div>' +
			'<img src="../images/index/close-ico.png" alt="close" index="' + index + '">' +
			'</li>';
		});

		$('.football_order_page .order_list').html(html);
	}

	function setOtherHtml() {
		var html = '';

		orderList.forEach(function(item, index) {
			if (!item) return;
			html += '<li>' +
			'<div class="info">' +
			'<p>' +
			'<i class="home_name">' + item.teamName[0] + '</i>' +
			'<span>VS</span>' +
			'<i class="visit_name">' + item.teamName[1] + '</i>' +
			'</p>' +
			'<div class="selected_info">' +
			item.selectStr +
			'</div>' +
			'</div>' +
			'<img src="../images/index/close-ico.png" alt="close" index="' + index + '">' +
			'</li>';
		});

		$('.football_order_page .other_order_list').html(html);
	}

	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (pair[0] === variable) { return pair[1]; }
		}
		return (false);
	}

	$(document).on('click', '.football_order_page img[alt="close"]', function() {
		var index = $(this).attr('index');
		var types1 = ['shengpingfu', 'rangfenshengfu', 'zongjinqiu'];

		orderList.splice(index, 1);
		window.localStorage.setItem(gameType + 'Data', JSON.stringify(orderList));

		if (types1.includes(gameType)) {
			if (gameType === 'zongjinqiu') {
				setCommonHtml(true);
			} else {
				setCommonHtml();
			}
		} else {
			setOtherHtml();
		}
	});
});