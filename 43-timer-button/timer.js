define(['jquery'],function($){
  function TimerButton(){
    var $btn = $('<input class="timer" type="button" value="同意 (6s)" disabled>'),
         cfg = {
          container :'body',
          num : 6,
          title:'同意',
          onClick:null
        },
        num,
        timer;
    this.show = function(conf){
     //1、DOM draw
     $(cfg.container).append($btn);
     $.extend(cfg,conf);
     num = cfg.num;
     $btn.val(cfg.title +' ('+cfg.num+'s)');

     //2、event bind
      timer = setInterval(function(){
        num--;
       if(num === 0){
         clearInterval(timer);
         $btn.val(cfg.title);
         $btn.removeAttr('disabled');
       }else{
          $btn.val(cfg.title+' ('+num+'s)');
        }
     },1000);
     $btn.click(cfg.onClick);  
    }
  };
  return TimerButton;
})
