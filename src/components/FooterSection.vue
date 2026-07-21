<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand-column">
        <router-link to="/" class="footer-brand"><span class="brand-mark-wrap"><img :src="assetUrl('cafetal-os-icon.png')" alt="" class="brand-mark" /></span><span>Cafetal OS</span></router-link>
        <p>Plataforma open source para gestionar la cadena del café con control local de los datos y una comunidad abierta.</p>
        <span class="license-chip"><BaseIcon name="shield" :size="16" /> Licencia {{ site.license }}</span>
      </div>
      <div><h2>Producto</h2><router-link to="/modulos">Módulos</router-link><router-link :to="{ path: '/', hash: '#screenshots' }">Experiencia</router-link><router-link :to="{ path: '/', hash: '#roadmap' }">Roadmap</router-link><a :href="site.releases" target="_blank" rel="noopener">Descargas</a></div>
      <div><h2>Aprender</h2><router-link to="/docs">Documentación</router-link><router-link to="/comunidad">Comunidad</router-link><a :href="site.discussions" target="_blank" rel="noopener">Discusiones</a><a :href="site.issues" target="_blank" rel="noopener">Issues</a></div>
      <div><h2>Proyecto</h2><a :href="site.github" target="_blank" rel="noopener">GitHub</a><a :href="assetUrl('LICENSE')" target="_blank" rel="noopener">Licencia</a><a :href="site.security" target="_blank" rel="noopener">Seguridad</a><a :href="`mailto:${site.email}`">Contacto</a></div>
    </div>
    <div class="container footer-bottom"><span>&copy; {{ year }} Cafetal OS · {{ site.organization }}.</span><span>{{ site.tagline }}.</span></div>
  </footer>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
import { site } from '@/config/site'
import { assetUrl } from '@/utils/assets'
const year = new Date().getFullYear()
</script>
