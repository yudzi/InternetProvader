import { createApp } from 'vue';
import * as VueRouter from 'vue-router'
import App from './pages/App.vue';
import Main from './pages/Main.vue'
import Uslugi from './pages/Uslugi.vue'
import Serveri from './pages/Serveri.vue'
import DlyDom from './pages/DlyDom.vue'
import DlyGame from './pages/DlyGame.vue'
import DlyRazvitia from './pages/DlyRazvitia.vue'
import Nabludenie from './pages/Nabludenie.vue'
import Cash from './pages/Cash.vue'


const routes = [
    { path: '/', component: Main },
    { path: '/Serveri', component: Serveri },
    { path: '/Uslugi', component: Uslugi },
    { path: '/DlyDom', component: DlyDom},
    { path: '/DlyGame', component: DlyGame},
    { path: '/DlyRazvitia', component: DlyRazvitia},
    { path: '/Nabludenie', component: Nabludenie},
    { path: '/Cash', component: Cash}
    

  ]

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  });
const app = createApp(App)
app.use(router)
app.mount('#app');
