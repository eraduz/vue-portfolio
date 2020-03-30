<template>
  <section class="blog_section">
    <section class="title">
      <span class="iconify" data-icon="jam:write" data-inline="false"></span>Latest post
    </section>
    <section class="blogposts">
      <section class="post" v-for="post in filterPost()" :key="post.id">
        <section class="info">
          <router-link class="blogtitle" :to="`/blog/${post.url}`" exact>
            <span>{{ post.title }}</span>
          </router-link>
          <span class="description">{{post.description}}</span>
          <section class="footer">
            <section class="footer-item">
              <i class="material-icons">calendar_today</i>
              <span>{{moment(post.date, 'DDMMYYYY hh:mm').fromNow() }}</span>
            </section>
          </section>
        </section>
      <router-link class="thumbnail" :to="`/blog/${post.url}`" exact>
      <img :src="require('@/assets/images/' + post.thumbnail)" alt="thumbnail" class="thumbnail_image" />
      </router-link>
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
  },
  methods: {
    filterPost () {
      return this.posts.blog.filter(
        post => post.isNew === true
      )
    }
  }
}
</script>
