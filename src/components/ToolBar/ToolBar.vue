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
      <ToolBarItem title="Wspomnienia" image="src/assets/images/toolbar/memories.svg" />
      <ToolBarItem title="Zaczepki" image="src/assets/images/toolbar/push.svg" />
      <ToolBarItem title="Moje Grupy" image="src/assets/images/toolbar/groups.svg" />
      <ToolBarItem title="Moje strony" image="src/assets/images/toolbar/pages.svg" />
      <ToolBarItem title="Rynek" image="src/assets/images/toolbar/market.svg" />
      <ToolBarItem title="Odkrywaj" image="src/assets/images/toolbar/explore.svg" />
      <ToolBarItem title="Wydarzenia" image="src/assets/images/toolbar/events.svg" />
      <ToolBarItem title="Praca" image="src/assets/images/toolbar/work.svg" />
      <ToolBarItem title="Oferty" image="src/assets/images/toolbar/bargain.svg" />
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
