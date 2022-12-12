import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import getters from "@/store/getters";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    nodeMap: new Map(),
    isEdit: null,
    selectedNode: {},
    selectFormItem: null,
    design:{},
    runningList: [],
    noTakeList: [],
    endList: [],
    diagramMode: 'design',
  },
  mutations: {
    selectedNode(state, val) {
      state.selectedNode = val
    },
    loadForm(state, val){
      state.design = val
    },
    setIsEdit(state, val){
      state.isEdit = val
    }
  },
  getters: getters,
  actions: {},
  modules: {
    user
  }
})
