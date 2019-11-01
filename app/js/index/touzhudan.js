require(['jquery', 'layer'], function(jquery, layer) {
  console.log(JSON.parse(window.localStorage.getItem('sureData')))

  var listData = JSON.parse(window.localStorage.getItem('sureData'));
  var isSelectNumbersrc = [];
  var htmlList = '';
  var spanList = '';
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
        '</p><p>' + listData[v].ischangeName + '</p>\n' +
        '</div> <div class="rt"> <img src="../images/index/close-ico.png" class="shanchudata" alt=""></div>\n' +
        '<div class="clear"></div></div>';
      isSelectNumbersrc = [];
      spanList = '';
    }
  }

  $('.touzhucontainercenter').append(htmlList);

  Array.prototype.remove = function(value) {
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
  $(document).on('click', '.shanchudata', function() {
    var deleteIndex = $(this).parent().parent().index();
    var newlistdata = listData.splice(deleteIndex, 1);
    listData.remove(newlistdata)
    window.localStorage.setItem("sureData", JSON.stringify(listData));
  })



  function test(){
    var adr= [];
    for(var i = 0;i<listData.length;i++){
      for(var j = 0; j<listData[i].isSelectedData[0].length;j++){
        var srcnew1 = listData[i].isSelectedData[0].join(' ');
      }
      for(var v = 0;v<listData[i].isSelectedData[1].length;v++){
      var srcnew2 = listData[i].isSelectedData[1].join(' ');
      }
      for(var k = 0;k<listData[i].isSelectedData[2].length;k++){
      var srcnew3 = listData[i].isSelectedData[2].join(' ');
      }

      var tijiaoObj = {};
      //判断srcnew1,srcnew2,srcnew3是否为空
       var ball = srcnew1 + '#' + srcnew2 + '#' + srcnew3;
      if(srcnew1!=""&&srcnew2!=""&&srcnew3!=""){
        ball = srcnew1 + '#' + srcnew2 + '#' + srcnew3;
      }
     else if (srcnew1==""&&srcnew2!=""&&srcnew3!=""){
       ball =  srcnew2 + '#' + srcnew3;
     }
       else if (srcnew1!=""&&srcnew2==""&&srcnew3!=""){
       ball =  srcnew1 + '#' + srcnew3;
     }
      else if (srcnew1!=""&&srcnew2!=""&&srcnew3==""){
       ball =  srcnew1 + '#' + srcnew2;
     }
      else if (srcnew1!=""&&srcnew2==""&&srcnew3==""){
       ball =  srcnew1 ;
     }
       else if (srcnew1==""&&srcnew2!=""&&srcnew3==""){
       ball =  srcnew2 ;
     }
       else if (srcnew1==""&&srcnew2==""&&srcnew3!=""){
       ball =  srcnew3 ;
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
  $.ajax({
    url:"http://103.112.31.163:39008/bc/front/fjk5BetDetail/saveBet",    //请求的url地址
    dataType:"json",   //返回格式为json
    async:true,//请求是否异步，默认为异步，这也是ajax重要特性
    data:{"betData":betData},    //参数值
    type:"POST",   //请求方式
    beforeSend:function(data){
        //请求前的处理
    },
    success:function(req){
        //请求成功时处理
    },
    complete:function(data){
        //请求完成的处理
    },
    error:function(data){
        //请求出错处理
    }
});
}
  $(document).on('click','.opensubmit',function(){
    test();
  })
})
