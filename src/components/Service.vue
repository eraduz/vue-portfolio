<template>
  <p id='lol'>{{ info }}</p>
</template>
<script defer>
import axios from 'axios'
import Vue from 'vue'
/* eslint-disable no-new */
new Vue({
  el: '#lol',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}).$mount('#lol')

</script>
