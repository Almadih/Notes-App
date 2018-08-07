import Vue from 'vue'
import Router from 'vue-router'
import newNote from '../components/newNote'
import edit from '../components/edit'
import view from '../components/view'
import home from '../components/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component:home
    },
          {
      path: '/new',
      name: 'new',
      component:newNote
    },
          {
      path: '/edit/:id',
      name: 'edit',
      component:edit
    },
          {
      path: '/view/:id',
      name: 'view',
      component:view
    }
  ]
})
