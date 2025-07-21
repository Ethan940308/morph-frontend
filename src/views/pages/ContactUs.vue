<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, onMounted } from 'vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import { useConstantStore } from '@/stores/constant';
import { ContentService } from '@/services/ContentService';

const { layoutConfig } = useLayout();

const Constant = useConstantStore();

const content = ref([]);

onMounted(async () => {
    await ContentService.show(Constant.getConstantValue('content_type', 'CONTACT_US')).then((response) => {
        if(response.data){
            content.value = JSON.parse(response.data.content);
        }
    });
});

</script>

<template>
    <div class="relative overflow-hidden flex flex-col justify-center">
        <div class="bg-circle opacity-50" :style="{ top: '-200px', left: '-700px' }"></div>
        <div class="bg-circle hidden lg:flex" :style="{ top: '50px', right: '-800px', transform: 'rotate(60deg)' }">
        </div>
        <div class="landing-wrapper">
            <TopbarWidget />
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 z-20">
                <div class="grid grid-cols-12 gap-4 card grid-nogutter" style="column-gap: 2rem; row-gap: 2rem">
                    <div class="col-span-12">
                        <p class="text-surface-900 dark:text-surface-0 font-bold">Contact Us</p>
                    </div>
                    <div class="col-span-12 mt-4 h-80 border border-surface-200 dark:border-surface-700 p-0 w-full bg-cover rounded"
                        :style="{ backgroundImage: `url('/demo/images/contact/map-${'light'}.svg')` }">
                    </div>
                    <div class="col-span-12 mt-8">
                        <div class="flex gap-4 px-2 flex-col md:flex-row"
                            :style="{ columnGap: '2rem', rowGap: '2rem' }">
                            <div v-for="(item, i) in content" :key="i"
                                class="md:w-1/3 flex flex-col justify-center text-center items-center border border-surface-200 dark:border-surface-700 py-8 px-6 rounded">
                                <i class="pi pi-fw !text-2xl text-primary" :class="item.icon"></i>
                                <span class="text-surface-900 dark:text-surface-0 font-bold mt-6 mb-1">{{ item.title
                                    }}</span>
                                <span class="text-surface-500 dark:text-surface-300">{{ item.info }}</span>
                            </div>
                        </div>
                    </div>

                  
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
