
require.config({
    waitSeconds: 0,
    urlArgs:'v='+(new Date()).getTime(),
    paths: {
        "jquery": "../vendor/jquery-3.2.1.min",
        "css":"../libs/require/css/css.min",
        "swiper":'../widgets/swiper/swiper-3.4.2.min'
    },
    shim: {
        "jquery": {
           "deps":[]
        },
        "layer":{
            "deps":['jquery','css!../../libs/widgets/layer/theme/default/layer.css']
        },
          "swiper":{
              "deps":['css!../widgets/swiper/swiper-3.4.2.min.css']
          },
        "until":{
            "deps":[]
        },
    }
});



