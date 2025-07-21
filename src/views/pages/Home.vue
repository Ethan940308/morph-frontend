<script setup>
import TopbarWidget from '@/components/TopbarWidget.vue';
</script>

<template>
    <div class="relative overflow-hidden flex flex-col justify-center">
        <div class="bg-circle opacity-50" :style="{ top: '-200px', left: '-700px' }"></div>
        <div class="bg-circle hidden lg:flex" :style="{ top: '50px', right: '-800px', transform: 'rotate(60deg)' }">
        </div>
        <div class="landing-wrapper">
            <TopbarWidget />
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 z-20">
                <div
                    class="grid grid-cols-12 gap-4 grid-nogutter justify-center items-center mb-12 py-12 md:mb-20 md:py-20">
                    <div
                        class="col-span-12 flex flex-col gap-6 order-1 md:order-none items-center text-center md:text-left">
                        <span class="block text-surface-900 dark:text-surface-0 font-bold text-4xl">Morph Digital
                            Assessment</span>
                        <span class="block text-surface-700 dark:text-surface-100 text-lg text-center">This is a basic
                            web page created as part of a technical assessment for Morph Digital Sdn Bhd.
                            The purpose is to showcase development and structuring skills</span>

                        <ul class="flex flex-wrap gap-8 list-none p-0">
                            <li class="flex items-center">
                                <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                                <span class="text-surface-900 dark:text-surface-0 font-semibold">Node v22 +</span>
                            </li>
                            <li class="flex items-center">
                                <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                                <span class="text-surface-900 dark:text-surface-0 font-semibold">PHP 8.3.6 +</span>
                            </li>
                            <li class="flex items-center">
                                <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                                <span class="text-surface-900 dark:text-surface-0 font-semibold">Vue 3</span>
                            </li>
                        </ul>
                    </div>


                </div>

                <div>
                    <span class="block text-surface-900 dark:text-surface-0 font-bold text-4xl mb-4">Installation</span>

                    <span class="font-bold">Install frontend dependencies</span>
                    <Toolbar class="mb-3">
                        <template #start>
                            <pre><code class="language-javascript">npm install</code></pre>
                        </template>
                    </Toolbar>

                    <span class="font-bold">Install backend dependencies (laravel)</span>
                    <Toolbar class="mb-3">
                        <template #start>
                            <pre><code class="language-javascript">composer install</code></pre>
                        </template>
                    </Toolbar>

                    <span class="font-bold">Set up environment files</span>
                    <Toolbar class="mb-3">
                        <template #start>
                            <pre><code class="language-javascript">Copy .env.example to .env in both frontend and backend folders</code></pre>
                        </template>
                    </Toolbar>

                    <span class="font-bold">Run Laravel migrations with seeding</span>
                    <Toolbar class="mb-3">
                        <template #start>
                            <pre><code class="language-javascript">php artisan migrate:fresh --seed</code></pre>
                        </template>
                    </Toolbar>

                    <span class="font-bold">Set backend URL for frontend</span>
                    <Toolbar class="mb-3">
                        <template #start>
                            <pre><code class="language-javascript">VITE_BACKEND_BASE_URL=https://your-backend-domain.com</code></pre>
                        </template>
                    </Toolbar>

                    

                   
                </div>
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
