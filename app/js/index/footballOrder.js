require(['jquery', 'layer'], function (jquery, layer) {
	var gameType = getQueryVariable('type');

	if (gameType === 'shengpingfu') shengpingfuOrderFlow();

	if (gameType === 'rangfenshengfu') rangfenshengfuOrderFlow();

	if (gameType === 'zongjinqiu') zongjinqiuOrderFlow();

	function shengpingfuOrderFlow() {
		setCommonHtml();
	}

	function rangfenshengfuOrderFlow() {
		setCommonHtml();
	}

	function zongjinqiuOrderFlow() {
		setCommonHtml(true);
	}

	function setCommonHtml(doubleRow) {
		var orderList = JSON.parse(window.localStorage.getItem(gameType + 'Data'));
		var html = '';

		orderList.forEach(function(item) {
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
			'<img src="../images/index/close-ico.png" alt="close">' +
			'</li>';
		});

		$('.football_order_page .order_list').html(html);
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
});