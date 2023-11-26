<template>
    <div class="container">
      <div class="card-container">
        <div class="card">
          <div class="card-header">
            <p>Add List</p>
          </div>
          <div class="card-body">
            {{ currTask }}
            <div class="task" :style="inputEl">
              <label for="task">Task : </label>
              <input v-model="currTask.task" id="task" type="text" placeholder="Enter task" name="task"/>
            </div>
            <div class="date" :style="inputEl">
              <label>Date : </label>
              <input v-model="currTask.date" id="date" type="date" name="date"/>
            </div>
            <div class="description" :style="inputEl">
              <label >Description : </label>
              <input v-model="currTask.description" id="description" placeholder="Enter description" name="description"/>
            </div>
            <div class="submit">
              <button type="submit" @click="addTodo">Add List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref,defineEmits } from 'vue'

    const emit = defineEmits(['addTodoList'])
  
    const inputEl = ref(`
      color:blue;
      margin-bottom:10px
    `)
  
    const currTask = ref({
      task: '',
      date: '',
      description: ''
    })
  
    const addTodo = () => {
      emit('addTodoList',{...currTask.value})
      resetForm()
      router.push('/')
    }

    const resetForm = () => {
        currTask.value = {
            task: '',
            date: '',
            description: ''
        }
    }
  
    // const inputEl = ref({
    //   color: 'red'
    // });
  </script>
  
  <style scoped>
    .card-container{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  
    .card{
      width: 300px;
      background-color: aquamarine;
      border-radius: 5px;
      overflow: hidden;
      padding : 10px
    }
  
    .header{
      text-align: center;
    }
  
    .home-header{
      text-align: center;
    }
  
    
  </style>