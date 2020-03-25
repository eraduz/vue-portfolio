<template>
  <div class="home">
    <git />
    <blog />
  </div>
</template>
<script>
import Git from '@/components/Git'
import Blog from '@/components/Blog'

export default {
  components: {
    Git,
    Blog
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/home.scss";
</style>
