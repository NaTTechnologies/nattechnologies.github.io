<template>
  <section id="community" class="section community-section">
    <div class="container community-panel">
      <div class="community-copy">
        <span class="section-kicker">Comunidad Cafetal OS</span>
        <h2>No solo descargues el sistema. Ayuda a construirlo.</h2>
        <p>Hay espacio para desarrolladores, diseñadores, productores, agrónomos, investigadores, estudiantes y organizaciones del sector café.</p>
        <div class="community-actions">
          <router-link to="/comunidad" class="btn btn-light">Cómo participar <BaseIcon name="arrow-right" :size="18" /></router-link>
          <a :href="site.issues" target="_blank" rel="noopener" class="btn btn-ghost-light"><BaseIcon name="bug" :size="18" /> Reportar un problema</a>
        </div>
      </div>
      <div class="community-paths">
        <article v-for="path in paths" :key="path.title"><BaseIcon :name="path.icon" :size="22" /><div><strong>{{ path.title }}</strong><p>{{ path.text }}</p></div></article>
      </div>
    </div>
  </section>
</template>
<script setup>
import BaseIcon from './BaseIcon.vue'
import { site } from '@/config/site'
const paths = [
  { icon:'message', title:'Comparte experiencia de campo', text:'Ayuda a validar flujos, términos y necesidades reales.' },
  { icon:'code', title:'Contribuye con código', text:'Corrige bugs, mejora accesibilidad o desarrolla módulos.' },
  { icon:'book', title:'Mejora la documentación', text:'Escribe guías, tutoriales y traducciones.' },
  { icon:'sparkles', title:'Propón el futuro', text:'Participa en el roadmap y priorización pública.' },
]
</script>
