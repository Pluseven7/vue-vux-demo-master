import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    direction: 'forward',
    boardvalue: '标题',
  },

  actions: {
    FETCH_LOADING: ({commit, state}) => {
      return state.loading
    },
    CHANGE_BOARDVALUE: ({commit},state) => {
      commit('SET_BOARDVALUE',state)
    }
  },

  mutations: {
    SET_LOADING: (state, bool) => {
      state.loading = bool
    },

    SET_DIRECTION: (state, str) => {
      state.direction = str
    },

    SET_BOARDVALUE: (state, value) => {
      state.boardvalue = value
      console.log(value)
    }
  },

  getters: {
    loading (state, getters) {
      return state.loading
    },
    direction (state, getters) {
      return state.direction
    },
    boardvalue (state, getters){
      return state.boardvalue
    }
  }
})

export default store
