<script setup>
import { ref } from 'vue';
import AuthLayout from './components/AuthLayout.vue';
import AuthFormLayout from './components/AuthFormLayout.vue';
import SocialIcons from './components/SocialIcons.vue';
import PasswordField from './components/PasswordField.vue';
import Divider from './components/Divider.vue';
import '@/assets/auth.css';

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
</script>

<template>
  <AuthLayout>
    <AuthFormLayout>
      <template #left>
        <h1 class="welcome-title">Welcome!</h1>
        <p class="welcome-desc">Use these awesome forms to login or create new account in your project for free.</p>
        <div class="social-signup">
          <span class="social-title">Sign up with</span>
          <SocialIcons :providers="['facebook','google','apple']">
            <template #facebook><FacebookIcon /></template>
            <template #google><GoogleIcon /></template>
            <template #apple><AppleIcon /></template>
          </SocialIcons>
        </div>
        <Divider text="Or" />
        <form class="signup-form">
          <input type="text" placeholder="Full Name" v-model="fullName" />
          <input type="email" placeholder="Email" v-model="email" />
          <PasswordField v-model="password" placeholder="Password" />
          <PasswordField v-model="confirmPassword" placeholder="Confirm Password" />
          <button type="submit" class="signup-btn">SIGN UP</button>
        </form>
        <div class="signin-link styled-signin-link">
          Already have an account? <a href="/signin" @click.prevent="$router.push('/signin')">Sign In</a>
        </div>
      </template>
    </AuthFormLayout>
  </AuthLayout>
</template>
