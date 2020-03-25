<template>
  <div class="home">
    <git />
    <disqus />
  </div>
</template>
<script>
import Git from '../components/Git'
import Disqus from '../components/Disqus'

export default {
  components: {
    Git,
    Disqus
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/home.scss";
</style>
