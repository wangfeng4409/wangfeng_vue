<template>
  <div class="hello">
    <el-button type="primary" @click="back">返回</el-button>
    <div>
      <p>obj.a: {{obj.a}}</p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
    </div>
    <div>{{ msg | capitalize }}</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      obj: {
        a: 123
      },
      msg: 'hello'
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  watch: {
    // obj: {
    //   handler (newName, oldName) {
    //     console.log(newName, oldName)
    //     console.log('obj.a changed')
    //   },
    //   immediate: true, // 最初绑定的时候就执行
    //   deep: true // 深度监听obj中属性的变化
    // },

    'obj.a': {
      handler (newName, oldName) {
        console.log(newName, oldName)
        console.log('obj.a changed')
      },
      immediate: true // 最初绑定的时候就执行
      // deep: true // 深度监听obj中属性的变化,如果只监听obj中某一属性的变化,可以用字符串形式监听,上述方法的延伸
    }
  }
}
</script>

<style scoped>

</style>
