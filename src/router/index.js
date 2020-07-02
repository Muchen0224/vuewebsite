import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 避免用戶進入不存在的頁面
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/backend/Login')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('@/views/backend/Dashboard'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('@/views/backend/Products'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/backend/Orders'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('@/views/backend/Coupons'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/catshop_home',
    alias: '/',
    name: 'catShop',
    component: () => import('@/views/frontend/CatShop'),
    children: [
      {
        path: '/catshop_home',
        name: 'shopHome',
        component: () => import('@/views/frontend/CatShopHome')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/frontend/OurStory')
      },
      {
        path: '/shoppage',
        name: 'ShopPage',
        component: () => import('@/views/frontend/Shoppage')
      },
      {
        path: '/shopItem/:id',
        name: 'ShopItem',
        component: () => import('@/views/frontend/ShopsItem')
      },
      {
        path: '/location',
        name: 'Location',
        component: () => import('@/views/frontend/Location')
      },
      {
        path: '/wishlist',
        name: 'WishList',
        component: () => import('@/views/frontend/WishList')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/frontend/Cart')
      },
      {
        path: '/checkout',
        name: 'Check',
        component: () => import('@/views/frontend/Checkout')
      },
      {
        path: '/payment/:orderId',
        name: 'Payment',
        component: () => import('@/views/frontend/Payment')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
