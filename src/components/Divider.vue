<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Or'
  }
});
</script>
<template>
  <div class="divider">
    <div class="divider-line"></div>
    <span class="divider-text">{{ text }}</span>
    <div class="divider-line"></div>
  </div>
</template> 