require(['jquery','swiper'],function(juqery,swiper){
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:3000
    });
})
