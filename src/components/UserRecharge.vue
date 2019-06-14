<template>
    <transition name="slide">
        <div class="content-main">
            <div class="remain">
                <p class="remain-p">Number of remaining diamonds:<span class="remain-span" v-text="gold || 0"></span></p>
            </div>
            <div class="ml10 bold">Select the recharge type</div>
            <div class="recharge-type">
                <a v-for="(item,index) in platformList" @click="selectPlatform(index)" :class="'plat-wrap' + (index % 4 == 0 ? ' plat-first':'')" href="javascript:;">
                    <div class="plat-focus" v-if="focusIndex == index"></div>
                    <div :class="'plat '+ item.className"></div>      
                </a>
            </div>

            <div class="ml10 mt10 bold">Enter the card information</div>
            <div class="recharge-info">
                <input type="text" :class="'input block' + (userCardNo == '' ?' empty' :'')" v-model="userCardNo" placeholder="Please Input your card No">
                <input type="text" :class="'input block' + (userSerialNo == '' ? ' empty' :'')" v-model="userSerialNo" placeholder="Please Input your Serial Card No.">
                <a href="javascript:;" :class="'btn-lg' + (isLoading ? ' btn-loading' : '')" @click="recharge">Recharge</a>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name:'UserRecharge',
    data(){
        return{
            // gold:'',
            platformList:[{ //平台列表
                name: 'VNP',
                className: 'Vinaphone'
            },{
                name: 'VMS',
                className: 'MobiFone'
            },{
                name: 'FTP',
                className: 'FPTGate'
            },{
                name: 'VTT',
                className: 'Viettel'
            },{
                name: 'MGC',
                className: 'Megacard'
            },{
                name: 'ZING',
                className: 'Zing'
            },{
                name: 'ONC',
                className: 'Oncash'
            }],
            isLoading:false,
            userCardNo:null,
            userSerialNo:null,
            focusIndex:0
        }
    },
      computed:{
            gold(){
                return this.$store.state.userInfo.gold
            }
        },
        methods:{
            selectPlatform(index){
                this.focusIndex = index;
            },
            recharge(){
                if(this.isLoading){
                    return false;
                }
                if(this.userCardNo==null && this.userSerialNo==null){
                    this.userCardNo = ''
                    this.userSerialNo = ''
                    alert("please fill in the data!")
                    return false
                }
                this.isLoading = true;
                this.toRecharge();
            },
            toRecharge(){
                let ts = this;
                setTimeout(()=>{
                    ts.isLoading = false
                },1000)
            }
        }
}
</script>

<style scoped>
 .remain-p {
    font-size:18px;
    margin-left: 16px;
    display: inline-block;
    overflow: hidden;
}
.content-main{
    padding: 30px 40px 30px 40px;
    margin-left:20px;
    background:#fff;
    width:850px;
    height: 863px;
}
.remain{
    height: 100px;
    background:#f1f1f1;
   line-height: 55px;
   margin-bottom: 20px;
}
.remain-span{
    color: #333;
    font-size: 25px;
    margin-left: 10px;
    display: inline-block;
    /* vertical-align: top; */
 }
.ml10.bold{
    font-size:18px;
    font-weight: bold;
    margin-bottom:30px;
    margin-top: 30px
} 


.plat-wrap{display: inline-block; margin: 0 0 13px 13px; position: relative;}
.plat{background: url(../assets/recharge.png) no-repeat; width: 190px; height: 60px;}
.plat-focus{background: url(../assets/recharge-focus.png) no-repeat; position: absolute; top:0; left: 0;  width: 190px; height: 60px;}
.plat-first{
    margin-left: 0;margin-left: 0;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 10px;
    }
.recharge-info input{
    display: block;
    /* margin-bottom: 20px; */
    width: 295px;
    border: solid orangered 1px;
    line-height: 30px;
    padding: 2px 0 2px 5px;
    margin: 0 auto;
     margin-bottom: 20px;
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
.TrueMoney{background-position: 0 0;}
.Call12{background-position: -203px 0;}
.HAPPY{background-position: -406px 0;}
.Vinaphone{background-position: -609px 0;}
.MobiFone{background-position: 0 -75px;}
.FPTGate{background-position: -203px -75px;}
.Viettel{background-position: -406px -75px;}
.Megacard{background-position: -609px -75px;}
.Zing{background-position: 0 -149px;}
.Oncash{background-position: -203px -149px;}
.SMS{background-position: -406px -149px;}
.MOGPlay{background-position: -609px -149px;}


</style>

