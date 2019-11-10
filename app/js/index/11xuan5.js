require(['jquery', 'until', 'layer'], function(jquery, until, layer) {
  until.tc1();

  $('.bottom .firstnav > button').on('click', function() {
    // 玩法

    // 判断选择的数量
    var atLeast = parseInt($('.diyizhongwanfa .container_title .at_least_num').text()) || 0;
    if ($('.number div.selected').length < atLeast) {
      layer.open({
        content: '至少选择' + atLeast + '个号码',
        skin: 'msg',
        time: 2
      });

      return;
    }

    var detailplay = $('.xialachoose p').text();
    var changeData = { ischangeName: detailplay, totalNum: totalNum,singleOrDouble: singleOrDouble,zhushu:zhushu,amount:amount,isSelectedData: [
        [],
        [],
        []
      ] };
    $('.number div.selected').each(function(key, value) {
      if ($(this).parent().hasClass('group1_1')) changeData.isSelectedData[0].push($(this).find('span').text())

      if ($(this).parent().hasClass('group2_1')) changeData.isSelectedData[0].push($(this).find('span').text())

      if ($(this).parent().hasClass('group3_1')) changeData.isSelectedData[0].push($(this).find('span').text())

      if ($(this).parent().hasClass('group4_1')) changeData.isSelectedData[0].push($(this).find('span').text())

      if ($(this).parent().hasClass('group2_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if ($(this).parent().hasClass('group3_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if ($(this).parent().hasClass('group4_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if ($(this).parent().hasClass('group3_3')) changeData.isSelectedData[2].push($(this).find('span').text())
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

    var winType = changeData.ischangeName; //玩法
    var firstLength = changeData.isSelectedData[0].length; //第一行长度
    var twoLength = changeData.isSelectedData[1].length; //第二行长度
    var threeLength = changeData.isSelectedData[2].length; //第三行长度
    //普通玩法计算开始
    if (winType == '普通任选二') {
      if (firstLength > 2) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 2);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通任选三') {
      if (firstLength > 3) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 3);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通任选四') {
      if (firstLength > 4) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 4);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通任选五') {
      if (firstLength > 5) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 5);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通任选六') {
      if (firstLength > 6) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 6);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通任选七') {
      if (firstLength > 7) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 7);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通任选八') {
      if (firstLength > 8) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 8);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通任选八') {
      if (firstLength > 8) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 8);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通前二直选') {
      if (firstLength > 1 || twoLength > 1) { //第一球选择超过一球或者第二球选择超过一球为复式
        singleOrDouble = "复式";
        zhushu = firstLength * twoLength;
        amount = amount * zhushu;
      }
    }
    if (winType == '普通前二组选') {
      if (firstLength > 2) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 2);
        amount = amount * zhushu;
      }
    }
    // alert(firstLength + "==" + twoLength + "==" + threeLength);
    if (winType == '普通前三直选') {
      if (firstLength > 1 || twoLength > 1 || threeLength > 1) { //第一球选择超过一球或者第二球选择超过一球为复式
        singleOrDouble = "复式";
        zhushu = firstLength * twoLength * threeLength;
        amount = amount * zhushu;
      }
    }
    if (winType == '普通前三组选') {
      if (firstLength > 2) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(firstLength, 3);
        amount = amount * zhushu;
      }
    }
    if (winType == '普通乐选三') {
      amount = 6; //因为每个位置只能选择一个数所以都是单式,一注为6元
    }
    if (winType == '普通乐选四') {
      amount = 10; //只能选择4个号码所以都是单式,一注为10元
    }
    if (winType == '普通乐选五') {
      amount = 14; //只能选择5个号码所以都是单式,一注为14元
    }
    //普通玩法计算结束
    //胆码玩法开始计算
    if (winType == '胆码任选二') {
      // alert(twoLength);
      if (twoLength > 2) { //因为任选二胆码最多只能选一个所以只需要判断拖码
        singleOrDouble = "复式";
        zhushu = twoLength;
        amount = amount * zhushu;
      }
    }

    if (winType == '胆码任选三') {
      var mislue = 3 - firstLength; //判断还需要从拖码里选几个
      if (twoLength > mislue) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(twoLength, mislue) * firstLength;
        amount = amount * zhushu;
      }
    }
    if (winType == '胆码任选四') {
      var mislue = 4 - firstLength; //判断还需要从拖码里选几个
      if (twoLength > mislue) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(twoLength, mislue) * firstLength;
        amount = amount * zhushu;
      }
    }
    if (winType == '胆码任选五') {
      var mislue = 5 - firstLength; //判断还需要从拖码里选几个
      if (twoLength > mislue) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(twoLength, mislue) * firstLength;
        amount = amount * zhushu;
      }
    }
    if (winType == '胆码任选六') {
      var mislue = 6 - firstLength; //判断还需要从拖码里选几个
      if (twoLength > mislue) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(twoLength, mislue) * firstLength;
        amount = amount * zhushu;
      }
    }

    if (winType == '胆码任选七') {
      var mislue = 7 - firstLength; //判断还需要从拖码里选几个
      if (twoLength > mislue) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(twoLength, mislue) * firstLength;
        amount = amount * zhushu;
      }
    }
    if (winType == '胆码前二组选') {
      var mislue = 2 - firstLength; //判断还需要从拖码里选几个
      if (twoLength > mislue) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(twoLength, mislue) * firstLength;
        amount = amount * zhushu;
      }
    }
    if (winType == '胆码前三组选') {
      var mislue = 3 - firstLength; //判断还需要从拖码里选几个
      if (twoLength > mislue) {
        singleOrDouble = "复式";
        zhushu = getFlagArrs(twoLength, mislue) * firstLength;
        amount = amount * zhushu;
      }
    }
    //========================计算玩法获得注数和金额end========================

    var totalNum = changeData.isSelectedData[0].length + changeData.isSelectedData[1].length + changeData.isSelectedData[2].length
    changeData.totalNum = totalNum
    changeData.singleOrDouble = singleOrDouble;
    changeData.zhushu = zhushu;
    changeData.amount = amount;
    // console.log(changeData) //这个就是你要的结果, 是一个对象,包括选中的玩法类型和对应的号码,

    function addSrc(arr, item) {
      var newarr = arr.slice(0);
      newarr.push(item);
      return newarr;
    }
    if (changeData.isSelectedData[0] == '' && changeData.isSelectedData[1] && changeData.isSelectedData[2] == '') {
      //当选择为空时
      layer.open({
        content: '选择不能为空',
        skin: 'msg',
        time: 2
      });
    } else { //选择不为空时弹出提示
      var localStorageData = JSON.parse(window.localStorage.getItem('sureData'));
      // console.log()
      if (localStorageData != null) {
        window.localStorage.setItem("sureData", JSON.stringify(addSrc(localStorageData, changeData)));
        // lotteryClick('order','2')
        location.href= "../../pages/touzhudan.html"
      } else {
        window.localStorage.setItem("sureData", JSON.stringify([]))
        window.localStorage.setItem("sureData", JSON.stringify([changeData]));
        // lotteryClick('order','2')
        location.href= "../../pages/touzhudan.html"
      }
    }
  });
})
