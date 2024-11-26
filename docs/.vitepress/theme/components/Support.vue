<script setup lang="ts"></script>

<template>
  <div class="support">
    <div class="tier header">特别感谢开源技术支持</div>
    <div class="section">
      <div class="card">
        <div class="">
          富文本编辑器
        </div>
        <span>
          textbus
        </span>
      </div>
      <div class="card">
        <div>
          语音文字互转
        </div>
        <span>
          新一代 kaldi
        </span>
      </div>
    </div>
    <div class="tier">前端技术栈</div>
    <div class="section">
      <div class="card">
        <div>
          vue3
        </div>
      </div>
      <div class="card">
        <div>
          typescript
        </div>
      </div>
      <div class="card">
        <div>
          vite
        </div>
      </div>
    </div>
    <div class="tier">后端技术栈</div>
    <div class="section">
      <div class="card footer-left">
        <div>
          nodejs
        </div>
      </div>
      <div class="card footer-right">
        <div>
          nest 框架
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.support {
  margin-top: 64px;
  width: 100%;
}
.header {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.tier {
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  line-height: 24px;
  width: 100%;
  height: 48px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
}
.section {
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 64px;
  margin-right: 3px;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
  cursor: pointer;
}
.card:last-child {
  margin-right: 0;
}
.card:hover {
  background-color: var(--vp-c-bg-alt);
}
.footer-left {
  border-bottom-left-radius: 30px;
}
.footer-right {
  border-bottom-right-radius: 30px;
}
</style>
