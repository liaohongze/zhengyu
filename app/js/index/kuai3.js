require(['jquery', 'layer'], function(jquery, layer) {
  $('.bottom .firstnav > button').on('click', function() {
    // 玩法

    var detailplay = $('.kuai3xialachoose p').text();
    var changeData = { ischangeName: detailplay, totalNum: totalNum,singleOrDouble: singleOrDouble,zhushu:zhushu,amount:amount,isSelectedData: [
        [],
        []
      ] };
    var changeData2 = { ischangeName: detailplay, totalNum: totalNum,singleOrDouble: singleOrDouble,zhushu:zhushu,amount:amount,isSelectedData: [
        [],
        []
      ] };

    if ($('.number div.selected').parent().hasClass('two_zhudan')) {
      changeData.ischangeName = detailplay + $('.number div.selected').parent('.two_zhudan_group_1').data('title');
      changeData2.ischangeName = detailplay + $('.number div.selected').parent('.two_zhudan_group_2').data('title');
    }

    $('.number div.selected').each(function(key, value) {
      if ($(this).parent().hasClass('two_zhudan')) {
        if ($(this).parent().hasClass('two_zhudan_group_1')) {
          changeData.isSelectedData[0].push($(this).find('span').text())
        }
        if ($(this).parent().hasClass('two_zhudan_group_2')) {
          changeData2.isSelectedData[0].push($(this).find('span').text())
        }
      } else {
        if ($(this).parent().hasClass('group1_1')) changeData.isSelectedData[0].push($(this).find('span').text())

        if ($(this).parent().hasClass('group2_1')) changeData.isSelectedData[0].push($(this).find('span').text())

        if ($(this).parent().hasClass('group3_1')) changeData.isSelectedData[0].push($(this).find('span').text())

        if ($(this).parent().hasClass('group4_1')) changeData.isSelectedData[0].push($(this).find('span').text())

        if ($(this).parent().hasClass('group2_2')) changeData.isSelectedData[1].push($(this).find('span').text())

        if ($(this).parent().hasClass('group3_2')) changeData.isSelectedData[1].push($(this).find('span').text())

        if ($(this).parent().hasClass('group4_2')) changeData.isSelectedData[1].push($(this).find('span').text())
      }
    })


    //========================计算玩法获得注数和金额start========================
    var singleOrDouble = "单式"; //单式或者复式
    var zhushu = 1; //注数
    var amount = 2; //金额
    /**
     * 获得从m中取n的所有组合
     */
    function getFlagArrs(m, n) {
      if (!n || n < 1) {
        return [];
      }
      var resultArrs = [],
        flagArr = [],
        isEnd = false,
        i, j, leftCnt;

      for (i = 0; i < m; i++) {
        flagArr[i] = i < n ? 1 : 0;
      }
      resultArrs.push(flagArr.concat());
      while (!isEnd) {
        leftCnt = 0;
        for (i = 0; i < m - 1; i++) {
          if (flagArr[i] == 1 && flagArr[i + 1] == 0) {
            for (j = 0; j < i; j++) {
              flagArr[j] = j < leftCnt ? 1 : 0;
            }
            flagArr[i] = 0;
            flagArr[i + 1] = 1;
            var aTmp = flagArr.concat();
            resultArrs.push(aTmp);
            if (aTmp.slice(-n).join("").indexOf('0') == -1) {
              isEnd = true;
            }
            break;
          }
          flagArr[i] == 1 && leftCnt++;
        }
      }
      return resultArrs.length;
    }
    //========================计算玩法获得注数和金额end========================

    var totalNum = changeData.isSelectedData[0].length + changeData.isSelectedData[1].length
    changeData.totalNum = totalNum
    changeData.singleOrDouble = singleOrDouble;
    changeData.zhushu = zhushu;
    changeData.amount = amount;

    changeData2.totalNum = totalNum
    changeData2.singleOrDouble = singleOrDouble;
    changeData2.zhushu = zhushu;
    changeData2.amount = amount;
    // console.log(changeData) //这个就是你要的结果, 是一个对象,包括选中的玩法类型和对应的号码,

    function addSrc(arr, item) {
      var newarr = arr.slice(0);
      newarr.push(item);
      return newarr;
    }
    if (changeData.isSelectedData[0] == '' && changeData.isSelectedData[1]) {
      //当选择为空时
      layer.open({
        content: '选择不能为空',
        skin: 'msg',
        time: 2
      });
    } else { //选择不为空时弹出提示
      var localStorageData = JSON.parse(window.localStorage.getItem('sureData'));
      if (localStorageData != null) {
        window.localStorage.setItem("sureData", JSON.stringify(addSrc(localStorageData, changeData)));
        $('.number div.selected').parent().hasClass('two_zhudan') && window.localStorage.setItem("sureData", JSON.stringify(addSrc(JSON.parse(window.localStorage.getItem('sureData')), changeData2)));
        // lotteryClick('order','1')
        location.href= "../../pages/touzhudan.html"
      } else {
        window.localStorage.setItem("sureData", JSON.stringify([]))
        window.localStorage.setItem("sureData", JSON.stringify([changeData]));
        $('.number div.selected').parent().hasClass('two_zhudan') && window.localStorage.setItem("sureData", JSON.stringify(addSrc(JSON.parse(window.localStorage.getItem('sureData')), changeData2)));
        // lotteryClick('order','1')
        location.href= "../../pages/touzhudan.html"
      }
    }
  });

})
