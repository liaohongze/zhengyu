require(['until', 'swiper'], function (until, Swiper) {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 3000
  });
  var morenselecttop      //弹窗打开默认选择 标题索引
  var morenselectcontainer;  //弹窗打开默认选择 内容索引
  var dantuoindex;
  // 福建11选5
  $(document).on('click', '.xialachoose', function () {
    until.tc1();
    $('body').removeClass('selected');
    if (morenselecttop == 999) {
      $('.commoncontent div').eq(0).removeClass('select');
    }
    if (dantuoindex == 0 || dantuoindex == 1) {
      $('.dantuocontent div').eq(dantuoindex).addClass('select').siblings().removeClass('select');
    }
    else {
      $('.commoncontent div').eq(morenselecttop).addClass('select').siblings().removeClass('select');
    }
  })

  //快3
  $(document).on('click', '.kuai3xialachoose', function () {
    until.tc2();
    if (morenselecttop == 999) {
      $('.commoncontent div').eq(0).removeClass('select');
    }
    if (dantuoindex == 0 || dantuoindex == 1) {
      $('.dantuocontent div').eq(dantuoindex).addClass('select').siblings().removeClass('select');
    }
    else {
      $('.commoncontent div').eq(morenselecttop).addClass('select').siblings().removeClass('select');
    }
  })



  $(document).on('click', '.Toback', function () {
    window.history.back();
  })


  // 点击选中选项  普通
  $(document).on('click', '.commoncontent div', function () {

    // 11选5玩法显示内容说明
    // 第一种玩法只有一组单选数据  将dierzhongwanfa 这个类名再加上一个 isnone 这个类名 隐藏即可
    // 如果是第二种玩法,有胆拖和选号的, 将diyizhongwanfa这个类名再加上 isnone 这个类名隐藏即可
    $('.diyizhongwanfa .number div').removeClass('selected')
    $('.dierzhongwanfa .number div').removeClass('selected')
    $('.disanzhongwanfa .number div').removeClass('selected')
    $('.disizhongwanfa .number div').removeClass('selected');
    $('.sanbutonghao .number div').removeClass('selected');
    $('.butonghao .number div').removeClass('selected');
    $('.hezhi .number div').removeClass('selected');
    $('.caiduizi .number div').removeClass('selected');
    $('.caishunzi .number div').removeClass('selected');
    $('.caibaozi .number div').removeClass('selected');
    morenselecttop = $(this).index();
    $(this).addClass('select');
    var popValue = $(this).find('span').attr('data-value');
    var poptitle = $(this).find('span').text();
    $('.xialachoose p').text('普通' + poptitle); //11选5标题
    $('.kuai3xialachoose p').text('普通' + poptitle); //快3标题
    if (popValue === '1') { //11选5 显示数据

      $('.diyizhongwanfa').removeClass('isnone');
      $('.dierzhongwanfa').addClass('isnone');
      $('.disanzhongwanfa').addClass('isnone');
      $('.disizhongwanfa').addClass('isnone');
    }
    if (popValue === '2') {
      $(this).removeClass('selected')
      $('.diyizhongwanfa').addClass('isnone');
      $('.dierzhongwanfa').addClass('isnone');
      $('.disanzhongwanfa').addClass('isnone');
      $('.disizhongwanfa').removeClass('isnone');
    }
    if (popValue === '3') {
      $(this).removeClass('selected');
      $('.diyizhongwanfa').addClass('isnone');
      $('.dierzhongwanfa').addClass('isnone');
      $('.disanzhongwanfa').removeClass('isnone');
      $('.disizhongwanfa').addClass('isnone');
    }
    if (morenselecttop == 0) { //三不同号
      $('.playnumberdiv').eq(0).removeClass('isnone').siblings().addClass('isnone');
      $('.playnumberdiv').eq(0).find('.container_title p').text('猜中3个不同号码即中奖');
    }
    if (morenselecttop == 1) {  //两不同号
      $('.playnumberdiv').eq(0).removeClass('isnone').siblings().addClass('isnone');
      $('.playnumberdiv').eq(0).find('.container_title p').text('猜中2个不同号码即中奖');
    }
    else if (morenselecttop == 2) { //和值
      $('.playnumberdiv').eq(1).removeClass('isnone').siblings().addClass('isnone');
    }
    else if (morenselecttop == 3) { //猜对子
      $('.playnumberdiv').eq(2).removeClass('isnone').siblings().addClass('isnone');
    }
    else if (morenselecttop == 4) { //猜顺子
      $('.playnumberdiv').eq(3).removeClass('isnone').siblings().addClass('isnone');
    }
    else if (morenselecttop == 5) { //猜豹子
      $('.playnumberdiv').eq(4).removeClass('isnone').siblings().addClass('isnone');
    }
    dantuoindex = 999;
    layer.closeAll();
  })

  // 点击选中选项  胆拖
  $(document).on('click', '.dantuocontent div', function () {
    dantuoindex = $(this).index();
    $(this).addClass('select');
    var popValue = $(this).find('span').attr('data-value');
    var poptitle = $(this).find('span').text();
    $('.xialachoose p').text('胆拖' + poptitle);
    $('.kuai3xialachoose p').text('胆拖' + poptitle); //快3标题
    $('.diyizhongwanfa .number div').removeClass('selected')
    $('.dierzhongwanfa .number div').removeClass('selected')
    $('.disanzhongwanfa .number div').removeClass('selected')
    $('.disizhongwanfa .number div').removeClass('selected');
    $('.sanbutonghao .number div').removeClass('selected');
    $('.butonghao .number div').removeClass('selected');
    $('.hezhi .number div').removeClass('selected');
    $('.caiduizi .number div').removeClass('selected');
    $('.caishunzi .number div').removeClass('selected');
    $('.caibaozi .number div').removeClass('selected');
    if (popValue === '1') { //11选5 显示数据
      $('.diyizhongwanfa').removeClass('isnone');
      $('.dierzhongwanfa').addClass('isnone');
      $('.disanzhongwanfa').addClass('isnone');
      $('.disizhongwanfa').addClass('isnone');
    }
    if (popValue === '2') {
      $('.diyizhongwanfa').addClass('isnone');
      $('.dierzhongwanfa').removeClass('isnone');
      $('.disanzhongwanfa').addClass('isnone');
      $('.disizhongwanfa').addClass('isnone');
    }
    if (popValue === '3') {
      $('.diyizhongwanfa').addClass('isnone');
      $('.dierzhongwanfa').addClass('isnone');
      $('.disanzhongwanfa').removeClass('isnone');
      $('.disizhongwanfa').addClass('isnone');
    }
    if (dantuoindex == 0) { // 胆拖三不同号
      $('.playnumberdiv').eq(5).removeClass('isnone').siblings().addClass('isnone');
      $('.playnumberdiv').eq(5).find('.container_title').eq(0).find('p').text('胆码(选1-2个)');
      $('.playnumberdiv').eq(5).find('.container_title').eq(1).find('p').text('拖码(胆+拖≥3个)');
    }
    else if (dantuoindex == 1) { //胆拖二不同号
      $('.playnumberdiv').eq(5).removeClass('isnone').siblings().addClass('isnone');
      $('.playnumberdiv').eq(5).find('.container_title').eq(0).find('p').text('胆码(选一个)');
      $('.playnumberdiv').eq(5).find('.container_title').eq(1).find('p').text('拖码(胆+拖≥2个)');
    }
    morenselecttop = 999;
    layer.closeAll();
  })

  //选择号码
  $(document).on('click', '.number div', function () {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
      if ($(this).hasClass('sibling')) $(this).siblings().removeClass('selected');
    } else {
      $(this).addClass('selected');
      if ($(this).hasClass('sibling')) $(this).siblings().addClass('selected');
    }
  });

  //点击机选
  $(document).on('click', '.jixuan', function () {
    $(this).parent().addClass('isnone');
    $('.secondnav').removeClass('isnone');
  })
  // 点击清空
  $(document).on('click', '.qingkong', function () {
    $('div').removeClass('selected');
  })
  //点击取消
  $(document).on('click', '.quxiao', function () {
    $(this).parent().addClass('isnone');
    $('.firstnav').removeClass('isnone');
  })



  //足球头部选择玩法 区域 开始 ---------------
  $(document).on('click', '.football .tabtc div', function () {
    morenselecttop = $(this).index();
    $(this).addClass('selected').siblings().removeClass('selected');
    console.log($('.playrules').eq(morenselecttop))
    $('.topcontainer .playrules').eq(morenselecttop).removeClass('isnone').siblings().addClass('isnone');
  })
  $(document).on('click', '.football .playrules div', function () {
    morenselectcontainer = $(this).index();
    if ($(this).hasClass('select')) {
      layer.closeAll();
      // 对应内容显示隐藏
      $('.zuqiuwanfa').eq(morenselectcontainer).removeClass('isnone').siblings().addClass('isnone');
      $('.zuqiuxialachoose p').text(poptitle); //足球标题
    } else {
      $(this).addClass('select');
      var poptitle = $(this).find('span').text();
      $('.zuqiuxialachoose p').text(poptitle); //足球标题
      // 对应内容显示隐藏
      $('.zuqiuwanfa').eq(morenselectcontainer).removeClass('isnone').siblings().addClass('isnone');
      layer.closeAll();
    }
  })

  //选择号码
  $(document).on('click', '.datalist_team_rt_bottom div', function () {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected')
    } else {
      $(this).addClass('selected');
    }
    if ($(this).hasClass('rangshengfupeilv')) {
      $(this).removeClass('selected')
    }
  })

  $(document).on('click', '.morechoosetc img', function () {
    // layer.open({
    //   type: 1,
    //   closeBtn: 0, //不显示关闭按钮
    //   shadeClose: true, //开启遮罩关闭
    //   content: $('#morestc').prop("innerHTML")
    // });
    $('#morestc').removeClass('hidden');
    $('body').css('position', 'fixed');
  })

  // 比分弹窗
  $(document).on('click', '.datalist_team_rt_bottomtc', function () {
    $('#morestc1').removeClass('hidden');
    $('body').css('position', 'fixed');
  })

  // 半全场弹窗
  $(document).on('click', '.datalist_team_rt_bottomtc2', function () {
    $('#morestc2').removeClass('hidden');
    $('body').css('position', 'fixed');
  })
  // 取消按钮
  $(document).on('click', '.quxiaobtn', function () {
    $('#morestc').addClass('hidden');
    $('#morestc1').addClass('hidden');
    $('#morestc2').addClass('hidden');
    $('#morestc3').addClass('hidden');
    $('.samebiaoge div').removeClass('isselected')
  })

  // 确定按钮
  $(document).on('click', '.submitbtn', function () {
    $('#morestc').addClass('hidden');
    $('#morestc1').addClass('hidden');
    $('#morestc2').addClass('hidden');
    $('#morestc3').addClass('hidden');
    $('.samebiaoge div').removeClass('isselected');
  })

  $(document).on('click', '.opentc', function () {
    $('#morestc1').removeClass('hidden');
    var sureData = JSON.parse(window.localStorage.getItem('sureData'))
    var totalZhushu = 0, totalAmount = 0;

    sureData.forEach(item => {
      totalZhushu += item.zhushu
      totalAmount += item.amount
    });

    $('.total_amount').text(totalAmount)
    $('.total_zhushu').text(totalZhushu)

    $('body').css('position', 'fixed');
  })

  $(document).on('click', '.samebiaoge div', function () {
    if ($(this).hasClass('isselected')) {
      $(this).removeClass('isselected')
    } else {
      $(this).addClass('isselected');
    }
  })


  $(document).on('click', '.zuqiuxialachoose', function () {
    until.tc3();
    if (!morenselecttop) morenselecttop = 0;
    if (!morenselectcontainer) morenselectcontainer = 0;
    $('.tabtc div').eq(morenselecttop).addClass('selected').siblings().removeClass('selected');
    $('.topcontainer .playrules').eq(morenselecttop).removeClass('isnone').siblings().addClass('isnone');
    $('.topcontainer .playrules').eq(morenselecttop).find('div').eq(morenselectcontainer).addClass('select').siblings().removeClass('select');
  })
  //足球头部选择玩法 区域 结束 ---------------

  // 篮球开始
  $(document).on('click', '.basketball .playrules div', function () {
    morenselectcontainer = $(this).index();
    if ($(this).hasClass('select')) {
      layer.closeAll();
      // 对应内容显示隐藏
      $('.zuqiuwanfa').eq(morenselectcontainer).removeClass('isnone').siblings().addClass('isnone');
      $('.lanqiuxialachoose p').text(poptitle); //篮球标题
    } else {
      $(this).addClass('select');
      var poptitle = $(this).find('span').text();
      $('.lanqiuxialachoose p').text(poptitle); //篮球标题
      // 对应内容显示隐藏
      $('.zuqiuwanfa').eq(morenselectcontainer).removeClass('isnone').siblings().addClass('isnone');
      layer.closeAll();
    }
  })
  $(document).on('click', '.hunhetanchuang', function () {
    console.log(222222)
    $('#morestc3').removeClass('hidden');
    $('body').css('position', 'fixed');
  })

  $(document).on('click', '.lanqiuxialachoose', function () {
    until.tc5();
    if (!morenselecttop) morenselecttop = 0;
    if (!morenselectcontainer) morenselectcontainer = 0;
    $('.tabtc div').eq(morenselecttop).addClass('selected').siblings().removeClass('selected');
    $('.topcontainer .playrules').eq(morenselecttop).removeClass('isnone').siblings().addClass('isnone');
    $('.topcontainer .playrules').eq(morenselecttop).find('div').eq(morenselectcontainer).addClass('select').siblings().removeClass('select');
  })


  // 输入框左减右加

  var t = $(".zhuiqi #text_box1");
  $("#add1").click(function () {
    t.val(parseInt(t.val()) + 1)
    $('.period').text(parseInt(t.val()))
    setTotal();
  })
  $("#min1").click(function () {
    t.val(parseInt(t.val()) - 1)
    $('.period').text(parseInt(t.val()))
    setTotal();
  })
  function setTotal() {
    var tt = $("#text_box1").val();
    if (tt <= 0) {
      alert('输入的值错误！');
      t.val(parseInt(t.val()) + 1)
    }
  }

  var m = $(".zhuibei #text_box2");
  $("#add2").click(function () {
    m.val(parseInt(m.val()) + 1)
    $('.multiple').text(parseInt(m.val()))
    setTotal();
  })
  $("#min2").click(function () {
    m.val(parseInt(m.val()) - 1)
    $('.multiple').text(parseInt(m.val()))
    setTotal();
  })
  function setTotal() {
    var tm = $("#text_box2").val();
    if (tm <= 0) {
      alert('输入的值错误！');
      m.val(parseInt(m.val()) + 1)
    }
  }


  // 点击删除数据

  $(document).on('click', '.shanchudata', function () {
    $(this).parent().parent().remove();
  })

  //点击展开历史记录数据
  $(document).on('click', '.xialablock', function () {
    $(this).parent().parent().find('.historydatabottom').toggle(300);
  })
  $(document).on('click', '.openrule', function () {
    $('.rules').toggle(300);
  })
  // 倒计时
  var intDiff = parseInt(720);//倒计时总秒数量
  $(function () {
    until.timer(intDiff);
  });

  $('#bottom_content_col').scroll(function () {
    var left = $(this).scrollLeft();
    $('#title_content_col').scrollLeft(left);
    $('#preiod_content_col').scrollLeft(left);
  });

  $('#title_content_col').scroll(function () {
    var left = $(this).scrollLeft();
    $('#bottom_content_col').scrollLeft(left);
    $('#preiod_content_col').scrollLeft(left);
  });

  $('#preiod_content_col').scroll(function () {
    var left = $(this).scrollLeft();
    $('#bottom_content_col').scrollLeft(left);
    $('#title_content_col').scrollLeft(left);

    $('#period_title').scrollTop($(this).scrollTop());
  });

  $('#period_title').scroll(function () {
    $('#preiod_content_col').scrollTop($(this).scrollTop());
  });

  // $('#get_select_num').on('click', function() {
  //   var selects = $('.choosenumber .number .selected');
  //   selects.each(function(key, value) {
  //     $(value).attr('id');
  //     $(value).attr('value');
  //   });
  // });

  $('.change_type span').on('click', function () {
    var has = $(this).hasClass('active');
    if (!has) {
      $(this).siblings().removeClass('active')
      $(this).addClass('active');
    }
  })

  // 人工开户
  $(document).on('click', '.open_account_page .tab_triggle span', function() {
    if ($(this).hasClass('active')) return

    $(this).siblings().removeClass('active')
    $(this).siblings().find('img[alt="active"]').hide()
    $(this).siblings().find('img[alt="common"]').show()

    $(this).addClass('active')
    $(this).find('img[alt="active"]').show()
    $(this).find('img[alt="common"]').hide()

    $('.open_account_page form').hide()
    $('.open_account_page .' + $(this).data('type') + '_form').show()
  });
});

