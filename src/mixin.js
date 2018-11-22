export const mixinTest1 = {
  created () {
    this.visiable = 'All'
    console.log(this.$options.haha)
  },
  methods: {
    hello () {
      console.log('mixinTest1')
    }
  }
}
