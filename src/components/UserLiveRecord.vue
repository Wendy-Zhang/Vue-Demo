<template>
    <!-- <transition name="slide"> -->
        <div class="content-main">
            <div class="titleStyle"> Live Record</div>
            <div class="list-wrap">
                <PagingList :onePageNum = "onePageNum" :isShowPaging="true" :listType="listType" :listHeight="listHeight" :data="liveRecordList" :listHeader="listHeader" :rowsWidth="rowsWidth" ></PagingList>
            </div>
        </div>
    <!-- </transition> -->
</template>

<script>
import PagingList from './PagingList.vue'
export default {
    name:'UserLiveRecord',
    data(){
        return{
            // liveRecordFetchUrl:'http://example.com/live.php',
            onePageNum:19,
            listType:'liveRecord',
            rowsWidth:['80%','20%'],
            listHeight:'765px',
            listHeader:['Calculate Time','ACU'],
            liveRecordList: null
        }
    },
    components:{
        PagingList
    },
    mounted(){
        setTimeout(()=>{
            this.liveRecordList=[
            {
            "uid": "10000",
            "users": "6",
            "create_time": "1470451202",
            "data": "2016-08-06",
            "time": "02:40:02"
            },
            {
            "uid": "10000",
            "users": "8",
            "create_time": "1470451501",
            "data": "2016-08-06",
            "time": "02:45:01"
            },
            {
            "uid": "10000",
            "users": "20",
            "create_time": "1470451801",
            "data": "2016-08-06",
            "time": "02:50:01"
            },
            {
            "uid": "10000",
            "users": "48",
            "create_time": "1470452101",
            "data": "2016-08-06",
            "time": "02:55:01"
            },
            {
            "uid": "10000",
            "users": "44",
            "create_time": "1470452401",
            "data": "2016-08-06",
            "time": "03:00:01"
            },
            {
            "uid": "10000",
            "users": "44",
            "create_time": "1470452701",
            "data": "2016-08-06",
            "time": "03:05:01"
            },
            {
            "uid": "10000",
            "users": "46",
            "create_time": "1470453001",
            "data": "2016-08-06",
            "time": "03:10:01"
            },
            {
            "uid": "10000",
            "users": "44",
            "create_time": "1470453301",
            "data": "2016-08-06",
            "time": "03:15:01"
            },
            {
            "uid": "10000",
            "users": "46",
            "create_time": "1470453601",
            "data": "2016-08-06",
            "time": "03:20:01"
            },
            {
            "uid": "10000",
            "users": "46",
            "create_time": "1470453901",
            "data": "2016-08-06",
            "time": "03:25:01"
            },
            {
            "uid": "10000",
            "users": "46",
            "create_time": "1470454201",
            "data": "2016-08-06",
            "time": "03:30:01"
            },
            {
            "uid": "10000",
            "users": "43",
            "create_time": "1470454502",
            "data": "2016-08-06",
            "time": "03:35:02"
            },
            {
            "uid": "10000",
            "users": "47",
            "create_time": "1470454801",
            "data": "2016-08-06",
            "time": "03:40:01"
            },
            {
            "uid": "10000",
            "users": "48",
            "create_time": "1470455101",
            "data": "2016-08-06",
            "time": "03:45:01"
            },
            {
            "uid": "10000",
            "users": "49",
            "create_time": "1470455401",
            "data": "2016-08-06",
            "time": "03:50:01"
            },
            {
            "uid": "10000",
            "users": "46",
            "create_time": "1470455701",
            "data": "2016-08-06",
            "time": "03:55:01"
            },
            {
            "uid": "10000",
            "users": "45",
            "create_time": "1470456001",
            "data": "2016-08-06",
            "time": "04:00:01"
            },
            {
            "uid": "10000",
            "users": "46",
            "create_time": "1470456301",
            "data": "2016-08-06",
            "time": "04:05:01"
            },
            {
            "uid": "10000",
            "users": "44",
            "create_time": "1470456601",
            "data": "2016-08-06",
            "time": "04:10:01"
            },
            {
            "uid": "10000",
            "users": "45",
            "create_time": "1470456901",
            "data": "2016-08-06",
            "time": "04:15:01"
            },
            {
            "uid": "10000",
            "users": "42",
            "create_time": "1470457201",
            "data": "2016-08-06",
            "time": "04:20:01"
            },
            {
            "uid": "10000",
            "users": "45",
            "create_time": "1470457501",
            "data": "2016-08-06",
            "time": "04:25:01"
            },
            {
            "uid": "10000",
            "users": "43",
            "create_time": "1470457801",
            "data": "2016-08-06",
            "time": "04:30:01"
            },
            {
            "uid": "10000",
            "users": "10",
            "create_time": "1470458101",
            "data": "2016-08-06",
            "time": "04:35:01"
            },
            {
            "uid": "10000",
            "users": "33",
            "create_time": "1470458401",
            "data": "2016-08-06",
            "time": "04:40:01"
            }]
            ,1500
         })
    }
}
</script>
<style scoped>
.titleStyle{
    /* margin-top: 20px; */
   font-size: 18px;
   font-weight: bold;
   background:#fff;
   padding: 20px;
}
.content-main{
    margin-left: 40px;
}
</style>

