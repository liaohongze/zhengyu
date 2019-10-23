require(['jquery', 'swiper', 'layer'], function (juqery, Swiper, layer) {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 3000
  });

  // 福建11选5
  $(document).on('click', '.xialachoose', function () {
    tc(1)
  })

  $(document).on('click', '.Toback', function () {
    window.history.back();
  })
  // 点击选中选项  普通
  $(document).on('click', '.commoncontent div', function () {
    if ($(this).hasClass('select')) {
      $(this).removeClass('select')
    } else {
      $(this).addClass('select')
    }
  })

  // 点击选中选项  胆拖
  $(document).on('click', '.dantuocontent div', function () {
    if ($(this).hasClass('select')) {
      $(this).removeClass('select')
    } else {
      $(this).addClass('select')
    }
  })

  // 封装弹窗
  function tc(number) {
    layer.open({
      type: 1,
      skin: 'myskin', //样式类名
      closeBtn: 0, //不显示关闭按钮
      anim: 2,
      shadeClose: true, //开启遮罩关闭
      content: '<div class="tc1">\n' +
      ' <p class="commontitle">普通:</p>\n' +
      ' <div class="commoncontent">\n' +
      ' <div class="select"><span>任选一</span></div>\n' +
      '<div><span>任选二</span></div>\n' +
      ' <div><span>任选三</span></div>\n' +
      '<div><span>任选四</span></div>\n' +
      '<div><span>任选五</span></div>\n' +
      '<div><span>任选六</span></div>\n' +
      '<div><span>任选七</span></div>\n' +
      '<div><span>任选八</span></div>\n' +
      '<div><span>前二直选</span></div>\n' +
      '<div><span>前二组选</span></div>\n' +
      '<div><span>前三直选</span></div>\n' +
      '<div><span>前四组选</span></div>\n' +
      '<div><span>乐选三</span></div>\n' +
      '<div><span>乐选四</span></div>\n' +
      '<div><span>乐选五</span></div></div>\n' +
      ' <p class="commontitle">胆拖:</p>\n' +
      ' <div class="dantuocontent">\n' +
      ' <div class="select"><span>任选一</span></div>\n' +
      '<div><span>任选二</span></div>\n' +
      ' <div><span>任选三</span></div>\n' +
      '<div><span>任选四</span></div>\n' +
      '<div><span>任选五</span></div>\n' +
      '<div><span>任选六</span></div>\n' +
      '<div><span>任选七</span></div>\n' +
      '<div><span>任选八</span></div>\n' +
      '<div><span>前二直选</span></div>\n' +
      '<div><span>前二组选</span></div>\n' +
      '<div><span>前三直选</span></div>'
    });
  }
})
