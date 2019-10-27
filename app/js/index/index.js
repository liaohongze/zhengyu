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
    until.tc1()
  })

  //快3
   $(document).on('click', '.kuai3xialachoose', function () {
    until.tc2();
     if(morenselecttop == 999){
        $('.commoncontent div').eq(0).removeClass('select');
    }
    if(dantuoindex == 0 || dantuoindex == 1){
       $('.dantuocontent div').eq(dantuoindex).addClass('select').siblings().removeClass('select');
    }
    else{
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

      morenselecttop = $(this).index();
      $(this).addClass('select');
      var poptitle = $(this).find('span').text();
      $('.xialachoose p').text('普通' + poptitle); //11选5标题
      $('.kuai3xialachoose p').text(poptitle); //快3标题
      if(poptitle === '前二组选'){ //11选5 两组显示数据
        $('.diyizhongwanfa').addClass('isnone');
        $('.dierzhongwanfa').removeClass('isnone');
      } else {
        $('.dierzhongwanfa').addClass('isnone');
        $('.diyizhongwanfa').removeClass('isnone');
      }
      if(morenselecttop == 1){  //两不同号
        $('.playnumberdiv').eq(0).removeClass('isnone').siblings().addClass('isnone');
        $('.playnumberdiv').eq(0).find('.container_title p').text('猜中2个不同号码即中奖');
      }
     else if( morenselecttop == 2){ //和值
        $('.playnumberdiv').eq(1).removeClass('isnone').siblings().addClass('isnone');
     }
    else if( morenselecttop == 3){ //猜对子
        $('.playnumberdiv').eq(2).removeClass('isnone').siblings().addClass('isnone');
     }
    else if( morenselecttop == 4){ //猜顺子
        $('.playnumberdiv').eq(3).removeClass('isnone').siblings().addClass('isnone');
     }
    else if( morenselecttop == 5){ //猜豹子
    $('.playnumberdiv').eq(4).removeClass('isnone').siblings().addClass('isnone');
     }
      dantuoindex = 999;
      layer.closeAll();
  })

  // 点击选中选项  胆拖
  $(document).on('click', '.dantuocontent div', function () {
       dantuoindex = $(this).index();
      $(this).addClass('select');
      var poptitle = $(this).find('span').text();
      $('.xialachoose p').text('胆拖' + poptitle);
      $('.kuai3xialachoose p').text(poptitle); //快3标题
       if( dantuoindex == 0){ // 胆拖三不同号
      $('.playnumberdiv').eq(5).removeClass('isnone').siblings().addClass('isnone');
      $('.playnumberdiv').eq(5).find('.container_title').eq(0).find('p').text('胆码(选1-2个)');
      $('.playnumberdiv').eq(5).find('.container_title').eq(1).find('p').text('拖码(胆+拖≥3个)');
     }
       else if( dantuoindex == 1){ //胆拖二不同号
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
      $(this).removeClass('selected')
    } else {
      $(this).addClass('selected');
    }
  })

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
  $(document).on('click', '.tabtc div', function () {
    morenselecttop = $(this).index();
    $(this).addClass('selected').siblings().removeClass('selected');
    console.log($('.playrules').eq(morenselecttop))
    $('.topcontainer .playrules').eq(morenselecttop).removeClass('isnone').siblings().addClass('isnone');
  })
  $(document).on('click', '.playrules div', function () {
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
})
console.log($('#morestc'))

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
 $(document).on('click','.quxiaobtn',function(){
     $('#morestc').addClass('hidden');
       $('#morestc1').addClass('hidden');
        $('#morestc2').addClass('hidden');
        $('.samebiaoge div').removeClass('isselected')
  })

  // 确定按钮
   $(document).on('click','.submitbtn',function(){
     $('#morestc').addClass('hidden');
     $('#morestc1').addClass('hidden');
    $('#morestc2').addClass('hidden');
     $('.samebiaoge div').removeClass('isselected');
  })

   $(document).on('click','.samebiaoge div',function(){
     if ($(this).hasClass('isselected')) {
      $(this).removeClass('isselected')
    } else {
      $(this).addClass('isselected');
    }
  })


  $(document).on('click', '.zuqiuxialachoose', function () {
    until.tc3();
    if(!morenselecttop) morenselecttop=0;
    if(!morenselectcontainer)morenselectcontainer=0;
    $('.tabtc div').eq(morenselecttop).addClass('selected').siblings().removeClass('selected');
    $('.topcontainer .playrules').eq(morenselecttop).removeClass('isnone').siblings().addClass('isnone');
    $('.topcontainer .playrules').eq(morenselecttop).find('div').eq(morenselectcontainer).addClass('select').siblings().removeClass('select');


  })
  //足球头部选择玩法 区域 结束 ---------------


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

  $('.trend_wrap .bottom_table .content_col').scroll(function() {
    var left = $(this).scrollLeft();
    $('.trend_wrap .top_table .top_title .content_col').scrollLeft(left);
    $('.trend_wrap .top_table .period_content .content_col').scrollLeft(left);
  });

  $('.trend_wrap .top_table .top_title .content_col').scroll(function() {
    var left = $(this).scrollLeft();
    $('.trend_wrap .bottom_table .content_col').scrollLeft(left);
    $('.trend_wrap .top_table .period_content .content_col').scrollLeft(left);
  });

  $('.trend_wrap .top_table .period_content .content_col').scroll(function() {
    var left = $(this).scrollLeft();
    $('.trend_wrap .bottom_table .content_col').scrollLeft(left);
    $('.trend_wrap .top_table .top_title .content_col').scrollLeft(left);

    var top = $(this).scrollTop();
    $('.trend_wrap .top_table .period_content .title').scrollTop(top);
  });

  $('.trend_wrap .top_table .period_content .title').scroll(function() {
    var top = $(this).scrollTop();
    $('.trend_wrap .top_table .period_content .content_col').scrollTop(top);
  });
});

