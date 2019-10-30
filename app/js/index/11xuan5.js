require(['jquery'],function(jquery){
    $('.bottom .firstnav > button').on('click', function () {
    // 玩法
    var code = $('.commoncontent div.select span').attr('data-code');

    var gameType = $('.commoncontent div.select span').attr('data-value');
    var gameDatas = [
      [],
      [],
      []
    ];

    // 有1组
    if (gameType === '1') {
      var selects1 = $('.group1_1 .select')
      selects1.each(function (key, value) {
        gameDatas[0].push($(value).attr('value'));
      });
    }

    // 有2组
    if (gameType === '2') {
      var selects1 = $('.group2_1 .select')
      selects1.each(function (key, value) {
        gameDatas[0].push($(value).attr('value'));
      });
      var selects2 = $('.group2_2 .select')
      selects2.each(function (key, value) {
        gameDatas[1].push($(value).attr('value'));
      });
    }

    // 有3组
    if (gameType === '3') {
      var selects1 = $('.group3_1 .select')
      selects1.each(function (key, value) {
        gameDatas[0].push($(value).attr('value'));
      });
      var selects2 = $('.group3_2 .select')
      selects2.each(function (key, value) {
        gameDatas[1].push($(value).attr('value'));
      });
      var selects2 = $('.group3_3 .select')
      selects2.each(function (key, value) {
        gameDatas[1].push($(value).attr('value'));
      });
    }

    var detailplay = $('.xialachoose p').text();
    var changeData={ischangeName:detailplay,isSelectedData:[[],[],[]]};
    $('.number div.selected').each(function(key,value){
      if($(this).parent().hasClass('group1_1'))changeData.isSelectedData[0].push($(this).find('span').text())

      if($(this).parent().hasClass('group3_1')) changeData.isSelectedData[0].push($(this).find('span').text())

      if($(this).parent().hasClass('group4_1')) changeData.isSelectedData[0].push($(this).find('span').text())

      if($(this).parent().hasClass('group2_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if($(this).parent().hasClass('group3_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if($(this).parent().hasClass('group4_2')) changeData.isSelectedData[1].push($(this).find('span').text())

      if($(this).parent().hasClass('group3_3')) changeData.isSelectedData[2].push($(this).find('span').text())
    })
      console.log(changeData)   //这个就是你要的结果, 是一个对象,包括选中的玩法类型和对应的号码,
    // if()
  });

})
