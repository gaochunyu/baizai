import axios from 'axios';
import {config} from '../../../static/config'

const UserCtrl = {
  //生成验证码
  createCode(_this){
    _this.code = '';
    var canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';

    /**绘制背景色**/
    ctx.fillStyle = randomColor(200,240); //颜色若太深可能导致看不清
    ctx.fillRect(0,0,width,height);
    /**绘制文字**/
    var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
    for(var i=0; i<4; i++){
      var txt = str[randomNum(0,str.length)];
      _this.code += txt;
      ctx.fillStyle = randomColor(0,50);  //随机生成字体颜色
      ctx.font = randomNum(35,40)+'px SimHei'; //随机生成字体大小
      var x = 10+i*25;
      var y = randomNum(30,45);
      var deg = randomNum(-15, 15);
      //修改坐标原点和旋转角度
      ctx.translate(x,y);
      ctx.rotate(deg*Math.PI/180);
      ctx.fillText(txt, 0,0);
      //恢复坐标原点和旋转角度
      ctx.rotate(-deg*Math.PI/180);
      ctx.translate(-x,-y);
    }

    /**绘制干扰点**/
    for(var i=0; i<100; i++){
      ctx.fillStyle = randomColor(0,255);
      ctx.beginPath();
      ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
      ctx.fill();
    }
  },
  //验证码校验
  checkYzm(_this) {
    _this.isYzm = false;
    if (_this.yzm == '') {
      _this.errorMsg = '*请填写验证码';
    } else {
      let code = _this.code.toLowerCase();
      let v_code = _this.yzm.toLowerCase();
      if (code == v_code) {
        _this.isYzm = true;
      } else {
        _this.errorMsg = '*验证码填写错误';
      }
    }
  },
  //登陆校验
  login(_this){
    //验证验证码
    this.checkYzm(_this);
    if(_this.isYzm == false) return;
    //验证码正确后，验证用户名及密码
    if(_this.loginMessage.email==''||_this.loginMessage.password==''){
      _this.errorMsg = '* 账号或密码不能为空';
    }else{
      axios.post(config.SERVICE_URL + 'validate',_this.loginMessage)
        .then(function (response) {
          let data = response.data;
          if(data.islogin == true){
            _this.$cookies.set('userName', data.loginName);
            _this.$cookies.set('userId', data.userId);
            // _this.$cookies.set('userTag',data.userstatus);
            // _this.$cookies.set('userName',data.loginName);
            // _this.$cookies.set('token', data.token);
            // _this.$cookies.set('email', data.loginEmail);
            // _this.$cookies.set('company', data.unit);
//          _this.$cookies.set('code', data.unitcode);
            _this.$router.push('/index');
          }else{
            _this.errorMsg = '* 账号或密码错误';
          }
       })
    }
  },
}

// 生成一个随机数
export function randomNum(min,max){
  return Math.floor( Math.random()*(max-min)+min);
}
// 生成一个随机色
export function randomColor(min,max){
  var r = randomNum(min,max);
  var g = randomNum(min,max);
  var b = randomNum(min,max);
  return "rgb("+r+","+g+","+b+")";
}
export default UserCtrl;
