<script setup lang="ts">
import * as posts from '../utils/post.data.mjs'
console.log(posts)
</script>

<template>
  <div>
    {{ JSON.stringify(posts) }}
  </div>
</template>

<style scoped>

</style>