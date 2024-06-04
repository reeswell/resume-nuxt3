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
        <div class="mt-2">
          <!-- <h3 class="text-l font-semibold">
            {{ p.name }}
          </h3> -->
          <a
            v-if="p.website" class="link link-secondary inline-flex justify-start items-center" :href="p.website"
            target="_blank"
          >
            <IcOutlineLink /> <span class="ml-2"> {{ p.name }}</span>
          </a>
          <template v-if="p.github">
            <a class="link link-secondary ml-5 inline-flex justify-start items-center" :href="p.github" target="_blank">
              <Github />
            </a>
            <span v-if="p.stars">Star 数:{{ p.stars }}</span>
          </template>
          <p class="pt-0">
            {{ p.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
