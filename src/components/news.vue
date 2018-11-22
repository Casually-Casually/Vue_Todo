<template>
    <div class="news">
      <h1>新闻Page</h1>
      <ul class="ullist">
        <li v-for="item in news" :key="item.id">
          {{item.path}}
          <router-link class="listitem" :to="'/news/'+item.paths"> {{item.title}}</router-link>
        </li>
      </ul>
      <div class="goback" >
       <router-link class="goback" to="/todo">Go back</router-link>
      </div>
       <i>------------------watch 侦听器-----------------</i>
      <div id="watch-example">
        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>
      </div>
      <i>------------------子路由出口位置-----------------</i>
      <router-view :post-title="news" v-on:sendVal="sendVal" class="date-picker-theme-dark">
 <span slot="header">hello world</span>

<span slot="main">hello world</span>

<span slot="footer">hello world</span>

<div slot="other" slot-scope="data">{{otherData}}{{data}}</div>


      <template slot="item" slot-scope="props">

        <li>{{props}}</li>

      </template>
      </router-view>
    </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: "news",
  data() {
    return {
      question: "",
      otherData: 'slot  传递的参数',
      answer: "I cannot give you an answer until you ask a question!",
      news: [
        { title: "task1", paths: "task1" },
        { title: "task2", paths: "task2" },
        { title: "task3", paths: "task3" },
        { title: "task4", paths: "task4" }
      ]
    };
  },
  watch:{
    question:{
      handler: function(val, oldVal) {
       this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      },
      deep: true
    }
  },
  created() {

    console.log('this', this._)
     this.debouncedGetAnswer = this._.debounce(this.getAnswer, 1500)
  },
  methods: {
    sendVal(data, arg2) {
      console.log("子组件传给父的值:", data, arg2);
    },
    getAnswer() {
      if(this.question.indexOf('?') === -1){
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      let vm = this
      axios.get('https://yesno.wtf/api').then(response=>{
          vm.answer = vm._.capitalize(response.data.answer)
      }).catch(err0r=>{
          vm.answer = 'Error! Could not reach the API. ' + error
      })
    }
  }
};
</script>
<style scoped>
.news {
  text-align: center;
  margin: 0 auto;
}
.ullist {
  list-style: none;
  width: 20%;
  margin: 0 auto;
  padding: 0;
}
.listitem {
  text-decoration: none;
  color: #000;
}
.goback {
  text-align: right;
  color: #f66;
  font-size: 18px;
  text-decoration: none;
}
</style>
