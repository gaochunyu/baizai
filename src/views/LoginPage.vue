<template>
    <div class="login">
       <img src="../assets/img/login.png">
       <div class="login-content" :style="{left:left+'px',top:top+'px'}">
         <div class="caption">
           <img src="../assets/img/login_logo.png">
         </div>
         <div class="content">
           <!--<div class="login-header">
             <span class="login-way" :class="{loginActive:normalLogin}" @click="userLogin">账号登录</span>
             <span class="login-way" :class="{loginActive:!normalLogin}" @click="scanCode">扫码登录</span>
           </div>-->
           <div v-show="normalLogin">
             <p class="errortip">{{errorMsg}}</p>
             <div class="login-line">
               <Icon type="md-person" />
               <input type="text" class="login-input login-input1" placeholder="请输入账号"
                      v-model="loginMessage.email" @focus="errorNone">
             </div>
             <div class="login-line">
               <Icon type="md-lock" />
               <input type="password" class="login-input login-input1" placeholder="请输入密码"
                      v-model="loginMessage.password" @focus="errorNone">
             </div>
             <div class="login-line2">
               <input type="text" class="login-input3" placeholder="请输入验证码"
                      v-model="yzm" @focus="errorNone" @keydown="keyLogin">
               <canvas id="canvas" width="120" height="36" @click="toggleCode"></canvas>
             </div>
             <div class="login-btn" @click="clickLogin">登录</div>
             <!--<p class="regist">还没有账号？<span class="regist_link" @click="goRegist">立即注册</span></p>-->
           </div>
           <div id="login_panel" v-show="!normalLogin">
             <canvas id="codecanvas" style="width: 260px;height: 260px;"></canvas>
           </div>
         </div>
       </div>
    </div>
</template>

<script>
  import UserCtrl from '../../src/core/control/UserCtrl'
    export default {
        name: "LoginPage",

        data() {
          return {
            normalLogin:true,
            loginActive:'loginActive',
            code:'',//验证码
            errorMsg:'',//错误信息提示
            loginMessage:{
              token:'',
              email:'',
              password:'',
            },
            yzm:'',
            isYzm:false,
            wxsign:'',
            getStatus:null//扫码状态记录
          }
        },
        computed: {
          left: function () {
            return (document.body.clientWidth-400)/2;
          },
          top:function () {
            return (document.body.clientHeight-700)/2;
          }
        },
        methods: {
          errorNone(){
            this.errorMsg = '';
          },
  //      验证码校验
          checkYzm() {
            UserCtrl.checkYzm(this);
          },
  //      登录
          clickLogin(){
            UserCtrl.login(this);
          },
          goRegist(){
            // this.$router.push('/register');
          },
          keyLogin(e){
            if(e.keyCode==13){
              UserCtrl.checkYzm(this);
              UserCtrl.login(this);
            }
          },
          userLogin(){
            // this.normalLogin=true;
            // clearInterval(this.getStatus);
          },
          scanCode(){
            // scanCode(this)
          },
          toggleCode(){
            // createCode(this)
          }
        },
        mounted() {
          // explorer();
          // //生成随机验证码
          UserCtrl.createCode(this);

        }
    }
</script>

<style lang="scss" scoped>
  @import "./css/main";
</style>
