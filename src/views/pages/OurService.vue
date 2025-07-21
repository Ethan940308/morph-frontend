<script setup>
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import { ref } from "vue";


const products = ref([
    { name: 'Paid Advertising', icon: '/demo/images/landing/icon-community.svg', content: 'Connect with the other open source community members, collaborate and have a voice in the project roadmap' },
    { name: 'UX/UI', icon: '/demo/images/landing/icon-components.svg', content: 'The ultimate set of UI Components to assist you with 90+ impressive Vue Components.' },
    { name: 'Productivity', icon: '/demo/images/landing/icon-productivity.svg', content: 'Boost your productivity by achieving more in less time and accomplish amazing results.' },
    { name: 'Enterprise Support', icon: '/demo/images/landing/icon-support.svg', content: 'Exceptional support service featuring response within 1 business day and option to request enhancements and new features for the library.' },
    { name: 'Mobile', icon: '/demo/images/landing/icon-mobile.svg', content: 'First class support for responsive design led by touch optimized elements.' },
    { name: 'Themes', icon: '/demo/images/landing/icon-theme.svg', content: 'Built on a design-agnostic api, choose from a vast amount of themes such as material, bootstrap, custom or develop your own.' },
]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<template>
    <div class="relative overflow-hidden flex flex-col justify-center">
        <div class="bg-circle opacity-50" :style="{ top: '-200px', left: '-700px' }"></div>
        <div class="bg-circle hidden lg:flex" :style="{ top: '50px', right: '-800px', transform: 'rotate(60deg)' }">
        </div>
        <div class="landing-wrapper">
            <TopbarWidget />
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 z-20 card">
                <div class="grid grid-cols-12 gap-4 grid-nogutter items-center mb-12 py-12 md:mb-20 md:py-20">
                    <div
                        class="col-span-12 md:col-span-12 flex flex-col gap-6 order-1 md:order-none items-center text-center">
                        <span class="block text-surface-900 dark:text-surface-0 font-bold text-4xl">Our Services</span>
                        <span class="block text-surface-700 dark:text-surface-100 text-lg">We offer a range of
                            professional solutions tailored to meet your needs, including web development, mobile apps,
                            and digital marketing. Our goal is to deliver quality results that help your business
                            grow.</span>
                        <ul class="flex flex-wrap gap-8 list-none p-0">
                            <li class="flex items-center">
                                <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                                <span class="text-surface-900 dark:text-surface-0 font-semibold">UI/UX Design</span>
                            </li>
                            <li class="flex items-center">
                                <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                                <span class="text-surface-900 dark:text-surface-0 font-semibold">Paid Advertising</span>
                            </li>
                            <li class="flex items-center">
                                <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                                <span class="text-surface-900 dark:text-surface-0 font-semibold">Web Development</span>
                            </li>
                            <li class="flex items-center">
                                <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                                <span class="text-surface-900 dark:text-surface-0 font-semibold">Mobile App
                                    Development</span>
                            </li>
                        </ul>
                    </div>


                </div>

                <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
                    circular :autoplayInterval="3000">
                    <template #item="slotProps">
                        <div class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4">
                            <div
                                class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded">
                                <img :src="slotProps.data.icon" :alt="slotProps.data.name" class="block mb-4" />
                                <span class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg">{{
                                    slotProps.data.name }}</span>
                                <p class="m-0 text-secondary text-surface-700 dark:text-surface-100">{{
                                    slotProps.data.content }}</p>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bg-circle {
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    background-image: linear-gradient(140deg, var(--primary-color), var(--surface-ground) 80%);
    position: absolute;
    opacity: 0.25;
    z-index: -1;
}
</style>