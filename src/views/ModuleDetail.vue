<template>
  <main class="page-shell module-detail-page">
    <section v-if="module" class="module-detail-hero">
      <div class="container module-detail-hero-grid">
        <div>
          <router-link to="/modulos" class="back-link">
            <BaseIcon name="chevron-left" :size="18" /> Todo el producto
          </router-link>
          <span class="module-detail-icon"><BaseIcon :name="module.icon" :size="35" /></span>
          <span class="section-kicker">{{ category?.nombre }}</span>
          <h1>{{ module.nombre }}</h1>
          <p>{{ module.descripcionLarga }}</p>
          <div class="hero-actions">
            <a :href="site.releases" target="_blank" rel="noopener" class="btn btn-primary">
              <BaseIcon name="download" :size="18" /> Descargar Cafetal OS
            </a>
            <router-link to="/docs" class="btn btn-secondary">
              <BaseIcon name="book" :size="18" /> Ver documentación
            </router-link>
          </div>
        </div>

        <div class="module-summary-card">
          <span>Capacidades</span>
          <ul>
            <li v-for="feature in module.funciones" :key="feature">
              <BaseIcon name="check" :size="17" /> {{ feature }}
            </li>
          </ul>
          <div class="technology-list">
            <small>Tecnología relacionada</small>
            <span v-for="technology in module.tech" :key="technology">{{ technology }}</span>
          </div>
        </div>
      </div>
    </section>

    <section v-if="module" class="section module-detail-content">
      <div class="container module-showcase-grid">
        <article class="module-real-shot">
          <div class="preview-browser-bar" aria-hidden="true">
            <span></span><span></span><span></span><small>Cafetal OS · {{ module.nombre }}</small>
          </div>
          <button type="button" :aria-label="`Ampliar captura de ${module.nombre}`" @click="previewOpen = true">
            <img :src="assetUrl(module.screenshot)" :alt="`Pantalla real del módulo ${module.nombre} de Cafetal OS`" />
          </button>
        </article>

        <article class="module-flow-copy">
          <span class="section-kicker">Cómo encaja</span>
          <h2>Una pieza de un flujo conectado</h2>
          <p>{{ module.descripcion }}</p>
          <div class="flow-strip">
            <span v-for="(step, index) in flow" :key="step"><small>0{{ index + 1 }}</small>{{ step }}</span>
          </div>
          <aside>
            <h3>Construcción abierta</h3>
            <p>Este módulo puede mejorar mediante casos reales, documentación, pruebas y contribuciones técnicas.</p>
            <a :href="site.issues" target="_blank" rel="noopener">
              Proponer una mejora <BaseIcon name="arrow-right" :size="17" />
            </a>
          </aside>
        </article>
      </div>
    </section>

    <section v-else class="page-hero missing-page">
      <div class="container narrow">
        <span class="icon-tile"><BaseIcon name="search" :size="25" /></span>
        <h1>Módulo no encontrado</h1>
        <p>La dirección no corresponde a un módulo registrado en el catálogo.</p>
        <router-link to="/modulos" class="btn btn-primary">Explorar módulos</router-link>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="previewOpen && module"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`Captura ampliada de ${module.nombre}`"
        @click.self="previewOpen = false"
      >
        <button type="button" class="lightbox-close" aria-label="Cerrar captura" @click="previewOpen = false">
          <BaseIcon name="close" :size="24" />
        </button>
        <img :src="assetUrl(module.screenshot)" :alt="`Pantalla ampliada del módulo ${module.nombre}`" />
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseIcon from '@/components/BaseIcon.vue'
import { categories, modules } from '@/data/modules'
import { site } from '@/config/site'
import { assetUrl } from '@/utils/assets'

const route = useRoute()
const previewOpen = ref(false)
const module = computed(() => modules.find((item) => item.id === route.params.id) || null)
const category = computed(() => categories.find((item) => item.id === module.value?.categoria) || null)

const flow = computed(() => {
  if (module.value?.categoria === 'operacion') return ['Registrar', 'Organizar', 'Consultar', 'Reportar']
  if (module.value?.categoria === 'inteligencia') return ['Consolidar', 'Analizar', 'Verificar', 'Decidir']
  if (module.value?.categoria === 'sistema') return ['Proteger', 'Configurar', 'Respaldar', 'Administrar']
  return ['Documentar', 'Compartir', 'Aprender', 'Mejorar']
})

const onKeydown = (event) => {
  if (event.key === 'Escape') previewOpen.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
