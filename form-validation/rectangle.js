$(function (){
  //get dom elem
  var $width  = $('#width'),
      $heigth = $('#heigth'),
      $btn    = $('#calculate'),
      $per = $('#perimeter'),
      $area = $('#area');
  /**
  * decimalSave
  * 小数点后面保留第n位
  *
  * @param num
  * @param n
  * @returns {undefined}
  */
  function decimalSave(num,n){
    return Math.round(num * Math.pow(10,n)) / Math.pow(10,n);
  }
  function validate(field){
    //get DOM error message
    var $date = $(field),
        $msg = $(field+'-mag');
    //validate null
    if($date.val() === ''){
      $msg.html('不能为空！');
      $date.select();
      return false;
    }
    //validate number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($date.val())){
     
      $msg.html('必须为数值！');
      $date.select();
      return false;
    }
    //validate > 0
    if(Number($date.val()) < 0 ){
      $msg.html('必须大于0！');
      $date.select();
      return false;
    }
    //prompt error message
    if($date.val() === ''){
      $msg.html('不能为空！');
      $date.select();
      return false;
    }
    return true;
  }

  /*calc button click event*/
  $btn.click(function (){
    //validete if error return;
    if(!validate('#width') || !validate('#heigth')) return; 

    //get value
    var w = Number($width.val());
    var h = Number($heigth.val());

    //calculate
    var rect = rectangle();

    //decimalSave
    var p = decimalSave(rect.per(w,h),2);
    var a = decimalSave(rect.a(w,h),2);
    //output
    $per.val(p);
    $area.val(a);
  }) ;
  
});


