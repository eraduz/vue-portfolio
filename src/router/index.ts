import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogEntries from '@/assets/data/blogs.json'

Vue.use(VueRouter)

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries.blog.map((child: { url: any }) => ({
    path: child.url,
    name: child.url,
    component: () => import(`@/markdowns/${section}/${child.url}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('@/views/Blogpost.vue'),
    children
  }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog.vue')
  },
  {
    path: '/skills-and-experiences',
    name: 'Skills-and-experpiences',
    component: () => import('@/views/Skills-and-experiences.vue')
  },
  ...blogRoutes
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})

export default router
