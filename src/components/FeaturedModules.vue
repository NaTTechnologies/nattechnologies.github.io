<template>
  <section class="section highlights-section">
    <div class="container">
      <div class="section-heading centered-heading">
        <span class="section-kicker">Capacidades destacadas</span>
        <h2>Funciones que conectan datos, campo y comunidad</h2>
        <p>Sin promesas vacías: cada capacidad explica qué hace, cómo funciona y hasta dónde llega.</p>
      </div>

      <div class="highlight-grid">
        <button
          v-for="item in featuredModules"
          :key="item.id"
          type="button"
          class="highlight-card"
          @click="openModule(item.id)"
        >
          <span class="icon-tile"><BaseIcon :name="item.icon" :size="25" /></span>
          <h3>{{ item.nombre }}</h3>
          <p>{{ item.resumen }}</p>
          <span class="card-link">Conocer capacidad <BaseIcon name="arrow-right" :size="16" /></span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="currentModule" class="dialog-backdrop" @click.self="closeModule">
        <section class="feature-dialog" role="dialog" aria-modal="true" :aria-labelledby="`dialog-title-${currentModule.id}`">
          <div class="dialog-heading">
            <span class="icon-tile"><BaseIcon :name="currentModule.icon" :size="25" /></span>
            <div><span class="section-kicker">Cafetal OS</span><h2 :id="`dialog-title-${currentModule.id}`">{{ currentModule.nombre }}</h2></div>
            <button type="button" class="dialog-close" aria-label="Cerrar detalle" @click="closeModule"><BaseIcon name="close" :size="22" /></button>
          </div>
          <p class="dialog-summary">{{ currentModule.resumen }}</p>
          <ul class="dialog-list">
            <li v-for="detail in currentModule.detalles" :key="detail"><span><BaseIcon name="check" :size="16" /></span>{{ detail }}</li>
          </ul>
          <div class="dialog-actions">
            <router-link :to="`/modulo/${currentModule.id}`" class="btn btn-primary" @click="closeModule">Ver módulo</router-link>
            <button type="button" class="btn btn-secondary" @click="closeModule">Cerrar</button>
          </div>
        </section>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { featuredModules } from '@/data/featuredModules'

const selected = ref(null)
const currentModule = computed(() => featuredModules.find((module) => module.id === selected.value) || null)
const openModule = (id) => { selected.value = id }
const closeModule = () => { selected.value = null }
const onKeydown = (event) => { if (event.key === 'Escape') closeModule() }
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
