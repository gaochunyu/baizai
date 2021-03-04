<template>
  <div>
    <div class="main-header-container">
      <img src="../../../assets/img/ic_logo-baizai.png" alt="" @click.stop="toHome()">
      <img src="../../../assets/img/ic_snow.png" class="snow">
      <div class="main-header-container-btn">
        <span class="btn-container" @click.stop="toHome()">
          <Icon type="md-home" />
          <span>首页</span>
        </span>
        <!--<span class="btn-container">-->
          <!--<img src="../../../assets/img/ic_set.png" alt="">-->
          <!--<span>设置</span>-->
        <!--</span>-->
        <span class="btn-container" @click.stop="leaveDialog = true">
          <img src="../../../assets/img/ic_message.png" alt="">
          <span>留言</span>
        </span>
        <span class="btn-container btn-container1">
        </span>
        <span class="btn-container" @click.stop="setContainer = !setContainer">
          <img src="../../../assets/img/ic_user.png" alt="">
          <span v-text="userName"></span>
          <img class="set" src="../../../assets/img/ic_arrow1.png" alt="">
        </span>
      </div>
    </div>

    <div class="edit-pass" v-show="setContainer">
      <div @click.stop="passDialog = true,setContainer =false">修改密码</div>
      <div @click.stop="loginOutPopup = true,setContainer =false">退出登录</div>
    </div>
    <Modal v-model="leaveDialog" width="416" class="dilog">
      <p slot="header" style="color:#fff;">
        <span>留言</span>
      </p>
      <div class="error-message" v-text="errorMess"></div>
      <div class="el-input">
        <span class="el-right">留言</span><span class="red-xin">*</span>
        <Input type="textarea"v-model="content"></Input>
      </div>
      <div class="el-input">
        <span class="el-right">联系邮箱</span><span class="red-xin">*</span>
        <Input v-model="email" ></Input>
      </div>
      <div class="el-input">
        <span class="el-right" style="margin-right: 21px">联系电话</span>
        <Input v-model="phone"></Input>
      </div>
      <div slot="footer" class="dialog-footer">
        <div class="footer-btns">
          <span class="btncan" @click="closeDialog">取 消</span>
          <span class="btncon" @click="submitLeaveMessage">确 定</span>
        </div>
      </div>
    </Modal>
    <Modal v-model="passDialog" width="416" class="dilog">
      <p slot="header" style="color:#fff;">
        <span>修改密码</span>
      </p>
      <div class="error-message" v-text="errorMess"></div>
      <div class="el-input">
        <span class="el-right">旧密码</span><span class="red-xin">*</span>
        <Input v-model="oldpass"></Input>
      </div>
      <div class="el-input">
        <span class="el-right">新密码</span><span class="red-xin">*</span>
        <Input v-model="newpass"></Input>
      </div>
      <div class="el-input">
        <span class="el-right">新密码确认</span><span class="red-xin">*</span>
        <Input v-model="surepass"></Input>
      </div>
      <div slot="footer" class="dialog-footer">
        <div class="footer-btns">
          <span class="btncan" @click="closeDialog">取 消</span>
          <span class="btncon" @click="changePass">确 定</span>
        </div>
      </div>
    </Modal>
    <Modal
      v-model="loginOutPopup"
      title="提示"
      class="dilog"
      @on-ok="loginOut"
      width="416"
      :mask-closable="false"
      @on-cancel="closeDialog">
      <p style="font-size: 16px;margin: 10px 20px">你确定要退出登录吗?</p>
    </Modal>

  </div>

