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
})
