import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogEntries from '@/assets/data/blogs.json'

Vue.use(VueRouter)

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries.stories.map((child: { id: any }) => ({
    path: child.id,
    name: child.id,
    component: () => import(`@/markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('@/views/Blog.vue'),
    children
  }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  ...blogRoutes
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})

export default router
