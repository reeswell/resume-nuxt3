<script setup lang="ts">
import { type UseDraggableReturn, VueDraggable } from 'vue-draggable-plus'
import type { Resume } from '~/types'
import { data } from '~/data/vue'
import { Educations, Experiences, PersonalProjects, Skills } from '#components'

type DraggableComponent =
  | typeof PersonalProjects
  | typeof Skills
  | typeof Educations
  | typeof Experiences

interface DraggableItem {
  id: number
  name: DraggableComponent
  props: any
}
const resume = ref<Resume>(data)
const { name, role } = resume.value.profile
useHead({ title: `${name}-${role}` })
function handleBlur(evt: any) {
  // avoid click toggle-button bug
  if (evt.relatedTarget?.id === 'toggle-contenteditable')
    return
  changeContentEditable(false)
}

const el = ref<UseDraggableReturn>()
const components = ref<DraggableItem[]>([
  {
    id: 1,
    name: Experiences,
    props: {
      experiences: resume.value.experiences,
    },
  },
  {
    id: 2,
    name: Skills,
    props: {
      skills: resume.value.skills,
    },
  },
  {
    id: 3,
    name: Educations,
    props: {
      educations: resume.value.educations,
    },
  },
  {
    id: 4,
    name: PersonalProjects,
    props: {
      personalProjects: resume.value.personalProjects,
    },
  },
])

const mainEl = ref<HTMLElement>()
function handleEdit() {
  changeContentEditable(true)
  nextTick(() => {
    mainEl.value?.focus()
  })
}
</script>

<template>
  <div class="text-sm md:text-base print:text-base container mx-auto max-w-screen-xl text-left">
    <main id="resume-wrapper" ref="mainEl" :contenteditable="isContenteditable" class="flex flex-col  shadow-2xl print:shadow-none" @dblclick="handleEdit" @blur="handleBlur">
      <div class="content p-6 md:p-12 w-full print:p-0">
        <Profile :profile="resume.profile" />
        <div class="main-content">
          <VueDraggable
            ref="el"
            v-model="components"
            :animation="150"
            class="flex flex-col rounded"
            :delay="60"
            handle=".handle"
          >
            <template v-for="item in components" :key="item.id">
              <component
                :is="item.name"
                v-bind="item.props"
              />
            </template>
          </VueDraggable>
        </div>
      </div>
    </main>
  </div>
</template>
