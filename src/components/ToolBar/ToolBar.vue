<script lang="ts" setup>
import ToolBarItem from './ToolBarItem.vue'
</script>

<template>
  <!-- Toolbar -->
  <div class="sticky top-[65px] select-none w-full">
    <ul class="pl-0">
      <ToolBarItem title="Aktualności" image="src/assets/images/toolbar/house.svg" />
      <ToolBarItem title="Albumy" image="src/assets/images/toolbar/gallery.svg" />
      <ToolBarItem title="Filmy" image="src/assets/images/toolbar/video.svg" />
      <ToolBarItem title="Zapisane posty" image="src/assets/images/toolbar/bookmark.svg" />
      <ToolBarItem title="Popularne posty" image="src/assets/images/toolbar/trending.svg" />
    </ul>
  </div>
</template>

<style>
ul > li > a {
  margin-top: 0.5rem;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.2s ease;
  width: 85%;
}
</style>
