<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  imageWidth: {
    type: [String, Number],
    required: true,
  },
})
</script>

<template>
  <img :src="image" alt="" class="rounded-full" :width="imageWidth" />
</template>
