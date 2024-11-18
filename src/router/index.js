import { createRouter, createWebHistory } from 'vue-router';
import UIUX from '@/pages/UIUX.vue';
import Trend from '@/pages/trend/Trend.vue';
import Loading from '@/pages/product/Loading.vue';
import MatchingProducts from '@/pages/product/MatchingProducts.vue';
import Accountbook from '@/pages/account/Accountbook.vue';
import ChatBot from '@/pages/business/ChatBot.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/trend',
      name: 'trend',
      component: Trend,
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading,
    },
    {
      path: '/matchingProducts',
      name: 'matchingProducts',
      component: MatchingProducts,
    },
    {
      path: '/uiux',
      name: 'UiUx',
      component: UIUX,
    },
    {
      path: '/accountbook',
      name: 'accountbook',
      component: Accountbook,
    },
    {
      path: '/chatbot',
      name: 'chatbot',
      component: ChatBot,
    },
  ],
});

export default router;
