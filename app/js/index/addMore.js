    var limit = 10;
    var pagestart = 0;
    var offset = 0;
    morelist(pagestart, limit);
    function morelist(pageNum, pageSize) {
        $.ajax({
            url: '/index/ajax_more_designer',
            data: {
                limit: 10,  
                pageSize: pageSize, 
            },
            type: "POST",
            success: function (res) {
                if (res.code = 200) {
                    if (!res.data || !res.data.list || res.data.list.length === 0) {
                        return;
                    }
                    //页面加载完成判断是否存在数据，没有数据隐藏加载更多按钮
                    if (res.data.list.length === 0) {
                        $('#btn').hide();
                    }
                    var html = "";
                    for (var i = 0; i < res.data.list.length; i++) {
                        var is_original = res.data.list[i].is_original;
                            html +=
                            '<li><div class="contaniner_data">\n'+
                                '<div class="title_type">\n'+
                                    '<span>账变类型</span>\n'+
                                    '<b>派发奖金</b></div>\n'+
                                '<div class="mid_type">\n'+
                                  ' <div class="time_div baixian">\n'+
                                     '<p class="time_p "><span class="white_span">游戏</span><b>2019-10-26 15:40:03</b></p>\n'+
                                   '</div>\n'+
                                   '<div class="baixian">\n'+
                                     '<p class="second_p"><span class="white_span">游戏</span><b>幸运飞艇</b></p>\n'+
                                     '<p class="second_p"><span class="white_span">玩法</span><b>精确前二复式</b></p>\n'+
                                   '</div>\n'+
                                   '<div class="baixian">\n'+
                                     '<p class="second_p"><span class="white_span">模式</span><b>2元</b></p>\n'+
                                     '<p class="second_p"><span class="white_span">变动金额</span><b>6547.50</b></p>\n'+
                                   '</div>\n'+
                                   '<div class="baixian">\n'+
                                     '<p class="second_p"><span class="white_span">余额</span><b>548,807.40</b></p>\n'+
                                   '</div>\n'+
                                '</div>\n'+
                            '</div>\n'+
                        '</li>'
                    }
                    //判断数据的长度，是否显示加载更多数据
                    $('.midd_content').find('ul').append(html)
                    if (res.data.list.length = 0) {
                        $('#btn').hide();
                    }
                    if (res.data.this_page >= res.data.page_count) {
                        $('#btn').hide();
                    }
                } else {
                    console.log('数据异常');
                }
            }
        });
    }
    $('#btn').on('click', function (e) {
        e.preventDefault;
        pageSize = pageSize + limit;
        var pageNum = pagestart + 1;
        morelist(pageNum, pageSize);
    })

