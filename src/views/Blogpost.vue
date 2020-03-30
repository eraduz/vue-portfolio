<template>
  <div class="blog">
    <router-link to="/blog" tag="a" class="back">
      <i class="material-icons">keyboard_backspace</i>
      <span>back to blog</span>
    </router-link>
    <section class="top" v-for="post in filterPost()" :key="post.id">
      <img
        :src="require('@/assets/images/' + post.thumbnail)"
        alt="thumbnail"
        class="thumbnail_image"
      />
      <h1 class="title">{{post.title}}</h1>
      <section class="footer">
        <i class="material-icons">calendar_today</i>
        <span>{{moment(post.date, 'DDMMYYYY hh:mm').format('LL') }}</span>
      </section>
    </section>
    <section class="post">
      <router-view />
    </section>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/styles/blogpost.scss";
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
  },
  methods: {
    filterPost () {
      return this.posts.blog.filter(
        post => post.url === this.$router.currentRoute.name
      )
    }
  }
}
</script>
