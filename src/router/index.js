import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { ConstantService } from '@/services/ConstantService';
import { useUserStore } from '@/stores/user';
import { useConstantStore } from '@/stores/constant';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/pages/Home.vue')
                },

                {
                    path: '/about-us',
                    name: 'about-us',
                    component: () => import('@/views/pages/AboutUs.vue')
                },

                {
                    path: '/contact-us',
                    name: 'contact-us',
                    component: () => import('@/views/pages/ContactUs.vue')
                },

                {
                    path: '/our-service',
                    name: 'our-service',
                    component: () => import('@/views/pages/OurService.vue')
                },

                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/views/pages/auth/Login.vue')
                },

                 {
                    path: '/register',
                    name: 'register',
                    component: () => import('@/views/pages/auth/Register.vue')
                },

                {
                    path: '/:pathMatch(.*)*',
                    name: 'notfound',
                    component: () => import('@/views/pages/NotFound.vue')
                }
            ]
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/pages/auth/Register.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    const User = useUserStore();
    const Constant = useConstantStore();
    
    if (!User.isLoggedIn){
        console.log('hi');
    }

    console.log('123123');
    await ConstantService.index().then((response) => {
        console.log(response.data);
        Constant.$patch({ data: response.data });
    })

    next();
});

export default router;
