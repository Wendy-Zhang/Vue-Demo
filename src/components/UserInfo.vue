<template>
   <div class="info">
       <div class="portrait"><img src="../assets/profile.png" width="80" height="80"/></div>
       <div class="user-info">
           <div class="nick-level">
               <div class="nick" v-text="nick"></div> 
               <div :class="'level level'+levelClass">
                   <i :class="'icon-font'+levelClass"></i>
                   <span v-text="level"></span>
               </div>
           </div>
           <div class="uid" v-text="'ID:'+uid"></div>
           <div class="wealth">
               <div class="w-star"><span v-text="starNumber"></span>
               <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon--wujiaoxing"></use>
                </svg>
               <!-- <i class="iconfont" style="color:yellow">&#xe647;</i> -->
               </div><span class="cut">|</span>
               <div class="w-diamond">
                   <span v-text="diamondNumber"></span>
                   <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-zuanshi"></use>
                   </svg>
                   <!-- <i class="icons diamond-sm"></i> -->
                </div>
           </div>

       </div>
   </div>
</template>
<script>
export default {
    name:'UserInfo',
    data(){
        return {}
    },
    props:['nick','level','uid','starNumber','diamondNumber','portrait'],
    computed:{
        levelClass(){
            var level = this.level;
            if(1 <= level && level<= 7){
                return 1
            }else if(8 <= level && level <= 16){
                return 2
            }else if(16 <= level && level <= 31){
                return 3
            }else if(32 <= level && level <= 63){
                return 4
            }else if(64 <= level && level <= 127){
                return 5
            }else if(128 <= level && level <= 254){
                return 6
            }else{
                return 6
            }
        }
    }
}
</script>
<style scoped>
.info{
    background:#fff;
    width:300px;
    height: 180px;
    /* text-align: left; */
    display: flex;
    justify-content: space-aroun
}
.portrait img{
    overflow: hidden;
    border-radius: 50%;
    -webkit-border-radius:50%;
    margin: 40px 18px 0 15px;
}
.user-info{
    margin:38px 0 0 0;
    /* float:right */
}
.portrait, .user-info, .w-star, .w-diamond, .nick, .level{
    display: inline-block;
}
.nick{
    white-space:nowrap; 
    overflow:hidden;
     text-overflow:ellipsis; 
     max-width: 110px;
    }
.nick,.level{
    vertical-align: middle;
    }
.cut{
    padding: 0 10px; 
    color:#E9E9E9; 
    font-size: 15px;
}
.uid, .wealth{
    margin-top:14px;
}
.level{ padding:0 6px; color:#fff; font-size:12px;
        margin-left: 5px;-webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -ms-border-radius: 10px;
        -o-border-radius: 10px;
        border-radius: 10px;
        height:20px; 
        line-height:20px;
}
.level .icons{display:inline-block;}
.level1{background:#50e4ce;}
.level2{background:#4a87f6;}
.level3{background:#fa9f47;}
.level4{background:#fad247;}
.level5{background:#5061e4;}
.level6{background:#ac47fa;}
.level .num{display:inline-block;}
.wealth{font-size: 12px; white-space: nowrap;}
.wealth .icons{margin-top: -3px;vertical-align: middle;}


</style>

