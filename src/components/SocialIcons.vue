<script setup>
const props = defineProps({
  providers: {
    type: Array,
    default: () => ['facebook', 'google', 'apple']
  }
});
const iconSrc = {
  facebook: '/icons/Facebook.svg',
  google: '/icons/Google.svg',
  apple: '/icons/Apple Inc.svg',
};
</script>
<template>
  <div class="social-icons">
    <img v-for="provider in providers" :key="provider" :src="iconSrc[provider]" :alt="provider.charAt(0).toUpperCase() + provider.slice(1)" />
  </div>
</template> 