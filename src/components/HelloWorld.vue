<template>
  <div class="hello">
    <el-form label-width="80px" :inline="true">
      <el-form-item style="color:red" label="百度百科">
        <el-input autocomplete clearable="" size="mini" v-model="msg" style="width: 150px;" placeholder="请输入搜索关键词" />
      </el-form-item>
      <el-button type="text" class="el-icon-search" style="margin" @click="getAnswer"></el-button>
    </el-form>
    <p>{{ans}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    ans: String
  },
  methods: {
    getAnswer: function (val) {
      this.$axios({
        url: 'https://www.so.com/s?ie=utf-8&fr=se7_newtab_new&src=home_se7_newtab_new&q=' + this.msg,
        method: 'get'
      })
        .then(resp => {
          let oicq = resp.data
          this.$emit('chidlFn', oicq)
        })
        .catch(err => {
          let errciq = err.response
          this.$emit('chidlFn', errciq)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
