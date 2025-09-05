import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Aposta from '../pages/Aposta.vue'
import Apostador from '../pages/Apostador.vue'
import Cavalo from '../pages/Cavalo.vue'
import Rodada from '../pages/Rodada.vue'
import Campeonato  from '../pages/Campeonato.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aposta',
    name: 'Aposta',
    component: Aposta
  },
  {
    path: '/apostador',
    name: 'Apostador',
    component: Apostador
  },
  {
    path: '/cavalo',
    name: 'Cavalo',
    component: Cavalo
  },
  {
    path: '/rodada',
    name: 'Rodada',
    component: Rodada
  },
  {
    path: '/campeonato',
    name: 'Campeonato',
    component: Campeonato
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router