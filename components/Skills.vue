<script setup lang="ts">
import type { Skill } from '~/types'

const { skills } = defineProps<{
  skills: Skill[]
}>()
</script>

<template>
  <div class="mt-7">
    <h2 class="h2-title" :class="isContenteditable ? '' : 'handle cursor-move'">
      专业技能
    </h2>
    <div v-for="{ name, descriptions } in skills" :key="name" class="mt-3">
      <header>
        <div class="md:flex md:items-center md:justify-between flex-wrap">
          <h3 class="text-l font-semibold mb-2">
            {{ name }}
          </h3>
        </div>
      </header>
      <div class="item-description py-1">
        <ul class="list-disc">
          <li v-for="description in descriptions" :key="description">
            {{ description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
