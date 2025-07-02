<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: 'Password'
  }
});
const emit = defineEmits(['update:modelValue']);
const visible = ref(false);
function toggle() { visible.value = !visible.value; }
function onInput(e) { emit('update:modelValue', e.target.value); }
</script>
<template>
  <div class="password-field">
    <input :type="visible ? 'text' : 'password'" :placeholder="placeholder" :value="modelValue" @input="onInput" />
    <span class="eye-icon material-symbols-rounded" style="cursor:pointer;" @click="toggle">
      {{ visible ? 'visibility' : 'visibility_off' }}
    </span>
  </div>
</template> 