import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import AboutMe from '../components/AboutMe.vue'
import GamesHome from '../components/Games/GamesHome.vue'
import TicTacToe from '../components/Games/TicTacToe.vue'
import BrickBreaker from '../components/Games/BrickBreaker.vue'
import ToolsHome from '../components/Tools/ToolsHome.vue'
import SqlCleaner from '../components/Tools/SqlCleaner.vue'
import FallacyAnalyzer from '../components/Tools/FallacyAnalyzer.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutMe
  },
  {
    path: '/games',
    component: GamesHome
  },
  {
    path: '/tic-tac-toe',
    component: TicTacToe
  },
  {
    path: '/brick-breaker',
     component: BrickBreaker
  },
  {
    path: '/tools',
    component: ToolsHome
  },
  {
    path: '/sql-cleaner',
    component: SqlCleaner
  },
  {
    path: '/falacy',
    component: FallacyAnalyzer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router