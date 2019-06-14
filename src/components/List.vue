<template>
    <div class="list-main" :style="{height:listHeight}">
        <div class="li-heah">
            <span class="li-head-text bold" v-for="(item,index) in listHeader" :style="{width:rowsWidth[index]}">
                <i class="ml20 li-i"  v-text="item"></i>
            </span>
        </div>
        <div class="li-body">
            <ul class="list">
                <li class="list-item" v-for="item in currentData" v-if="listType == 'liveRecord'">
                    <span class="dib fs12" :style="{width:rowsWidth[0]}"><i class="li-i ml20 fs12" v-text="item.data+' '+item.time"></i></span>
                    <span class="dib fs12" :style="{width:rowsWidth[1], float:'right'}"><i class="li-i ml20 fs12" v-text="item.users"></i></span>
                </li>
                <li class="list-item" v-for="item in currentData" v-if="listType == 'cashRecord'">
                    <span class="dib fs12" :style="{width:rowsWidth[0],display:'inline-block'}" ><i class="li-i ml20 fs12" v-text="item.gold"></i></span>
                    <span class="dib fs12" :style="{width:rowsWidth[1],display:'inline-block'}"><i class="li-i ml20 fs12" v-text="item.ctime"></i></span>
                    <span class="dib fs12" :style="{width:rowsWidth[2],display:'inline-block'}">
                        <i :class="(item.status == 1 ? 'green' : (item.status == 3 ? 'red' : ''))">{{item.status == 1 ? 'Processing' : (item.status == 3 ? 'Fail' : 'Success')}}</i>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'List',
    props:["listHeader","currentData","rowsWidth","listType","listHeight"],
    // data() {
    //     return {
    //         // listType: ''
    //     }
    // }
}
</script>

<style scoped>
.list-main{width: 100%; text-align: left; margin-top: 25px;}
.li-heah{background: #F8F8F8; height: 43px; width: 92%;margin:0 auto; line-height: 43px; font-size: 14px; white-space: nowrap; color: #585858; border-right: 2px solid #f8f8f8;}
.li-i{font-style: normal;}
.red{color:#FF5F85;}
.green{color:#66E7D4;}
.li-head-text{display: inline-block;}
.list-item{width: 100%; height: 37px; line-height: 37px; border: 1px solid #f4f4f4; border-top: 0; white-space: nowrap;overflow: hidden; font-size:13px;}
.li-body{width: 96%; color: #979797; font-size: 14px;}
</style>

