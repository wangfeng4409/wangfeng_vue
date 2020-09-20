<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>我是从页面上直接获取的：{{ this.$store.state.count }}</h3>
    <h4>我是从Getters获取的计算后的值：{{ this.$store.getters.getStateCount }}</h4>

    <div>count的值：{{ this.$store.state.count }}</div>
    <button @click="addCount">+</button>
    <button @click="reduceCount">-</button>

    <div>我是HelloWorld.vue页面直接获取的：{{ count1 }}</div>
    <el-button type="primary" @click="jump">跳转</el-button>
  </div>
</template>

<script>
// import { mapState, mapActions, mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'wangfeng'
    }
  },
  computed: {
    ...mapState({
      count1: state => state.count
    })
  },
  methods: {
    addCount () {
      // this.$store.commit('add')
      // store.dispatch 可以处理被触发的 action 中的函数
      // dispatch：操作行为触发方法，是唯一能执行action的方法
      this.$store.dispatch('addCount')
    },
    reduceCount () {
      // this.$store.commit('reduce')
      this.$store.dispatch('reduceCount', 2)
    },
    jump () {
      console.log(this.$router)
      this.$router.push({
        name: `Index`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
