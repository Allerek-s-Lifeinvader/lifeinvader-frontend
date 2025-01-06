<script lang="ts" setup>
import CharImage from '../CharImage/CharImage.vue'
</script>

<template>
  <div class="bg-[#212121] rounded-md p-4 pt-6 select-none mb-5 w-full">
    <div class="flex mr-2 mb-5 flex-row">
      <div>
        <CharImage
          image="https://li-static.v-rp.pl/upload/photos/2024/11/KGwDgNcblE7oFrxk7UG3_13_774eca11234d3eb08d50abe1f2a0d0e6_avatar.png"
          imageWidth="50px"
          class="object-cover"
        />
      </div>
      <div>
        <span id="char_name" class="ml-2 h-[35px] text-center text-[#e5e5e5]">
          Oishi Michizane
        </span>
        <p class="ml-2 text-xs">2 d</p>
      </div>
    </div>
    <span class="content select-text caret-transparent">Witamy w słonecznym Los Santos!</span>
    <div class="flex flex-wrap mt-3" id="content-image">
      <img
        src="https://li-static.v-rp.pl/upload/photos/2025/01/TyrCtWSyddtVxUSjvZf3_05_f980cd8beffa86f0617ca7a9d70fa318_image.png"
        alt=""
        class="p-0"
      />
    </div>
    <hr id="post_divider" />
    <div class="flex flex-row justify-between mt-2">
      <button
        class="w-[39%] bg-[rgb(255,255,255,0.1)] rounded-2xl flex text-[13px] text-[#dfdfdf] font-[600] p-2 justify-center align-middle"
      >
        <img src="/src/assets/images/post/like.svg" alt="" width="24px" class="mr-2" />
        <span class="leading-[24px]">Polub to</span>
      </button>
      <button
        class="w-[39%] bg-[rgb(255,255,255,0.1)] rounded-2xl flex text-[13px] text-[#dfdfdf] font-[600] p-2 justify-center align-middle"
      >
        <img src="/src/assets/images/post/comment.svg" alt="" width="24px" class="mr-2" />
        <span class="leading-[24px]">Skomentuj</span>
      </button>
      <button
        class="w-[20%] bg-[rgb(255,255,255,0.1)] rounded-2xl flex text-[13px] text-[#dfdfdf] font-[600] p-2 justify-center align-middle"
      >
        <img src="/src/assets/images/post/share.svg" alt="" width="24px" class="mr-2" />
        <span class="leading-[24px]">Udostępnij</span>
      </button>
    </div>
  </div>
</template>

<style>
#content-image {
  max-height: 600px;
  margin-left: -1rem;
  width: calc(100% + 2rem);
  overflow: hidden;
  margin-bottom: 2rem;
}
#post_divider {
  margin-left: -1rem;
  width: calc(100% + 2rem);
  overflow: hidden;
  border-color: #424242;
}
</style>
