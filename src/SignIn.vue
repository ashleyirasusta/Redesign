<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthLayout from './components/AuthLayout.vue';
import AuthFormLayout from './components/AuthFormLayout.vue';
import SocialIcons from './components/SocialIcons.vue';
import PasswordField from './components/PasswordField.vue';
import Divider from './components/Divider.vue';
import '@/assets/auth.css';

const email = ref('');
const password = ref('');
const router = useRouter();

function handleSignIn(e) {
  e.preventDefault();
  router.push('/dashboard');
}
</script>

<template>
  <AuthLayout>
    <AuthFormLayout>
      <template #left>
        <h1 class="welcome-title">Welcome Back</h1>
        <p class="welcome-desc">Today is a new day. It's your day. You shape it. Sign in to start managing your projects..</p>
        <div class="social-signup">
          <span class="social-title">Sign in with</span>
          <SocialIcons :providers="['facebook','google','apple']">
            <template #facebook><FacebookIcon /></template>
            <template #google><GoogleIcon /></template>
            <template #apple><AppleIcon /></template>
          </SocialIcons>
        </div>
        <Divider text="Or" />
        <form class="signup-form" @submit="handleSignIn">
          <input type="email" placeholder="Email" v-model="email" />
          <PasswordField v-model="password" placeholder="Password" />
          <div class="signin-options-row">
            <div class="signin-toggle-label">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
              <span class="signin-toggle-text">Remember me</span>
            </div>
            <a href="#" class="signin-link-underline">Forgot Password?</a>
          </div>
          <button type="submit" class="signup-btn">SIGN IN</button>
        </form>
        <div class="signin-link styled-signin-link">
          Don't have an account? <a href="/" @click.prevent="router.push('/')">Sign Up</a>
        </div>
      </template>
    </AuthFormLayout>
  </AuthLayout>
</template>
