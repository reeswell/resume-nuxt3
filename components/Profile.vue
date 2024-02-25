<script setup lang="ts">
import type { Profile } from '~/types'

const { profile } = defineProps<{
  profile: Profile
}>()
</script>

<template>
  <header>
    <div class="relative">
      <div class="title-avatar text-center md:mr-8 md:absolute md:top-0 md:right-0">
        <img
          v-if="profile.photo" class="w-20 mb-6 inline md:block" :src="profile.photo"
          :alt="profile.name"
        >
      </div>
      <div class="basic-info text-center md:mx-auto">
        <div class="md:flex md:justify-center md:items-center">
          <h1 class="text-3xl  font-semibold mb-2 mr-2">
            {{ profile.name }}
          </h1>
          <h2 class="text-xl mb-2">
            {{ profile.role }}
          </h2>
        </div>
        <ul class="link-list text-left flex justify-center mb-2 flex-wrap">
          <li class="mr-5">
            <MaterialSymbolsLocationOnOutline class="inline-block p-1 text-2xl -mr-[6px]" /> {{
              profile.location }}
          </li>
          <li class="mr-5">
            <MaterialSymbolsAttachEmail class="inline-block mr-1" />{{ profile.email }}
          </li>
          <li class="mr-5">
            <MaterialSymbolsCall class="inline-block mr-[2px]" />{{ profile.phone }}
          </li>
          <li class="mr-5">
            {{ profile.birth }}
          </li>
        </ul>
        <ul class="link-list text-left flex justify-center first-line:text-left flex-wrap">
          <li v-for="{ name, link, icon } in profile.socialAccounts" :key="name" class="mr-5">
            <a class="link link-secondary" :href="link" target="_blank">
              <component :is="icon" class="inline-block text-xl pb-1 mr-1" />
              {{ name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
