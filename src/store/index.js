import Vue from 'vue' // 引入vue
import Vuex from 'vuex' // 引入vuex

Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
  // state：页面状态管理容器对象。集中存储Vue components
  // 中data对象的零散数据，全局唯一，以进行统一的状态管理。
  // 页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。
  state: {
    count: 1
  },
  // getters：state对象读取方法。图中没有单独列出该模块，
  // 这个方法包含在了render中，Vue Components通过该方法读取全局state对象。
  getters: { // 计算state的中的属性值, 第二个参数getters就是store中的getters
    // 只允许接收两个参数,第二个参数getters就是store中的getters
    getStateCount (state, getters) {
      return state.count + 1
    }
  },
  // mutations：状态改变操作方法。是Vuex修改state的唯一推荐方法，
  // 其他修改方式在严格模式下将会报错。该方法只能进行同步操作，
  // 且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等
  mutations: { // 更改vuex的store中的状态的唯一方法是提交mutations; mutations只能进行同步操作
    add (state) {
      state.count = state.count + 1
    },
    reduce (state, n) {
      state.count = state.count - n
    }
  },
  // 注册actions,类似vue里的methods;
  // action的作用是不能在vue中直接提交改变更改store中state的状态，action提交的是mutation,而不是直接变更状态;
  // 其中action通过 store.dispatch 方法触发

  // actions 操作行为处理模块; 可以进行异步操作; 一下为actions的含义：
  // 负责处理Vue Components接收到的所有交互行为。
  // 包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。
  // 向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。
  // 该模块提供了Promise的封装，以支持action的链式触发
  actions: {
    addCount (context) { // 接收一个与store实例具有相同方法的属性的context对象
      console.log(context)
      context.commit('add') // 提交一个 mutations
    },
    reduceCount (context, n) { // 接收一个与store实例具有相同方法的属性的context对象
      context.commit('reduce', n)
    }
  }
})

export default store // 导出store
