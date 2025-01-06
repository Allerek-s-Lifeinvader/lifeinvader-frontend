<script lang="ts" setup>
import { FaHome, FaPlus, FaUser, FaComment, FaBell, FaUserFriends, FaSearch } from 'vue3-icons/fa'
import UserPop from './UserPop.vue'
</script>

<template>
  <header
    class="w-full bg-[#212121] fixed top-0 right-0 left-0 h-[48px] flex items-center caret-transparent select-none z-[2]"
  >
    <nav class="w-full">
      <div class="flex items-center justify-between px-4 mx-auto max-w-[1400px]">
        <!-- Left: Logo and Buttons -->
        <div class="flex items-center space-x-4">
          <a href="#" class="block">
            <img
              src="https://li.v-rp.pl/themes/wowonder/img/logo.png?cache=286"
              width="130"
              alt="Lifeinvader Logo"
              class="max-h-[20.82px]"
            />
          </a>
          <button
            class="flex items-center justify-center bg-[#3a3a3a] text-white px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.3)]"
          >
            <FaHome class="mr-2" />
            Strona główna
          </button>
          <button
            class="flex items-center justify-center bg-[#d9324a] text-white px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.3)]"
          >
            <FaPlus class="mr-2" />
            Utwórz
          </button>
          <!-- Middle: Search Bar -->
          <div class="relative flex items-center justify-center">
            <FaSearch class="absolute left-3 text-white" />
            <input
              type="text"
              placeholder="Szukaj osób, stron, grup i #hashtagów"
              class="bg-[#333333] text-white w-64 focus:w-96 transition-all px-10 py-1 rounded-full focus:outline-none caret-white"
            />
          </div>
        </div>

        <!-- Right: Icons -->
        <div class="flex items-center space-x-8 caret-transparent">
          <button class="text-white">
            <FaUserFriends size="1.2rem" />
          </button>
          <button class="text-white">
            <FaComment size="1.2rem" />
          </button>
          <button class="text-white">
            <FaBell size="1.2rem" />
          </button>
          <div class="w-8 h-8 bg-gray-500 rounded-full overflow-hidden">
            <UserPop />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
