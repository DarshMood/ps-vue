<template>
    <Card class="mx-auto w-full">
        <CardContent class="flex flex-col items-center gap-4 py-10">
            <h2 class="text-lg">{{ title }}</h2>
            <img
                :src="image"
                :alt="title"
                class="justify-center thumbnail"
            />
            <Button as-child variant="outline" class="w-full justify-start">
                <router-link :to="link">{{ title }}</router-link>
            </Button>
        </CardContent>
    </Card>
</template>


<script setup>
import CardContent from './CardContent.vue';

const props = defineProps({
    title: String,
    image: String,
    link: String
})
</script>

<style scoped>
.thumbnail {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
</style>