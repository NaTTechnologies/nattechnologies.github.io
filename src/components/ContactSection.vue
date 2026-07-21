<template>
  <section id="contact" class="section contribution-cta-section">
    <div class="container contribution-cta">
      <div class="contribution-copy">
        <span class="section-kicker">Tu siguiente paso</span>
        <h2>No necesitas programar para mejorar Cafetal OS</h2>
        <p>La comunidad también se construye probando flujos, revisando lenguaje, documentando procesos y contando qué necesita realmente una finca o cooperativa.</p>
        <div class="community-actions">
          <a :href="site.discussions" target="_blank" rel="noopener" class="btn btn-primary"><BaseIcon name="message" :size="19" /> Iniciar una conversación</a>
          <router-link to="/docs" class="btn btn-secondary"><BaseIcon name="book" :size="19" /> Leer documentación</router-link>
        </div>
      </div>

      <div class="contribution-checklist">
        <article v-for="item in paths" :key="item.title">
          <span><BaseIcon :name="item.icon" :size="21" /></span>
          <div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div>
        </article>
        <a :href="`mailto:${site.email}`" class="community-email"><BaseIcon name="mail" :size="19" /> {{ site.email }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
import { site } from '@/config/site'

const paths = [
  { icon: 'bug', title: 'Reporta un problema', text: 'Incluye pasos, resultado esperado y evidencia reproducible.' },
  { icon: 'sparkles', title: 'Propón una mejora', text: 'Explica la necesidad antes de plantear una solución técnica.' },
  { icon: 'book', title: 'Mejora la documentación', text: 'Corrige conceptos, agrega ejemplos o traduce contenido.' },
]
</script>
