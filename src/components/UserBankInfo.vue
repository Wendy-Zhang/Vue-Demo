<template>
  <transition name="slide">
    <div class="content-main bank-info">
      <h2 class="bold">Bind the bank card</h2>
      <div class="form">
        <div class="form-head">
          <h4 class="bold">Personal information</h4>
        </div>
        <div class="form-content">
          <div class="form-one">
            <label>
              <span class="c-red">*</span>Full name
            </label>
            <input
              type="text"
              class="line"
              v-model="info.name"
              maxlength="50"
              required="true"
              autofocus
            >
          </div>
          <div class="form-one inline">
            <label>
              <span class="c-red">*</span>Phone number
            </label>
            <input type="text" class="line" v-model="info.phone" maxlength="30" required>
          </div>
          <div class="form-one inline ml19">
            <span class="c-red">*</span>
            <label data-wordkey="withdrawals-addr">Home address</label>
            <input type="text" class="line" v-model="info.address" maxlength="70" required>
          </div>
        </div>
      </div>

      <div class="form">
        <div class="form-head">
          <h4>Account details</h4>
        </div>
        <div class="form-content">
          <div class="form-one" >
            <label>
              <span class="c-red">*</span>Bank name
            </label>
            <input type="text" class="line" v-model="info.bank_name" maxlength="60" required>
          </div>
          <div class="form-one" style="margin-top:20px">
            <span class="c-red">*</span>
            <label data-wordkey="withdrawals-bank-holder">Account holder</label>
            <input type="text" class="line" v-model="info.account_owner" maxlength="50" required>
          </div>
          <div class="form-one inline">
            <span class="c-red">*</span>
            <label>Swift code</label>
            <input type="text" class="line" v-model="info.swift_code" maxlength="60" required>
          </div>
          <div class="form-one form-one-long inline ml19">
            <label data-wordkey="withdrawals-bank-branch">Bank branch name</label>
            <input type="text" v-model="info.bank_branch" class="line" maxlength="60">
          </div>
        </div>
      </div>

      <div class="form">
        <div class="form-head">
          <h4>Agreement information</h4>
          <!-- <span class="c-red">第二项填写格式为数字</span> -->
        </div>
        <div class="form-content">
          <div class="form-one" style="margin-bottom:20px">
            <span class="c-red">*</span>
            <label data-wordkey="withdrawals-info-text1">Your agency:</label>
            <input type="text" class="line" v-model="info.agency" maxlength="100" required>
          </div>

          <div class="form-one w2">
            <label
              data-wordkey="withdrawals-info-text3"
            >Have you signed a paper contract with It'sMe?</label>
            <input
              class="ml20"
              id="radio1"
              type="radio"
              name="input-contract"
              value="1"
              @click="info.contract=1"
            >Yes
            <input
              class="ml10"
              @click="info.contract=0"
              type="radio"
              id="radio2"
              name="input-contract"
              value="0"
            >No
          </div>
        </div>
      </div>
    
         <div class="c-btn">
             <a href="javascript:;" class="btn" @click="saveUserBankInfo">Save</a>
             <router-link class="btn gray ml20" to="App/withdrawal/">Cancel</router-link>
         </div>

    </div>
  </transition>
</template>

<script>
export default {
    name:'UserBankInfo',
    data(){
        return{
            // bankInfoFe
            info:{
                phone:'',
                name:'',
                address:'',
                user_id:'',
                bank_name:'',
                account_owner:'',
                bank_account:'',
                // bank_address:'',
                swift_code:'',
                bank_branch:'',
                agency:'',
                contract:0,
            }
        }
    },
    watch:{
        'info.contract':(val,oldVal) => {
            let radio1 = document.getElementById('radio1');
            let radio2 = document.getElementById('radio2');
            val == 1 ? radio1.checked=true : radio2.checked=true
        }
    },
    methods:{
        saveUserBankInfo(){
            if(this.info.name =='' || this.info.phone=='' || this.info.address =='' || this.info.bank_name=='' || this.info.account_owner=='' ||
              this.info.swift_code=='' || this.info.agency==''){
                  alert('Please fill in the table!')
                  return false;
              }else{
                  this.$router.push('App/withdrawal/')
              }
        }

    }
}
</script>
<style scoped>
.content-main{
    margin-left: 30px;
    padding: 25px 0 0 55px;
    background: #fff;
    height: 920px;
}
.form{
    margin-top: 35px;
}
.form-one{
    margin:10px 20px 10px 0;
}
.form-one.inline{
    display: inline-block;
      margin:10px 20px 10px 0;
}
.c-red{
    color: #FF6B8B;
    position: relative; 
    top: 2px; 
    margin-right: 2px;
    }
.c-btn{
	margin-top:50px;
}
.btn{
    width: 200px;
    display: inline-block;
    background-color: #50E3CE;
    text-align: center;
    line-height: 40px;
    margin: 0 auto 15px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    position: relative;
}
.btn.gray{
	color: #727272;
	border: 1px solid #F0F0F0;
	background-color: transparent;
}


</style>

