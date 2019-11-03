require(['jquery', 'layer'], function (jquery, layer) {
  console.log(JSON.parse(window.localStorage.getItem('sureData')))

  var listData = JSON.parse(window.localStorage.getItem('sureData'));
  var isSelectNumbersrc = [];
  var htmlList = '';
  var spanList = '';
  var totalZhushu = 0, totalAmount = 0;
  if (listData !== null) {
    if (listData.length) {
      for (var v = 0; v < listData.length; v++) {
        var i;
        for (i = 0; i < listData[v].totalNum; i++) {
          isSelectNumbersrc = isSelectNumbersrc.concat(listData[v].isSelectedData[i]);
          spanList += '<span>' + isSelectNumbersrc[i] + '</span>\n';
          // console.log(spanList)
        }
        htmlList += '<div class="xuanzhu">\n' +
          '<div class="lf"><p>\n' +
          spanList +
          '</p><p>' + listData[v].ischangeName + listData[v].singleOrDouble + listData[v].zhushu + '注' + listData[v].amount + '元</p>\n' +
          '</div> <div class="rt"> <img src="../images/index/close-ico.png" class="shanchudata" alt=""></div>\n' +
          '<div class="clear"></div></div>';
        isSelectNumbersrc = [];
        spanList = '';

        // 计算总注数和总金额
        totalZhushu += listData[v].zhushu;
        totalAmount += listData[v].amount;
      }

      $('.total_amount').text(totalAmount);
      $('.total_zhushu').text(totalZhushu);
    }
  }


  $('.touzhucontainercenter').append(htmlList);

  Array.prototype.remove = function (value) {
    var len = this.length;
    for (var i = 0, n = 0; i < len; i++) { //把出了要删除的元素赋值给新数组
      if (this[i] != value) {
        this[n++] = this[i];
      } else {
        console.log(i); //测试所用
      }
    }
    this.length = n;
  };
  $(document).on('click', '.shanchudata', function () {
    var deleteIndex = $(this).parent().parent().index();
    var newlistdata = listData.splice(deleteIndex, 1);
    listData.remove(newlistdata)
    window.localStorage.setItem("sureData", JSON.stringify(listData));
  })



  function test() {
    var adr = [];
    for (var i = 0; i < listData.length; i++) {
      for (var j = 0; j < listData[i].isSelectedData[0].length; j++) {
        var srcnew1 = listData[i].isSelectedData[0].join(' ');
      }
      for (var v = 0; v < listData[i].isSelectedData[1].length; v++) {
        var srcnew2 = listData[i].isSelectedData[1].join(' ');
      }
      if (listData[i].isSelectedData[2] != null) {
        for (var k = 0; k < listData[i].isSelectedData[2].length; k++) {
          var srcnew3 = listData[i].isSelectedData[2].join(' ');
        }
      }
      if (srcnew1 == undefined) {
        srcnew1 = ""
      } else {
        srcnew1
      }
      if (srcnew2 == undefined) {
        srcnew2 = ""
      } else {
        srcnew2
      }
      if (srcnew3 == undefined) {
        srcnew3 = ""
      } else {
        srcnew3
      }
      var tijiaoObj = {};
      //判断srcnew1,srcnew2,srcnew3是否为空
      var ball = srcnew1 + '#' + srcnew2 + '#' + srcnew3;
      if (srcnew1 != "" && srcnew2 != "" && srcnew3 != "") {
        ball = srcnew1 + '#' + srcnew2 + '#' + srcnew3;
      }
      else if (srcnew1 == "" && srcnew2 != "" && srcnew3 != "") {
        ball = srcnew2 + '#' + srcnew3;
      }
      else if (srcnew1 != "" && srcnew2 == "" && srcnew3 != "") {
        ball = srcnew1 + '#' + srcnew3;
      }
      else if (srcnew1 != "" && srcnew2 != "" && srcnew3 == "") {
        ball = srcnew1 + '#' + srcnew2;
      }
      else if (srcnew1 != "" && srcnew2 == "" && srcnew3 == "") {
        ball = srcnew1;
      }
      else if (srcnew1 == "" && srcnew2 != "" && srcnew3 == "") {
        ball = srcnew2;
      }
      else if (srcnew1 == "" && srcnew2 == "" && srcnew3 != "") {
        ball = srcnew3;
      }
      tijiaoObj.winType = listData[i].ischangeName;
      tijiaoObj.ball = ball;
      tijiaoObj.betNum = listData[i].zhushu;
      tijiaoObj.balance = listData[i].amount;
      tijiaoObj.betMul = parseInt($('#text_box2').val());
      tijiaoObj.betType = listData[i].singleOrDouble;
      adr.push(tijiaoObj);
    }
    var betData = adr;
    var lotteryType = $("#lotteryType").html();
    var paramData = { "betData": JSON.stringify(betData), "lotteryType": lotteryType };
    var paramJson = JSON.stringify(paramData);
    $.ajax({
      url: "/bc/front/commonBetDetail/saveBet",    //请求的url地址
      dataType: "json",   //返回格式为json
      async: true,//请求是否异步，默认为异步，这也是ajax重要特性
      data: paramData,    //参数值
      type: "POST",   //请求方式
      //contentType: "application/json",
      success: function (result) {
        if (result.success) {
          layer.open({
            content: '下注成功',
            skin: 'msg',
            time: 2
          });
          //homeTypeClick('order');
          window.localStorage.removeItem('sureData')
          homeTypeClick('order')
        } else {
          layer.open({
            content: result.msg,
            skin: 'msg',
            time: 2
          });
        }
      }
    });
  }
  $(document).on('click', '.opensubmit', function () {
    test();
  })
})
