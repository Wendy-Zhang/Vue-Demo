// 分页组件

<template>
  <div class="pager">
    <a
      href="javascipt:;"
      :class="'btn btn-pager ' + (currentPage <= 1 ? 'disabled' : '')"
      @click="prePage"
    >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </a>
    <span
      v-if="totalPage !== 1"
      :class="'page-index ' + (1 == currentPage ? 'active' : '')"
      @click="goPage(1)"
    >1</span>
    <span v-if="preClipped" class="page-index not-pointed">...</span>
    <span
      v-for="index in pages"
      :class="'page-index '+(index == currentPage ? 'active' : '')"
      @click="goPage(index)"
      v-text="index"
    ></span>
    <span v-if="backClipped" class="page-index not-pointed">...</span>
    <span :class="'page-index '+(totalPage == currentPage ? 'active':'')" @click="goPage(totalPage)" v-text="totalPage"></span>
    <a
      href="javascript:;"
      :class="'btn btn-pager ' + (currentPage >= totalPage ? 'disabled' : '')"
      :disabled="this.currentPage == totalPage"
      @click="nextPage"
    >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontjiantou2"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
    props:{
        totalPage:{
            type:Number,
            default:2
        },
        gotoCallback:{}
    },
    // watch: {
    //     totalPage(now) {
    //         console.log('ds', now)
    //     }
    // },
    data(){
        return{
            preClipped:false,
            backClipped:true,
            currentPage:1
        }
    },
    methods:{
        prePage(){
            if(this.currentPage <= 1){
                return false
            }
            this.currentPage--;
            this.gotoCallback(this.currentPage)
        },
        nextPage(){
            if(this.currentPage >= this.totalPage){
                return false
            }
            this.currentPage++;
            this.gotoCallback(this.currentPage)
        },
        goPage(index){
            if(index !== this.currentPage){
                this.currentPage = index
            }
            this.gotoCallback(this.currentPage)
        },   
    },
    computed:{
            pages(){
                let ret = []
                if(this.currentPage > 3){
                    ret.push(this.currentPage-2)
                    ret.push(this.currentPage-1)
                    if(this.currentPage >4){
                        this.preClipped = true
                    }
                }else{
                    this.preClipped = false
                    for(let i=2;i < this.currentPage;i++){
                        ret.push(i)
                    }
                }
                if(this.currentPage !== this.totalPage && this.currentPage !== 1){
                    ret.push(this.currentPage)
                }
                if(this.currentPage < (this.totalPage -2)){
                    ret.push(this.currentPage+1)
                    ret.push(this.currentPage+2)
                    if(this.currentPage <= (this.totalPage - 3)){
                        this.backClipped = true
                    }
                }else{
                    this.backClipped = false
                    for(let i = (this.currentPage + 1);i<this.totalPage;i++){
                        ret.push(i)
                    }
                }
                console.log(ret)
                return ret
            }
    }
    
}
</script>
<style scoped>
.pager {
  -webkit-user-select: none;
  user-select: none;
  transition: all .3s;
  margin-top: 30px;
  padding:0 30px 20px 0;
  text-align: right;
  color: #D2D2D2;
  font-size: 13px;
}
.btn-pager {
  padding: 0px;
  text-align: center;
  vertical-align: middle;
  color: #D2D2D2;
  border: 0;
  background: none;
  border-radius: 0px;
  display: inline-block;
}
.btn-pager:first-child{
  margin-right: 12px;
}
.btn-pager:last-child{
  margin-left: 12px;
}
.btn-pager:hover {
  color: #50E3CE;
}
.btn-pager .icons{
  vertical-align: middle;
}
.page-index {
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  margin-left: 4px;
  padding: 0 7px;
  height: 22px;
  line-height: 22px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  cursor: pointer;
}
.not-pointed{
  cursor: default; 
}
.active {
  color: #ffffff;
  background-color: #50E3CE;
}
.disabled{
  cursor: not-allowed;
}
</style>




