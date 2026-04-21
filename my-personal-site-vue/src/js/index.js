import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutMe from '../pages/AboutMe.vue'
import GamesHome from '../pages/games/GamesHome.vue'
import TicTacToe from '../pages/games/TicTacToe.vue'
import BrickBreaker from '../pages/games/BrickBreaker.vue'
import ToolsHome from '../pages/devtools/ToolsHome.vue'
import SqlCleaner from '../pages/devtools/SqlCleaner.vue'
import FallacyAnalyzer from '../pages/devtools/FallacyAnalyzer.vue'

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