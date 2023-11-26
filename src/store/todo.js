import { reactive } from "vue";

export const state = reactive({
  todoList: [],
});

export const mutations = {
  addTodoToList(state, data) {
    state.todoList.push(data);
  },
};
