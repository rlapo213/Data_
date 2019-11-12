import Vue from 'vue'
import Vuex from 'vuex'


// 어느 변수를 전역으로 저장 가능

Vue.use(Vuex)

export default new Vuex.Store({
  //데이터 전역으로 선언
  //$store.state.변수명
  state: {
     
    },
    
  //geter seter
  mutations: {
    
  },
  //비동기 처리 (요청하는데 시간이 걸리는 것)
  actions: {

  }
})
