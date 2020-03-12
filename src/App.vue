<template>
  <div id="app">
    <sidebar/>
    <router-view/>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar'
export default {
  components: {
    Sidebar
  }
}
</script>
<style lang="scss">
@import "./assets/main.scss";

</style>
