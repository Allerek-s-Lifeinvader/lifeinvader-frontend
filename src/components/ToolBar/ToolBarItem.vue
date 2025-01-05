<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <li class="text-lg flex">
    <a href="#" class="flex hover:bg-[rgba(255,255,255,0.05)]">
      <img height="18px" width="18px" class="mr-3" :src="image" />
      {{ title }}
    </a>
  </li>
</template>
