<template>
  <section class="blog_section">
    <section class="title">
      <span class="iconify" data-icon="jam:write" data-inline="false"></span>Latest post
    </section>
    <section class="blogposts">
      <section class="post" v-for="post in posts.blog" :key="post.id">
        <router-link class="blogtitle" :to="`/blog/${post.url}`" exact>
          <span>{{ post.title }}</span>
        </router-link>
        <span class="description">{{post.description}}</span>
        <img :src="require('@/assets/images/' + post.thumbnail)" alt="aa" class="src">
        <section class="footer">
          <section class="footer-item">
            <i class="material-icons">calendar_today</i>
            <span>{{moment(post.date, 'DDMMYYYY').fromNow()}}</span>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>
<style lang='scss' scoped>
@import "@/assets/styles/blog.scss";
</style>
<script>
import posts from '@/assets/data/blogs.json'
import moment from 'moment'

export default {
  data () {
    return {
      posts: posts,
      moment: moment
    }
  }
}
</script>
