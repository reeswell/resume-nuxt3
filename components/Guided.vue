<script setup lang="ts">
//  lazy load modal
const modal = ref<HTMLDialogElement>()
const showModal = ref(false)
function handleClick() {
  showModal.value = true
  nextTick(() => {
    modal.value?.showModal()
  })
}
</script>

<template>
  <button class="btn" @click="handleClick">
    使用说明
  </button>
  <dialog v-if="showModal" ref="modal" class="modal">
    <div class="modal-box sm:max-w-5xl">
      <h3 class="font-bold text-lg">
        使用说明
      </h3>
      <div class="p-5">
        <ul class="list-disc">
          <li>双击简历区域进行编辑</li>
          <li>长按标题区域60ms可拖放调整顺序</li>
          <li>编辑时复制即可实现添加新区域</li>
          <li>点击编辑区域外取消聚焦即保存，当然也可以使用左上角的保存/编辑按钮</li>
          <li>打印时有问题请按下面的视频操作调整浏览器的打印配置</li>
        </ul>
      </div>
      <div class="flex">
        <video src="/guided.mp4" class="border-b-base w-full" autoPlay loop muted playsInline />
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>关闭</button>
    </form>
  </dialog>
</template>
