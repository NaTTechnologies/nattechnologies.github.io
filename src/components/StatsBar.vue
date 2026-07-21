<template>
  <section class="stats-ribbon" aria-label="Datos principales de Cafetal OS">
    <div class="container stats-ribbon-grid">
      <article v-for="item in stats" :key="item.label">
        <span><BaseIcon :name="item.icon" :size="23" /></span>
        <div><strong>{{ item.value }}</strong><p>{{ item.label }}</p></div>
      </article>
    </div>
  </section>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
import { site } from '@/config/site'

const stats = [
  { icon: 'blocks', value: '17', label: 'módulos funcionales' },
  { icon: 'database', value: 'Local', label: 'datos bajo tu control' },
  { icon: 'shield', value: site.license, label: 'licencia open source' },
  { icon: 'monitor', value: '3', label: 'plataformas de escritorio' },
]
</script>
