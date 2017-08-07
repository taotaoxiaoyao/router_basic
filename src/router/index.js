import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import About from 'components/about/about'
import Document from 'components/document/document'
import Slider from 'components/document/slider'
import NotFound from 'components/404/not_found'
import Study from 'components/about/child/study'
import Work from 'components/about/child/work'
import Hobby from 'components/about/child/hobby'
import User from 'components/user/user'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
      }

      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      // console.log(position)
      return position
    }
  },
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        index: 0
      }
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      alias: '/index',
      meta: {
        index: 0
      }
    }, {
      path: '/about',
      component: About,
      children: [{
        path: '',
        name: 'study',
        component: Study,
        meta: {
          index: 1,
          title: 'about'
        }
      }, {
        // path: 'work',
        path: '/work',
        name: 'work',
        component: Work
      }, {
        // path: 'hobby',
        path: '/hobby',
        name: 'hobby',
        component: Hobby
      }]
    }, {
      path: '/document',
      name: 'document',
      components: {
        default: Document,
        left_nav: Slider
      },
      meta: {
        scrollToTop: true,
        index: 2
      }
    }, {
      path: '/notFound',
      name: 'notFound',
      component: NotFound,
      meta: {
        index: 3
      }
    }, {
      path: '/user/:tip?/:userId?',
      name: 'user',
      component: User,
      meta: {
        index: 4
      }
    }, {
      path: '*',
      // component: NotFound
      // redirect: '/home',
      // redirect: {name: 'Home'}
      redirect: (to) => {
        if (to.path === '/hello') {
          return '/home'
        } else {
          return {name: 'notFound'}
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(11111)
  if (to.meta.login) {
    next('/home')
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  console.log(222)
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    window.document.title = 'zn'
  }
})
export default router
