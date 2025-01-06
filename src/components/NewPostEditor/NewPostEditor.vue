<script lang="ts" setup>
import CharImage from '../CharImage/CharImage.vue'
</script>
<template>
  <form action="" class="bg-[#212121] rounded-md p-3 select-none mb-5">
    <div class="flex mb-2">
      <CharImage
        image="https://li-static.v-rp.pl/upload/photos/2024/11/KGwDgNcblE7oFrxk7UG3_13_774eca11234d3eb08d50abe1f2a0d0e6_avatar.png"
        imageWidth="35px"
      />
      <span id="char_name" class="h-[35px] text-center leading-[35px] ml-2 text-[#e5e5e5]"
        >Oishi Michizane</span
      >
    </div>
    <textarea
      id="message"
      rows="4"
      class="resize-none p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Co ci chodzi po głowie? #hasztag @oznaczenie"
    ></textarea>
    <hr />
    <div class="flex flex-row justify-between mt-2">
      <button
        class="w-[39%] bg-[rgb(255,255,255,0.1)] rounded-2xl flex text-[13px] text-[#dfdfdf] font-[600] p-2 justify-center align-middle"
      >
        <img src="/src/assets/images/posteditor/photo.svg" alt="" width="24px" class="mr-2" />
        <span class="leading-[24px]">Prześlij obrazy</span>
      </button>
      <button
        class="w-[39%] bg-[rgb(255,255,255,0.1)] rounded-2xl flex text-[13px] text-[#dfdfdf] font-[600] p-2 justify-center align-middle"
      >
        <img src="/src/assets/images/posteditor/survey.svg" alt="" width="24px" class="mr-2" />
        <span class="leading-[24px]">Utwórz ankietę</span>
      </button>
      <button
        class="w-[20%] bg-[rgb(255,255,255,0.1)] rounded-2xl flex text-[13px] text-[#dfdfdf] font-[600] p-2 justify-center align-middle"
      >
        <img src="/src/assets/images/posteditor/more.svg" alt="" width="24px" class="mr-2" />
        <span class="leading-[24px]">Więcej</span>
      </button>
    </div>
  </form>
</template>

<style>
#char_name {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  font-weight: 600;
}
</style>
