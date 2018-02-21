import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import routes from '@/routes'

import EventBus from '@/components/pluggins/event-bus'

import msToMm from '@/filters/ms-to-mn'
import blur from '@/directives/blur'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

// Ojo con el History mode
const router = new VueRouter({routes, mode: 'history'})

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})