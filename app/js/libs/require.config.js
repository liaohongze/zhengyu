
require.config({
  waitSeconds: 0,
  // urlArgs:'v='+(new Date()).getTime(),
  paths: {
    'jquery': '../vendor/jquery-3.2.1.min',
    'swiper': '../widgets/swiper/swiper-3.4.2.min',
    'layer': '../widgets/layer/layer',
    'until': '../widgets/until',
    '11xuan5': '../index/11xuan5',
    'kuai3': '../index/kuai3',
    'touzhudan': '../index/touzhudan',
    'football': '../index/football',
    'footballOrder': '../index/footballOrder',
    'addMore': '../index/addMore',
    'typeEdit': '../index/typeEdit'
  },
  shim: {
    'jquery': {
      'deps': []
    },
    'layer': {
      // 'deps':['jquery','css!../widgets/layer/need/layer.css']
    },
    'swiper': {
      // 'deps':['css!../widgets/swiper/swiper-3.4.2.min.css']
    },
    'until': {
      'deps': ['jquery', 'layer']
    },
    '11xuan5': {
      'deps': ['jquery', 'layer', 'until']
    },
    'kuai3': {
      'deps': ['jquery', 'layer', 'until']
    },
    'touzhudan': {
      'deps': ['jquery', 'layer']
    },
    'football': {
      'deps': ['jquery', 'layer']
    },
    'footballOrder': {
      'deps': ['jquery', 'layer']
    },
    'addMore': {
      'deps': ['jquery', 'layer']
    },
    'typeEdit': {
      'deps': ['jquery']
    }
  }
});



