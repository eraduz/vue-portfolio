<template>
  <section class="git_section">
    <section class="title">
      <span class="iconify" data-icon="cil:layers" data-inline="false"></span>Projects
    </section>
    <section class="repositories">
      <section class="repository" v-for="repository in repositories" :key="repository.id">
        <a
          :href="'https://github.com/eraduz/' + repository.name"
          target="_blank"
        >{{repository.name}}</a>
        <span>{{ repository.description }}</span>
        <section class="footer">
          <section class="language footer-item">
            <i class="material-icons">code</i>
            <span>{{repository.language}}</span>
          </section>
          <section class="starred footer-item">
            <i class="material-icons">star_border</i>
            <span>{{repository.stargazers_count}}</span>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>
<style lang="scss" scoped>
@import "../assets/git.scss";
</style>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      repositories: null
    }
  },
  mounted () {
    axios
      .get('https://api.github.com/users/eraduz/repos')
      .then(
        response =>
          (this.repositories = response.data.filter(
            repo => repo.stargazers_count >= 1
          ))
      )
      .catch(error => console.log(error))
  }
}
</script>
