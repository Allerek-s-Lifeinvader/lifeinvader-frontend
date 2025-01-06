<template>
  <CharImage
    image="https://li-static.v-rp.pl/upload/photos/2024/11/KGwDgNcblE7oFrxk7UG3_13_774eca11234d3eb08d50abe1f2a0d0e6_avatar.png"
    imageWidth="150px"
    class="object-cover hover:cursor-pointer"
    @click="toggle"
  />
  <!-- TODO: Hide when scrolling/find a way to make it sticky -->
  <Popover ref="op" class="bg-white">
    <div class="flex flex-col gap-4 w-[17rem] text-[#e5e5e5]">
      <div class="bg-[#323232] rounded-lg p-3 font-bold">
        <div class="w-full flex">
          <div class="text-left leading-[2rem] w-1/2">Oishi Michizane</div>
          <div class="text-base font-bold text-right leading-[2rem] w-1/2">
            @<span class="text-sm font-light leading-[2rem]">michizane.oishi</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap p-2">
        <div class="flex w-full mb-2">
          <Button class="w-full">
            <i class="pi pi-user-edit mr-5" style="font-size: 1.2rem"></i>
            <div class="leading-[1.2rem]">Ustawienia profilu</div>
          </Button>
        </div>
        <div class="flex w-full">
          <Button class="w-full">
            <i class="pi pi-cog mr-5" style="font-size: 1.2rem"></i>
            <div class="leading-[1.2rem]">Ustawienia profilu</div>
          </Button>
        </div>
      </div>
      <hr id="pop_divider" />
      <div class="flex flex-wrap p-2">
        <div class="flex w-full">
          <Button class="w-full">
            <i class="pi pi-sign-out mr-5" style="font-size: 1.2rem"></i>
            <div class="leading-[1.2rem]">Wyloguj się</div>
          </Button>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import CharImage from '../CharImage/CharImage.vue'
import { Popover, Button } from 'primevue'

import { ref } from 'vue'

const op = ref()

const toggle = (event) => {
  op.value.toggle(event)
}
</script>

<style>
.p-button {
  /* Bypass, works for now */
  justify-content: start !important;
}

#pop_divider {
  margin-left: -0.8rem;
  width: calc(100% + 1.6rem);
  overflow: hidden;
  border-color: #424242;
}
</style>
