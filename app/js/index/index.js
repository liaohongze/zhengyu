require(['until','swiper'], function (until, Swiper) {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 3000
  });

  // 福建11选5
  $(document).on('click', '.xialachoose', function () {
    until.tc1()
  })

  //快3
   $(document).on('click', '.kuai3xialachoose', function () {
    until.tc2()
  })

  $(document).on('click', '.Toback', function () {
    window.history.back();
  })
  // 点击选中选项  普通
  $(document).on('click', '.commoncontent div', function () {
    if ($(this).hasClass('select')) {
      $(this).removeClass('select')
    } else {
      $(this).addClass('select');
      var poptitle =  $(this).find('span').text();
      $('.xialachoose p').text('普通'+ poptitle); //11选5标题
      $('.kuai3xialachoose p').text(poptitle); //快3标题
      // 第一种玩法只有一组单选数据  将dierzhongwanfa 这个类名再加上一个 isnone 这个类名 隐藏即可
      // 如果是第二种玩法,有胆拖和选号的, 将diyizhongwanfa这个类名再加上 isnone 这个类名隐藏即可

      if(poptitle === '前二组选'){ //11选5 两组显示数据
        $('.diyizhongwanfa').addClass('isnone');
        $('.dierzhongwanfa').removeClass('isnone');
      }else{
         $('.dierzhongwanfa').addClass('isnone');
        $('.diyizhongwanfa').removeClass('isnone');
      }

      if(poptitle == '三不同号'){

      }
      layer.closeAll();
    }
  })

  // 点击选中选项  胆拖
  $(document).on('click', '.dantuocontent div', function () {
    if ($(this).hasClass('select')) {
      $(this).removeClass('select')
    } else {
      $(this).addClass('select');
      var poptitle =  $(this).find('span').text();
      $('.xialachoose p').text('胆拖'+ poptitle);
      $('.kuai3xialachoose p').text(poptitle); //快3标题
       layer.closeAll();
    }
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
  //点击展开历史记录数据
   $(document).on('click', '.xialablock', function () {
    $('.historydatabottom').toggle(300);
  })
    $(document).on('click', '.openrule', function () {
    $('.rules').toggle(300);
  })
  // 倒计时
    var intDiff = parseInt(720);//倒计时总秒数量
    $(function(){
      until.timer(intDiff);
    });
})
