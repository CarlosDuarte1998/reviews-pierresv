<script setup>
import { listVideos } from '@/utils/index.js';
import { ref, watch } from 'vue';
const selectActive = ref(0);

watch(selectActive, (newValue) => {
    console.log('Selected option:', newValue);
});
</script>

<template>

    <div class="items-center justify-center rounded-md gap-4  grid w-full grid-cols-4 select-container p-1">
        <template v-for="(group, index) in listVideos" :key="index">
            <button class=" text-sm font-medium transition duration-400 py-2"
                :class="{ select_active: selectActive === index }" @click="selectActive = index">{{ group.type
                }}</button>
        </template>
    </div>
    <div class="mt-7 grid sm:grid-cols-2 gap-6">
        <div class="rounded-lg bg-card text-card-foreground overflow-hidden border-0 shadow-lg">
            <div class="p-0">
                <div class="aspect-video w-full"><iframe src="https://www.youtube.com/embed/19g66ezsKAg"
                        title="Colección Primavera 2024" class="w-full h-full" allowfullscreen=""
                        loading="lazy"></iframe>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-semibold">Colección Primavera 2024</h3>
                    <p class="text-sm text-gray-500 mt-1">Descubre las últimas tendencias de Pierre Cardin para esta
                        temporada.</p>
                </div>
            </div>
        </div>

       

        <template v-for="(group, index) in listVideos" :key="index">
            <template v-if="selectActive === index">
                <template v-for="(video, videoIndex) in group.list" :key="videoIndex">
                    <div class="rounded-lg bg-card text-card-foreground overflow-hidden border-0 shadow-lg">
                        <div class="p-0">
                            <div class="aspect-video w-full"><iframe :src="video.url" title="Colección Primavera 2024"
                                    class="w-full h-full" allowfullscreen="" loading="lazy"></iframe></div>
                            <div class="p-4">
                                <h3 class="text-lg text-center font-semibold">{{ video.title }}</h3>
                                <p class="text-sm text-gray-500 mt-1">{{ video.subtitle }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </template>
        </template>

    </div>
</template>


<style scoped>
button {
    cursor: pointer;
    border-radius: 0.375rem;
    color: #737373;

}

.select_active {
    background-color: black;
    color: white;
    font-weight: 600;
}

.select-container {
    background-color: #f5f5f5;
    border-radius: 0.375rem;
}
</style>