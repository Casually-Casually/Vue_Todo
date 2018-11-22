<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
export default {
  name: "App",
  created() {
    // 全局过滤器
    Vue.filter("capitalize", function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
    Vue.directive("foucus", {
      //  指令第一次绑定到元素时候调用。只调用一次。可用来执行一些初始化的操作
      bind: function(el, binding) {
        el.style.color = "pink";
      },
      // 被绑定元素插入父节点时调用 。
      inserted: function(el, binding) {
        console.log("i", el);
        el.focus();
      },
      update: function(el, binding, vnode, oldVnode) {
        el.value += el.dataset.name + "2";
        // console.table({
        //   name: binding.name,
        //   value: binding.value,
        //   oldValue: binding.oldValue,
        //   expression: binding.expression,
        //   arg: binding.arg,
        //   modifiers: binding.modifiers,
        //   vnode: vnode,
        //   oldVnode: oldVnode
        // });
        // el.focus()
        el.style.color = "red";
      },
      componentUpdated: function(el, binding, vnode, oldVnode) {
        // console.log("componentUpdated", el);
      },
      // 解绑的时候调用
      unbind: function(el) {
        console.log(el);
      }
    });
  }
};
</script>

<style>
body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  font-smoothing: antialiased;
  font-weight: 300;
}
</style>
