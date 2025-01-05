<script setup lang="ts">
import './index.css'
import NavBar from './components/NavBar/NavBar.vue'
import ToolBar from './components/ToolBar/ToolBar.vue'
import Reels from './components/Reels/Reels.vue'
import NewPostEditor from './components/NewPostEditor/NewPostEditor.vue'
import Post from './components/Post/Post.vue'
</script>

<template>
  <NavBar />
  <!-- Content Container -->
  <div class="mt-[45px] w-[1400px]">
    <div id="page-margin" class="my-[20px]">
      <div id="row" class="flex mx-[-15px]">
        <div id="left-col" class="w-1/6">
          <ToolBar />
        </div>
        <div id="right-col" class="w-[42%]">
          <div id="reels" class="h-44 mb-10 flex">
            <Reels />
          </div>
          <div id="new-content">
            <NewPostEditor />
          </div>
          <div id="feed">
            <Post v-for="n in 20" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
