<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();

const User = useUserStore();

const isHidden = ref(false);

function navigateToDashboard() {
    router.push('/');
}

function navigateToRoute(route_name) {
    router.push({ name: route_name });
}

const menu = ref();

const items = ref([
    {
        separator : true,
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Messages',
                icon: 'pi pi-inbox'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                shortcut: '⌘+Q'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    <div
        class="flex items-center justify-between relative lg:static py-12 px-6 mx-0 md:px-16 lg:px-20 lg:py-12 lg:mx-20">
        <a class="cursor-pointer" @click="navigateToDashboard">
            <img src="/demo/images/logo.svg" width="124" height="22">
        </a>

        <i v-styleclass="{ selector: '@next', enterFromClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }"
            class="pi pi-bars !text-4xl cursor-pointer block md:hidden text-surface-700 dark:text-surface-100"></i>

        <div class="items-center flex-grow-1 hidden md:flex absolute md:static w-full md:px-0 z-30 shadow md:shadow-none animate-fadein bg-surface-100 dark:bg-surface-950"
            :class="{ hidden: isHidden }" :style="{ top: '80px', right: '0%' }">
            <ul
                class="list-none p-4 md:p-0 m-0 ml-auto flex md:items-center select-none flex-col md:flex-row cursor-pointer -">
                <a class="cursor-pointer !block md:!hidden text-primary-500 font-medium leading-normal absolute"
                    style="top: 1.5rem; right: 2rem" @click="toggleHidden">
                    <i class="pi pi-times !text-3xl"></i>
                </a>
                <li>
                    <a @click="navigateToRoute('home')"
                        class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                        <span>Home</span>
                    </a>
                </li>
                 <li>
                    <a @click="navigateToRoute('our-service')"
                        class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                        <span>Our Service</span>
                    </a>
                </li>
                <li>
                    <a @click="navigateToRoute('about-us')"
                        class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                        <span>About Us</span>
                    </a>
                </li>
                <li>
                    <a @click="navigateToRoute('contact-us')"
                        class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                        <span>Contact Us</span>
                    </a>
                </li>
                
                <li v-if="User.isLoggedIn">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" @click="toggle"
                        aria-haspopup="true" aria-controls="overlay_menu" class="m-0 mt-4 md:mt-0 md:ml-8"
                        shape="circle" />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
                        <template #start>
                            <span class="inline-flex flex-col ml-4 mt-2">
                                    <span class="font-bold">Welcome</span>
                                    <span>Admin</span>
                                </span>
                   
                        </template>
                    </Menu>
                </li>
                <li v-else>
                    <Button type="button" label="Login" class="m-0 mt-4 md:mt-0 md:ml-8" @click="navigateToRoute('login')"></Button>
                </li>
            </ul>
        </div>
    </div>
</template>
