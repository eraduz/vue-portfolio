<template>
  <div class="sidebar">
    <section class="details">
      <img class="details_logo" :src="avatarUrl" alt="image, logo" />
      <a :href="htmlUrl" target="_blank" class="details_name">Reda Eradus</a>
    </section>
    <section class="nav">
      <ul>
        <li>
          <router-link class="nav-item" to="/" exact>
            <i class="material-icons">home</i>
            <span>home</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/about">
            <i class="material-icons">person</i>
            <span>about</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/skills-and-experiences">
            <i class="material-icons">settings</i>
            <span>skills and experiences</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/blog">
            <i class="material-icons">message</i>
            <span>blog</span>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="socials">
      <span
        onclick="window.open('https://linkedin.com/in/eraduz', '_blank')"
        class="iconify"
        data-icon="brandico:linkedin"
        data-inline="false"
      ></span>
      <span
        onclick="window.open('https://github.com/eraduz', '_blank')"
        class="iconify"
        data-icon="ant-design:github-filled"
        data-inline="false"
      ></span>
    </section>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      avatarUrl: '',
      htmlUrl: ''
    }
  },
  mounted () {
    axios
      .get('https://api.github.com/users/eraduz')
      .then(rsp => {
        this.avatarUrl = rsp.data.avatar_url
        this.htmlUrl = rsp.data.html_url
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/sidebar.scss";
</style>
