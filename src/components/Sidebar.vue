<template>
  <div class="sidebar">
    <section class="details">
      <img class="details_logo" src="../assets/logo.png" alt="image, logo" />
      <span class="details_name">John Doe</span>
    </section>
    <section class="nav">
      <ul>
        <li>
          <router-link class="nav-item" to="/">
            <i class="material-icons">home</i><span>home</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/about">
            <i class="material-icons">person</i><span>about</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/skills-and-experiences"><i class="material-icons">settings</i><span>skills and experiences</span></router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/blog"><i class="material-icons">message</i><span>blog</span></router-link>
        </li>
      </ul>
    </section>
    <section class="socials"></section>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sidebar.scss";
</style>
