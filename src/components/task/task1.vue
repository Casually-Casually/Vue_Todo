<template>
    <div class="input" v-bind="$attrs">
      <h1>task1</h1><h2>path:{{postTitle[0].title}}</h2>
 <slot  name="header">这是拥有命名的slot的默认内容</slot>

<slot  name="main">这是拥有命名的slot的默认内容</slot>

<slot  name="footer">这是拥有命名的slot的默认内容</slot>

<slot  name="other" v-for="item in items" :text="item.text" :myname="item.myname" data='bbb'>这是拥有命名的slot的默认内容</slot>

     <slot name="item" v-for="item in items" :text="item.text" :myname="item.myname">
         slot的默认内容
      </slot>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "task1",
  data() {
    return {
      value: "子组件的值",
      items:[
        {
          text:'值1',
          myname:'xieqin',
        }
      ]
    };
  },
  inheritAttrs: false,
  props: {
    postTitle: {
      type: [Object, String, Date, Array],
      required: false,
      default: function() {
        return new Date();
      },
      validator: function(value) {
        return ["success", "warning", "danger"].indexOf(value) == -1;
      }
    }
  },
  mounted() {
    // this.postTitle = '2'
    console.log("父组件通过props传给子组件的值：", this.postTitle);
    this.$emit("sendVal", this.value, "arg2");
  }
};
</script>
<style scoped>
div {
  text-align: center;
}
</style>
