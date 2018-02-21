import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'

const routes = [
    { path: '/', component: Search, name: 'Search' },
    { path: '/about', component: About, name: 'About' },
    { path: '/track/:id', component: TrackDetail, name: 'Track' }
]

export default routes