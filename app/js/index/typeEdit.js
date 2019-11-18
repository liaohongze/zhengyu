require(['jquery'], function (jquery) {
  /**初始化 开始 */
  var showList = [
    {
      imgUrl: '../images/index/zuqiu.jpg',
      name: '竞彩足球',
      id: 1
    },
    {
      imgUrl: '../images/index/zuqiu.jpg',
      name: '竞彩足球2',
      id: 2
    }
  ];

  var hideList = [];

  setShowList();
  setHideList();
  /**初始化 结束 */

  /**点击已显示彩种上的减号 */
  $(document).on('click', '.list_show span', function () {
    var id = parseInt($(this).attr('data-id')), index = null, obj = {};

    showList.forEach(function (item, i) {
      if (item.id === id) {
        index = i;
        obj = JSON.parse(JSON.stringify(item));
      }
    });

    if (index !== null) {
      showList.splice(index, 1);
      hideList.push(obj);

      setShowList();
      setHideList();
    }
  });

  /**点击已隐藏彩种上的加号 */
  $(document).on('click','.list_hide span', function () {
    var id = parseInt($(this).attr('data-id')), index = null, obj = {};

    hideList.forEach(function (item, i) {
      if (item.id === id) {
        index = i;
        obj = JSON.parse(JSON.stringify(item));
      }
    });

    if (index !== null) {
      hideList.splice(index, 1);
      showList.push(obj);

      setShowList();
      setHideList();
    }
  });

  /**点击右上角的确定按钮，请求接口，把showList、hideList传到后台 */
  $(document).on('click', '.type_edit_page .right_side', function() {

  });

  function setShowList() {
    var showHtml = '';

    showList.forEach(function (item) {
      showHtml += '<li>' +
        '<img src="' + item.imgUrl + '" alt="">' +
        '<p>' + item.name + '</p>' +
        '<span data-id="' + item.id + '">-</span>' +
        '</li>';
    });

    $('.list_show').html(showHtml);
  }

  function setHideList() {
    var hideHtml = '';

    hideList.forEach(function (item) {
      hideHtml += '<li>' +
        '<img src="' + item.imgUrl + '" alt="">' +
        '<p>' + item.name + '</p>' +
        '<span data-id="' + item.id + '">+</span>' +
        '</li>';
    });

    $('.list_hide').html(hideHtml);
  }
});