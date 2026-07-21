<template>
  <div id="app-root">
    <NavBar />
    <div id="main-content" tabindex="-1"><router-view /></div>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
