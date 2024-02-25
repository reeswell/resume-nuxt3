<script setup lang="ts">
import type { PersonalProject } from '~/types'

const { personalProjects } = defineProps<{
  personalProjects: PersonalProject[]
}>()
</script>

<template>
  <div class="mt-7">
    <h2 class="h2-title " :class="isContenteditable ? '' : 'handle cursor-move'">
      个人项目
    </h2>
    <div class="mt-5">
      <div v-for="p in personalProjects" :key="p.name">
        <div
          class="flex items-center justify-start gap-5 flex-wrap"
        >
          <h3 class="text-l font-semibold">
            {{ p.name }}
          </h3>
          <a v-if="p.website" class="link link-secondary flex justify-center items-center" :href="p.website" target="_blank">
            <IcOutlineLink /> <span class="ml-2">{{ p.website }}</span>
          </a>
          <a class="link link-secondary flex justify-center items-center" :href="p.github" target="_blank">
            <Github /> <span class="ml-2">{{ p.github }}</span>
          </a>
          <span v-if="p.stars">Star 数:{{ p.stars }}</span>
          <p>
            {{ p.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
