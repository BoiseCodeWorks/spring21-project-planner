import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/project/:id',
    name: 'ProjectDetails',
    component: loadPage('ProjectDetailsPage')

  },
  {
    path: '/profile/:id',
    name: 'Account',
    component: loadPage('AccountPage')
    // NOTE this line prevents the user from loading this page if they are not loggedin
    // beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
