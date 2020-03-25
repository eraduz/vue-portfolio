<template>
  <section class="blog_section">
    <section class="title">
      <span class="iconify" data-icon="jam:write" data-inline="false"></span>Blog
    </section>
    <section class="blogposts">
      <!-- {{ console.log(posts) }} -->
      <section class="post" v-for="post in posts.blog" :key="post.blog.id">
        <span>{{post.id}}</span>
        </section>
      </section>
    </section>
</template>
<style lang='scss' scoped>
@import "@/assets/styles/blog.scss";
</style>
<script>
import posts from '../assets/data/blogs.json'
export default {
  data () {
    return {
      posts: Object
    }
  },
  ...console.log(posts.blog)
}
</script>
