<template>
  <div class="header">
    <h1>Homepage</h1>
  </div>
  <div class="home-header">
    <h4>To Do List App</h4>
  </div>
  <div class="container">
    {{ todoList }}
    
  </div>
</template>

<script setup>
import { ref,onMounted,useStore }from 'vue'

const store = useStore()

onMounted(() => {
  todoList.value = store.state.todo.todoList;
});

  const todoList = ref([])

  
</script>

<style scoped>

</style>