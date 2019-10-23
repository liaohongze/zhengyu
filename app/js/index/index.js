require(['jquery','swiper','layer'],function(juqery,Swiper,layer){
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:3000
    });
})
