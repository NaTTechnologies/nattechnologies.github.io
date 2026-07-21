<template>
  <header class="site-header">
    <nav class="nav-shell" aria-label="Navegación principal">
      <router-link to="/" class="brand" aria-label="Cafetal OS, inicio" @click="closeMenu">
        <span class="brand-mark-wrap"><img :src="assetUrl('cafetal-os-icon.png')" alt="" class="brand-mark" /></span>
        <span><strong>Cafetal</strong> OS</span>
      </router-link>

      <div class="desktop-nav">
        <router-link :to="{ path: '/', hash: '#features' }">Producto</router-link>
        <router-link to="/modulos">Módulos</router-link>
        <router-link to="/docs">Docs</router-link>
        <router-link to="/comunidad">Comunidad</router-link>
        <router-link :to="{ path: '/', hash: '#roadmap' }">Roadmap</router-link>
      </div>

      <div class="nav-actions">
        <a :href="site.github" target="_blank" rel="noopener" class="icon-link" aria-label="Abrir Cafetal OS en GitHub"><BaseIcon name="github" :size="20" /></a>
        <a :href="site.releases" target="_blank" rel="noopener" class="btn btn-primary desktop-download"><BaseIcon name="download" :size="18" /> Descargar</a>
        <button type="button" class="menu-button" :aria-expanded="mobileOpen" aria-controls="mobile-navigation" :aria-label="mobileOpen ? 'Cerrar menú' : 'Abrir menú'" @click="mobileOpen = !mobileOpen"><BaseIcon :name="mobileOpen ? 'close' : 'menu'" :size="24" /></button>
      </div>
    </nav>

    <div v-if="mobileOpen" id="mobile-navigation" class="mobile-nav">
      <router-link :to="{ path: '/', hash: '#features' }" @click="closeMenu">Producto</router-link>
      <router-link to="/modulos" @click="closeMenu">Módulos</router-link>
      <router-link to="/docs" @click="closeMenu">Documentación</router-link>
      <router-link to="/comunidad" @click="closeMenu">Comunidad</router-link>
      <router-link :to="{ path: '/', hash: '#roadmap' }" @click="closeMenu">Roadmap</router-link>
      <a :href="site.releases" target="_blank" rel="noopener" class="btn btn-primary"><BaseIcon name="download" :size="18" /> Descargar Cafetal OS</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { site } from '@/config/site'
import { assetUrl } from '@/utils/assets'

const mobileOpen = ref(false)
const closeMenu = () => { mobileOpen.value = false }
</script>
