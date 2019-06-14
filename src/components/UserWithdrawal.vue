<template>
  <transition name="slide">
    <div class="content-main cash">
      <Loading v-if="loadingData"></Loading>
      <div class="con" v-if="!loadingData">
        <div class="header">
          <div class="cols">
            <div class="col">
              <p class="col-top">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon--wujiaoxing"></use>
                </svg>
                <span class="col-h" v-text="preWithdraw.gold || 0"></span>
              </p>
              <p class="col-down">Can be mentioned stars</p>
            </div>
            <div class="break"></div>
            <div class="col">
              <p class="col-top">
                <span class="col-h" v-text="'$ '+ preWithdraw.withdraw || 0"></span>
              </p>
              <p class="col-down">Total revenue</p>
            </div>
          </div>

          <div class="form" v-if="preWithdraw">
            <div class="is-accept" v-if="preWithdraw.withdraw_accept || true">
              <input
                type="number"
                class="input"
                v-model="withdrawalNumber"
                placeholder="Please enter number"
              >
              <button
                :class="'btn-lg' + (isWdLoading?' btn-loading':'')"
                @click="applyWithdrawals()"
              >Withdrawal</button>
              <a class="tip" @mouseover="showTip" @mouseout="closeTip">
                <span class="dib">Withdrawal Rule</span>
                <!-- <svg :class="icon" aria-hidden="true">
                    <use xlink:href="#icon-weibiaoti-"></use>
                </svg> -->
                <!-- <i :class="'icons '+(isShowTip? 'info-focus' : 'info')"></i> -->
              </a>
              <transition name="fade">
                <div class="tip-tag" v-if="isShowTip">
                  <div class="arrow">
                    <em></em>
                    <span></span>
                  </div>More than 0 stars can apply for cash withdrawal
                  can be submitted at any time to withdraw the
                  application, but need to complete a transaction before
                  they can submit the next pen, each mention is to 1 stars
                </div>
              </transition>
            </div>
          </div>
        </div>
        <!-- <div class="split"></div> -->
        <div class="record">
            <div class="ml10 bold mt">Withdrawals record</div>
            <PagingList :onePageNum = "onePageNum" :isShowPaging="true" :listHeight="listHeight" :data="cashRecordList" :listHeader="listHeader" :rowsWidth="rowsWidth" :listType="listType"></PagingList>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Loading from "./Loading.vue"
import PagingList from "./PagingList.vue"
export default {
    name:'UserWithdrawal',
    components:{
      Loading,
      PagingList
    },
    data(){
        return{
            loadingData:true,
            isWdLoading:false,
            isShowTip:false,
            isAccept:true,
            withdrawalNumber:'',
            preWithdraw:{
                gold:0,
                withdraw:0,
                withdraw_accept:true
            },
            cashRecordList:[],
            onePageNum:9,
            rowsWidth:["40%","40%","20%"],
            listHeader:["Amount","Submission","Status"],
            listType:"cashRecord",
            listHeight:"425px"
        }
    },
    methods:{
       showTip(){
           this.isShowTip = true
       },
       closeTip(){
           this.isShowTip = false
       },
       getPre(){
           this.preWithdraw = {
               gold:'34900',
               withdraw:2000,
               withdraw_accept:true
           }
       },
       applyWithdrawals(){
          let self = this
          if(self.withdrawalNumber == ''){
              alert("Please fill in the numbers")
              return false
          }
          if(self.isWdLoading){
              return false
          }
          if(!/^\d+$/.test(self.withdrawalNumber)){
              alert("please fill in the correct number!")
              return false
          }
          if(self.preWithdraw.gold <= 0){
              alert("The current diamond number is less than 400001")
              return false
          }
          if(self.withdrawalNumber > self.preWithdraw.gold){
              alert("cash is greater than the current number of stars!")
              return false
          }
          this.$router.push("/bank-info")
          return false;
          self.gotoWithdrawal()

       },
       gotoWithdrawal(){
           let ts =  this
           ts.isWdLoading = true
           setTimeout(()=>{
               ts.isWdLoading = false
           },2000)
       },
       getListData(){         
           let ts = this
           setTimeout(()=>{
            ts.loadingData = false
           ts.cashRecordList=[
         {
            gold: 10,
            ctime: "2017-01-12",
            status: 1
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 2
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 3
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 2
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 2
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 2
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 1
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 2
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 3
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 2
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 2
          },
          {
            gold: 20,
            ctime: "2017-01-11",
            status: 1
          }
        ];
      }, 1000);
    }
    },
    mounted(){
        this.getPre()
        this.getListData()
    }
}
</script>

<style scoped>
.split{
    /* background: #f1f1f1; */
    margin: 20px 0;
    height:40px
}
.content-main{
     /* margin-left: 20px; */
     /* background:#f1f1f1 */
}
.header{
    padding:25px;
    margin-left:40px;
    background:#fff;
    /* margin-bottom: 20px */
}
.cols{   
    display: flex;
    justify-content: space-between;
    width: 80%;
    /* margin:25px 0 50px 0 */
}
/* .col{
    width: 49%;
    height: 90px;
} */
.break {
  border-left: 1px solid #eaeaea;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
}
/* .form{
    width: 600px;
} */
.input {
    width: 278px;
    padding: 0 10px;
    margin: 0 auto;
    margin-top: 25px;
    background: #fff;
    color: #333;
    height: 39px;
    line-height: 39px;
    border-radius: 5px;
    border: 1px solid #e3e3e3;
}
.btn-lg {
    display: block;
    width: 300px;
    margin: 0 auto;
    background: #50e3ce;
    color: #fff;
    height: 41px;
    line-height: 41px;
    border-radius: 5px;
    margin-top: 20px;
    text-align: center;
}
.is-accept {
  font-size: 13px;
  text-align: center;
}
.tip {
  display: block;
  color: #8a8a8a;
  width: 150px;
  cursor: pointer;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  margin: 16px auto 0;
}
.record{
    margin:30px 0 0 40px
}
.ml10.bold.mt{
    background: #fff;
    padding: 20px;
    font-size: 16px;
}
</style>

