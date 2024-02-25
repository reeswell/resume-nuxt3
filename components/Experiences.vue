<script setup lang="ts">
import type { Experience } from '~/types'

const { experiences } = defineProps<{
  experiences: Experience[]
}>()
</script>

<template>
  <div class="mt-7">
    <h2 class="h2-title" :class="isContenteditable ? '' : 'handle cursor-move'">
      工作经历
    </h2>
    <div v-for="experience in experiences" :key="experience.company">
      <div class=" mt-5">
        <div class="">
          <header>
            <div class="md:flex md:items-center md:justify-between flex-wrap">
              <span class="text-lg font-semibold">{{ experience.company }} -
                {{ experience.role }}</span><span class="ml-4 print:mx-8">
                  <MaterialSymbolsLocationOnOutline class="inline-block p-1 text-2xl -mr-[6px]" /> {{
                    experience.location }}
                </span>
              <span class="md:text-right">
                <IcOutlineCalendarToday class="inline-block pb-[3px] text-lg mr-1" />{{ experience.time }}
              </span>
            </div>
          </header>
          <div v-for="project in experience.projects" :key="project.name" class="py-4 last:pb-2">
            <p>
              <strong>{{ project.name }} </strong>
              <span v-if="project.link">
                (<a :href="project.link" rel="noopener noreferrer" class="link link-secondary" target="_blank">{{
                  project.link }}</a>)
              </span>
            </p>
            <p class="mt-2">
              {{ project.role }}
            </p>
            <ul class="list-disc">
              <li v-for="description in project.descriptions" :key="description">
                {{ description }}
              </li>
            </ul>
            <div v-if="project.hard">
              <p class="pl-4 mt-2">
                <strong>{{ project.hard.title }}</strong>
              </p>
              <ul class="list-disc">
                <li v-for="description in project.hard.descriptions" :key="description">
                  {{ description }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
