<script setup lang="ts">
import type { Education } from '~/types'

const { educations } = defineProps<{
  educations: Education[]
}>()
</script>

<template>
  <div class="mt-7">
    <h2 class="h2-title" :class="isContenteditable ? '' : 'handle cursor-move'">
      教育经历
    </h2>
    <div class="mt-5">
      <header>
        <div
          v-for="edu in educations" :key="edu.name"
          class="flex items-center justify-between mb-2 print:0 flex-wrap"
        >
          <div>
            <span class="text-lg font-semibold">{{ edu.name }} - {{ edu.degree }}</span><span class="ml-4">
              <IconParkSolidDegreeHat class="inline-block align-text-top text-xl mr-1" />{{ edu.major }}
            </span>
          </div>
          <h4 class="md:text-right">
            <IcOutlineCalendarToday class="inline-block pb-[3px] text-lg mr-1" />{{ edu.time }}
          </h4>
        </div>
      </header>
    </div>
  </div>
</template>
