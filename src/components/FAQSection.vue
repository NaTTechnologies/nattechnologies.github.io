<template>
  <section class="section faq-section">
    <div class="container faq-layout">
      <div class="faq-intro"><span class="section-kicker">Preguntas frecuentes</span><h2>Lo esencial antes de empezar</h2><p>Respuestas claras sobre uso, licencia, datos, contribuciones y evolución del proyecto.</p></div>
      <div class="accordion-list">
        <article v-for="(item, i) in faq" :key="i" class="accordion-item" :class="{ open: openIndex === i }">
          <h3>
            <button @click="toggle(i)" :aria-expanded="openIndex === i" :aria-controls="`faq-panel-${i}`" :id="`faq-button-${i}`">
              <span>{{ item.p }}</span><span class="accordion-icon"><BaseIcon name="chevron-down" :size="20" /></span>
            </button>
          </h3>
          <div v-show="openIndex === i" :id="`faq-panel-${i}`" role="region" :aria-labelledby="`faq-button-${i}`" class="accordion-panel"><p>{{ item.r }}</p></div>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { faq } from '@/data/faq'
import BaseIcon from './BaseIcon.vue'
const openIndex = ref(0)
const toggle = (i) => { openIndex.value = openIndex.value === i ? null : i }
</script>
