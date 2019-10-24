define(['layer','jquery'], function() {

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
      ' <div><span>任选一</span></div>\n' +
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
//倒计时
    function timer(intDiff){
      window.setInterval(function(){
      var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值
      if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
      }else{//当时间耗尽，刷新页面
        window.location.reload();
      }
      if (minute <= 9) minute = '0' + minute;
      if (second <= 9) second = '0' + second;
      $(".daojishi").html(minute+'分'+second+'秒');
      intDiff--;
      }, 1000);
    }
  return{
    tc:tc,
    timer:timer
  }
})
