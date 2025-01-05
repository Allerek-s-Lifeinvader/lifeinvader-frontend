<script lang="ts" setup>
import { FaPlusCircle } from 'vue3-icons/fa'
</script>
<template>
  <div class="">
    <div class="caret-transparent w-[7.5rem] mr-[1rem] rounded-[5%] overflow-hidden h-full">
      <img
        src="https://li-static.v-rp.pl/upload/photos/2024/11/KGwDgNcblE7oFrxk7UG3_13_774eca11234d3eb08d50abe1f2a0d0e6_avatar.png"
        alt=""
        draggable="false"
        class="h-full object-cover"
      />
      <p class="relative left-0 bottom-[40px] right-0 overflow-hidden px-[8px] text-white">
        <FaPlusCircle width="32px" height="32px" />
      </p>
    </div>
  </div>
  <Flicking class="h-full" :options="{ align: 'prev', circular: false, bound: true }">
    <!-- v-for breaks /Flicking/ so we need to get this rough implementation, we need to think about it in a future. Maybe different library? -->
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=1" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=2" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=3" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=4" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=5" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=6" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=7" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=8" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=9" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=10" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=11" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=12" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=12" alt="" draggable="false" />
    </div>
    <div class="panel caret-transparent w-[7.5rem]">
      <img src="https://picsum.photos/1920/1080?random=12" alt="" draggable="false" />
    </div>
  </Flicking>
</template>

<style>
.panel {
  margin-right: 1rem;
  border-radius: 5%;
  overflow: hidden;
}

.panel > img {
  height: 100%;
  object-fit: cover;
}
</style>