</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import axios from 'axios'
  import {config} from '../../../../static/config'
  import {handleSTARTAction} from "../../../core/business/start/start"

  export default {

    data() {
      return {
        setContainer: false,
        leaveDialog: false,
        passDialog: false,
        loginOutPopup: false,
        modal:false,
        errorMess: '',
        oldpass: '',
        newpass: '',
        surepass: '',
        content: '',
        email: '',
        phone: '',
        ISleavemess: false,
        ISmail: false,
        ISphone: true,
        userTag: '',
        userMassage: null
      }
    },
    computed: {
      userName:function(){
        return this.$cookies.get('userName');
      }
    },
    methods: {
      ...mapMutations(['toggleActiveSubmenu']),
      toHome(){
        this.toggleActiveSubmenu('start');
        handleSTARTAction();
      },
      isLogin(){
        let self = this;
        axios.post(config.SERVICE_URL + 'validate',{
          token:self.$cookies.get('token'),
          email:self.$cookies.get('email'),
        }).then(function (response) {
          if(!response.data.islogin){
            self.$router.push('./');
            self.$Message.warning('您还没有登录，请先登录');
          }
        })
      },
      //      关闭弹窗
      closeDialog() {
        this.errorMess = '';
        this.oldpass = '';
        this.newpass = '';
        this.surepass = '';
        this.content = '';
        this.email = '';
        this.phone = '';
        this.leaveDialog = false;
        this.passDialog =false;
      },
//      校验密码
      checkEmail() {
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
        if (this.email == "") {
          this.errorMess = '邮箱不能为空';
          this.ISmail = false;
        } else if (!reg.test(this.email)) {
          this.errorMess = '邮箱格式不正确';
          this.ISmail = false;
        } else {
          this.ISmail = true;
          if (this.ISmail && this.ISleavemess) {
          }
        }
      },
//      校验手机号
      checkPhone() {
        var re = /^1\d{10}$/;
        if (this.phone == '') {
          this.errorMess = '';
          this.ISphone = true;
        } else if (!re.test(this.phone)) {
          this.errorMess = '号码格式有误';
          this.ISphone = false;
        } else {
          this.ISphone = true;
        }
      },
//      校验留言
      checkLeaveMessage() {
        if (this.content == '') {
          this.errorMess = '留言不能为空';
          this.ISleavemess = false;
        } else {
          this.ISleavemess = true;
        }

      },
//      提交留言
      submitLeaveMessage() {
        this.checkPhone();
        this.checkEmail();
        this.checkLeaveMessage();
        if (this.ISmail && this.ISleavemess && this.ISphone) {
          let _this = this;
          axios.post(config.SERVICE_URL + 'saveMessage', {
            email: _this.email,
            content: _this.content,
            phone: _this.phone,
          }).then(function (res) {
            _this.closeDialog();
            _this.$Message.success('留言成功')
          })
        }
      },
//      修改密码
      changePass() {
        if (this.surepass == '' || this.surepass == '' || this.newpass == '') {
          this.errorMess = '请确认当前密码，新密码及确认密码是否填写';
          return
        } else if (this.surepass != this.newpass) {
          this.errorMess = '新密码与确认密码不同';
          return
        }
        let _this = this;
        axios.post(config.SERVICE_URL + 'updateUserPassword', {
          email: _this.userMassage.email,
          password: _this.oldpass,
          newpwd: _this.newpass
        }).then(function (response) {
          if (response.data.success == true) {
            _this.closeDialog();
            _this.$Message.success('密码修改成功');
          } else {
            _this.errorMess = '旧密码填写有误'
          }
        })
      },
//      获取用户信息
      getUser() {
        let _this = this;
        axios.post(config.SERVICE_URL + 'getAccountUserById', {
          id: this.$cookies.get('userId')
        }).then(function (response) {
            _this.userMassage = response.data;
          })
      },
//      退出登录
      loginOut() {
        this.$router.push('/');
        this.$cookies.remove('userName');
        this.$cookies.remove('userId');
        // let _this = this;
        // axios.post(config.SERVICE_URL + 'logOut', {
        //   email: _this.userMassage.email,
        //   name: _this.$cookies.get('userName')
        // }).then(function (response) {
        //   _this.$cookies.remove('token');
        //   _this.$cookies.remove('userName');
        //   _this.$cookies.remove('userTag');
        //   _this.$cookies.remove('userId');
        //   _this.$cookies.remove('email');
        //   _this.$cookies.remove('company');
        //   window.location.href = config.SERVICE_URL+'#/'
        // })
      },
      goSet() {
        window.location.href = config.SERVICE_URL+'userManage.html#/'
      }
    },
    mounted() {
      // this.getUser();
    },
  }
</script>

<style lang="scss" scoped>
  @import "./css/nav";
</style>
