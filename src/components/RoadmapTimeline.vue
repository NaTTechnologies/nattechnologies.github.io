<template>
  <section id="roadmap" class="section roadmap-section">
    <div class="container">
      <div class="section-heading roadmap-heading">
        <div><span class="section-kicker">Roadmap público</span><h2>Crecer sin perder claridad ni control</h2></div>
        <p>La hoja de ruta prioriza estabilidad, documentación y comunidad antes de sumar complejidad innecesaria.</p>
      </div>

      <div class="roadmap-list">
        <article v-for="(milestone, index) in roadmap" :key="milestone.id" :class="['roadmap-card', milestone.estado]">
          <button
            type="button"
            :aria-expanded="expandedId === milestone.id"
            :aria-controls="`roadmap-panel-${milestone.id}`"
            @click="expandedId = expandedId === milestone.id ? null : milestone.id"
          >
            <span class="roadmap-number">0{{ index + 1 }}</span>
            <span class="roadmap-copy"><small>{{ milestone.etapa }}</small><strong>{{ milestone.titulo }}</strong><p>{{ milestone.descripcion }}</p></span>
            <span class="roadmap-toggle"><BaseIcon name="chevron-down" :size="20" /></span>
          </button>
          <div v-show="expandedId === milestone.id" :id="`roadmap-panel-${milestone.id}`" class="roadmap-panel">
            <ul><li v-for="task in milestone.tareas" :key="task"><BaseIcon name="check" :size="16" /> {{ task }}</li></ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { roadmap } from '@/data/roadmap'
const expandedId = ref(2)
</script>
