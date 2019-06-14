<template>
    <div class="inputStyle">
        <BaseInputText v-model="newTodoText" placeholder="New todo" @keydown.enter="addTodo"></BaseInputText>
        <ul>
            <TodoListItem ref="todoListItem"></TodoListItem>
        </ul>
        <!-- <p v-show="showWarning">
			Nothing left in the list. Add a new todo in the input above.
		</p> -->
    </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue"
import TodoListItem from './TodoListItem.vue'
export default {
    components:{
        BaseInputText,
        TodoListItem
    },
    data(){
        return{
            newTodoText:'',
        }
    },
    methods:{
        addTodo(){
            let nextTodoId = this.$refs.todoListItem.todos.length +1
            console.log( "ww",this.$refs.todoListItem.todos.length)
            const trimmedText = this.newTodoText.trim()
            if(trimmedText){
                this.$refs.todoListItem.todos.push({
                    id:nextTodoId++,
                    text:trimmedText
                })
                this.newTodoText = ''
            }
        }
    },
}
</script>
<style>
.inputStyle{
    margin:0 auto;
    max-width:400px;
}
</style>


