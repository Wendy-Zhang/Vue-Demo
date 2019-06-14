<template>
  <div>
    <div v-if="todos.length">
      <li v-for="todo in todos" :key="todo.id" :todo="todo">
        {{todo.text}}
        <button @click="remove(todo.id)">X</button>
        <!-- <button @click="remove2">X</button> -->
      </li>
    </div>
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
  let nextTodoId = 1
export default {
  props: {    //父组件没有传给子组件props,因此required=false。或者删除，否则报错
    todo: {
      type: Object,
      required: false
    }
  },

  data(){
      return{
          todos:[
              {
                id:nextTodoId++,
                text:'learn Vue'
              },
              {
                id:nextTodoId++,
                text:'study hard'
              },
              {
                id:nextTodoId++,
                text:'work hard'
              },
              {
                id:nextTodoId++,
                text:'get improvement'
              },
          ]
      }
  },
  
  methods:{
      remove(removeId){
          console.log("hello")
          this.todos = this.todos.filter(todo => {
              console.log("id:",todo.id)
              return todo.id !== removeId
          })
      }
  }
};
</script>

