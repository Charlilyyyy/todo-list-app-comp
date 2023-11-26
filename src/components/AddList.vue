<template>
    <div class="header">
      <h1>Add List</h1>
    </div>
    <div class="home-header">
      <h4>To Do List App</h4>
    </div>
    <div class="container">
      {{ todoList }}
      <Card @addTodoList="handleAddTodoList"/>
      
    </div>
  </template>
  
  <script setup>
  import { ref }from 'vue'
  import Card from './Card.vue';
  
    const todoList = ref([])
  
    const handleAddTodoList = (data)=>{
      todoList.value.push(data)
    }
  </script>
  
  <style scoped>
  
  </style>