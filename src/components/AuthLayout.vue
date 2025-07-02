<template>
  <div class="app-container d-flex flex-column min-vh-100">
    <img :src="backgroundImage" alt="Brand" class="position-fixed bg-image" />
    <!-- Top Bar -->
    <header class="top-bar">
      <slot name="header">
        <div class="top-bar__left">
          <img :src="logo" alt="Logo" class="vandelay-logo" />
        </div>
        <button class="download-btn">
          Free Download
        </button>
      </slot>
    </header>
    <main class="main-content container-fluid p-0 flex-grow-1 d-flex flex-column justify-content-center h-100">
      <slot />
    </main>
    <!-- Footer Navigation -->
    <footer class="footer-menu mt-auto">
      <slot name="footer">
        <div class="footer-copy">© 2022, Made with Lorem for a better web</div>
        <div class="footer-links">
          <a v-for="(link, i) in footerLinks" :key="i" :href="link.href">{{ link.text }}</a>
        </div>
      </slot>
    </footer>
  </div>
</template>

<script setup>
const props = defineProps({
  logo: {
    type: String,
    default: '/logo/vandelay-industries-logo.svg'
  },
  backgroundImage: {
    type: String,
    default: '/img/Image.png'
  },
  footerLinks: {
    type: Array,
    default: () => ([
      { text: 'About Us', href: '#' },
      { text: 'Privacy', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'License', href: '#' }
    ])
  }
});
</script> 