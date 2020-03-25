//Step 2 -- Define Routes
import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import Home1 from './components/Home1.vue'
import Home2 from './components/Home2.vue'
import Dashboard from './components/Dashboard.vue'

export default[
    { path: '/home1', component: Home1},
    { path: '/home2', component: Home2},
    { path: '/dashboard', component: Dashboard},
    { path: '/add', component: AddItem},
    { path: '/list', component: PageContent}
]