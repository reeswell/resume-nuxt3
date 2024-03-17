<script setup lang="ts">
const colorMode = useColorMode()
const themes = [
  'light',
  'bumblebee',
  'emerald',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'cmyk',
  'lemonade',
  'winter',
]

function handlePrint() {
  window.print()
}
function handleToggleContentEditable() {
  toggleContentEditable()
  if (isContenteditable.value) {
    nextTick(() => {
      document.getElementById('resume-wrapper')?.focus()
    })
  }
}
</script>

<template>
  <header class="p-4 flex justify-between gap-4 w-full">
    <div class="p-4 flex gap-4">
      <button class="btn" @click="handlePrint()">
        打印
      </button>
      <button id="toggle-contenteditable" class="btn" @click="handleToggleContentEditable">
        {{ isContenteditable ? '保存' : '编辑' }}
      </button>
      <Guided />

      <select v-model="colorMode.preference" class="select w-full max-w-xs border-primary  focus:outline-0">
        <option disabled selected>
          主题
        </option>
        <option v-for="theme of themes" :key="theme">
          {{ theme }}
        </option>
      </select>
    </div>
  </header>
</template>
