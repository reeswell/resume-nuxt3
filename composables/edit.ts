import { ref } from 'vue'

export const isDraggable = ref(false)

export function toggleDraggable() {
  isDraggable.value = !isDraggable.value
}

export const isContenteditable = ref(false)
export function toggleContentEditable() {
  isContenteditable.value = !isContenteditable.value
}

export function changeContentEditable(value: boolean) {
  isContenteditable.value = value
}
