<template>
    <input type="text" class="input" :value="value" v-on="listeners">
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            default:'',
        }
    },
    computed:{
        listeners(){
            return{
                ...this.$listeners,
                input:event => this.$emit('input',event.target.value)
            }
        }
    }
}
</script>
<style>
.input{
    width:100%;
    padding: 5px;
    border:solid 1px black
}

</style>


