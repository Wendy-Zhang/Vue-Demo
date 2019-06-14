<template>
    <div class="paging-list"> 
        <loading v-if="!data"></loading>
        <div class="empty" v-if="data&&data.length==0">This  record is empty!</div>
        <div class="list-paing" v-if="data&&data.length!=0">
            <List v-if="data" :listHeight="listHeight" :currentData="currentData" :rowsWidth="rowsWidth" :listType="listType" :listHeader="listHeader"></List>
            <Paging v-if="isShowPaging" :totalPage="totalPage" :gotoCallback="gotoCallback"></Paging>
        </div>
    </div>
</template>

<script>
import List from './List.vue'
import Paging from './Paging.vue'
import Loading from './Loading.vue'
export default {
    name:'PagingList',
    data(){
        return{
            'currentPage':1
        }
    },
    props:['onePageNum','data','listType','listHeight','listHeader','rowsWidth','isShowPaging'],
    components:{
        List,
        Paging,
        Loading
    },
    computed:{
        totalPage(){
            // console.log(Math.ceil(this.data.length/this.onePageNum))
            return Math.ceil(this.data.length/this.onePageNum)
        },
        currentData(){
            return this.data.slice(this.onePageNum * (this.currentPage-1),this.onePageNum * this.currentPage)
        }
    },
    methods:{
        gotoCallback(index){
            this.currentPage = index
        }
    }
}
</script>
<style scoped>
    .paging-list{
        width:100%;
        background:#fff;
        /* height: 555px; */
    }
    .empty{
        margin-top:25px;
        color:#979797
    }
</style>

