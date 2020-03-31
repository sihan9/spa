function TimerButton(){
  var html = '<input class="timer" type="button" value=""';
  var $btn,
      cfg = {
        container :'#main',
        tLength : 6,
        enable : false,
        title:'同意',
        onClick:null 
      },
      num,
      timer;
  this.show = function(conf){
    console.log(cfg);
    console.log(conf);
    //1、DOM draw
    //将cfg中与conf中不同项 更新
    $.extend(cfg,conf);

    if(cfg.enable){
      //发送验证码
      html = html + '>';
      $btn = $(html);
      $(cfg.container).append($btn);
      $btn.val(cfg.title);
      if(cfg.onClick){
        $btn.click(cfg.onClick);
      }else{
        $btn.click(function(){
          $btn.attr('disabled','true');
          $btn.val(cfg.title +' ('+cfg.tLength+'s)');
          num = cfg.tLength;
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
        })
      }
    }else{
      //同意按钮
      html = html +'disabled>';
      $btn = $(html);
      //在容器中创建 需要的DOM节点
      $(cfg.container).append($btn);
      //将按钮上的值写入
      $btn.val(cfg.title +' ('+cfg.tLength+'s)');
      num = cfg.tLength;
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
  }
};

/*
var $timerButton = (function (){

   function show(conf){
   var $btn = $('<input class="timer" type="button" value="同意 (6s)" disabled>'),
       cfg = {
        container :'body',
        num : 6,
        title:'同意',
        onClick:null
      },
      num,
      timer;
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
  return {
    show:show
  };
}());
*/
// 不用 page load event

// 封装成对象，有几种方案
/*
1、简单对象字面量，不完全是面向对象，不能包括私有方法
var timerbtn = {
  show:function()
}
2、工厂函数,一个函数返回值是一个简单对象
var timerbtn = (function(){
  私有
  return {
    共有
    show:function(){
    }
  }
}())
3、构造函数，funtion timerbtn(){

}
var tb = new timerbtn();
*/
