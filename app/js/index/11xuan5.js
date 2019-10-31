require(['jquery','layer'],function(jquery,layer){
    $('.bottom .firstnav > button').on('click', function () {
    // 玩法

    var detailplay = $('.xialachoose p').text();
    var changeData={ischangeName:detailplay,totalNum:totalNum,isSelectedData:[[],[],[]]};
    $('.number div.selected').each(function(key,value){
      if($(this).parent().hasClass('group1_1'))changeData.isSelectedData[0].push($(this).find('span').text())

      if($(this).parent().hasClass('group3_1')) changeData.isSelectedData[0].push($(this).find('span').text())

      if($(this).parent().hasClass('group4_1')) changeData.isSelectedData[0].push($(this).find('span').text())

      if($(this).parent().hasClass('group2_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if($(this).parent().hasClass('group3_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if($(this).parent().hasClass('group4_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if($(this).parent().hasClass('group3_3')) changeData.isSelectedData[2].push($(this).find('span').text())
    })
    var totalNum = changeData.isSelectedData[0].length + changeData.isSelectedData[1].length + changeData.isSelectedData[2].length
    changeData.totalNum = totalNum
      // console.log(totalNum)
      console.log(changeData)   //这个就是你要的结果, 是一个对象,包括选中的玩法类型和对应的号码,

      function addSrc(arr,item){
        var newarr = arr.slice(0);
            newarr.push(item);
            return newarr;
      }
    if(changeData.isSelectedData[0] =='' && changeData.isSelectedData[1] && changeData.isSelectedData[2] ==''){
      //当选择为空时
      layer.open({
        content: '选择不能为空',
        skin: 'msg',
        time: 2
    });
    }else{  //选择不为空时弹出提示
      var localStorageData = JSON.parse(window.localStorage.getItem('sureData'));
      // console.log()
      if(localStorageData != null){
        window.localStorage.setItem("sureData",JSON.stringify(addSrc(localStorageData,changeData)));
        location.href = '../../pages/touzhudan.html'
      }else{
        window.localStorage.setItem("sureData",JSON.stringify([]))
        window.localStorage.setItem("sureData",JSON.stringify([changeData]));
        location.href = '../../pages/touzhudan.html'
      }
    }
  });

})
