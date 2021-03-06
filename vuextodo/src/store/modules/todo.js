

export default {
    namespaced: true,
    // actions 에서 서버에 비동기로 데이터베이스를 업데이트, 완료 후 mutations을 통해 data 업테이트
  state: {
    // data
    todos: [
      { id: 1, text: "learn vue", checked: false },
      { id: 2, text: "play game", checked: false },
    ],

  },
  mutations: {
    // 실질적으로 data를 바꿈
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === todoId;
      });
      state.todos.splice(index, 1);
    },

  },
  actions: {
    // 함수, 비동기적인 일 처리 > matations 한테 data 바꿔달라고 요청 (methods 와 비슷)
    //actions를 사용할 땐 dispatch를 사용
    // addTodo(context, value) {
    // }
    addTodo({ commit }, value) {
      //여기에 비동기 작업
      setTimeout(function () {
        commit("ADD_TODO", value);
      }, 500);
    },
    toggleTodo({ commit }, payload) {
      setTimeout(function () {
        commit("TOGGLE_TODO", payload);
      }, 500);
    },
    deleteTodo({ commit }, todoId) {
      setTimeout(function () {
        commit("DELETE_TODO", todoId);
      }, 500);
    },
  },
  getters: {
    //computed와 비슷
    numberOfCompletedTodo: state => {
      return state.todos.filter(todo => todo.checked).length;
    }
  },
}