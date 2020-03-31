var PwdBox = function(config){
  var $pwd     = $('<input type="password">'),
      $pwdText = $('<input type="text">'),
      $eye     = $('<div></div>'),
      $div     = $('<div class="pwddiv">密码：</div>');

  $div.append($pwd);
  $div.append($eye);
  $div.append($pwdText);
  $(config).append($div);

  $pwd.on('input', function(){
    $pwdText.val($pwd.val());
  });

  $eye.mouseover(function(){
    $pwdText.css('z-index', '10');
  });

  $eye.mouseout(function(){
    $pwdText.css('z-index', '-10');
  });

  this.getPwd = function() {
    return $pwdText.val();
  };

};
/*
var pwdbox = new PwdBox(".main");
var pwdbox1 = new PwdBox(".main");
*/
