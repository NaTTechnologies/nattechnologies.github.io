<template>
  <section id="hero" class="hero-section">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-one" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-two" aria-hidden="true"></div>

    <div class="container hero-layout">
      <div class="hero-copy">
        <div class="eyebrow">
          <span class="status-dot"></span>
          Versión {{ site.version }} · Open source · Hecho en Honduras
        </div>

        <h1>Decisiones claras desde la finca hasta la <span>taza.</span></h1>

        <p>
          Cafetal OS es un sistema de escritorio open source, offline-first y multiplataforma
          para administrar lotes, cosecha, beneficio, inventario, costos, calidad,
          sostenibilidad y trazabilidad.
        </p>

        <div class="hero-actions">
          <a :href="site.releases" class="btn btn-primary btn-lg" target="_blank" rel="noopener">
            <BaseIcon name="download" :size="20" />
            Descargar Cafetal OS
          </a>
          <a :href="site.github" class="btn btn-secondary btn-lg" target="_blank" rel="noopener">
            <BaseIcon name="github" :size="20" />
            Explorar GitHub
          </a>
        </div>

        <div class="hero-meta">
          <span><BaseIcon name="shield" :size="17" /> Licencia {{ site.license }}</span>
          <span><BaseIcon name="database" :size="17" /> Datos locales</span>
          <span><BaseIcon name="monitor" :size="17" /> Windows · macOS · Linux</span>
        </div>
      </div>

      <div class="hero-product">
        <div class="product-window">
          <div class="window-bar" aria-hidden="true">
            <span></span><span></span><span></span>
            <small>Cafetal OS {{ site.version }} · Resumen</small>
          </div>
          <button
            type="button"
            class="hero-product-shot"
            aria-label="Ver la captura completa del panel de Cafetal OS"
            @click="showPreview = true"
          >
            <img
              :src="assetUrl('screenshots/01-resumen.png')"
              alt="Panel de resumen de Cafetal OS con indicadores de lotes, área, cosecha e inventario"
            />
          </button>
        </div>

        <div class="hero-proof-card hero-proof-card-top">
          <span><BaseIcon name="lock" :size="18" /></span>
          <div><strong>Acceso local</strong><small>Usuarios y roles sin nube obligatoria</small></div>
        </div>

        <div class="hero-proof-card hero-proof-card-bottom">
          <span><BaseIcon name="database" :size="18" /></span>
          <div><strong>Demo separada</strong><small>Explora sin tocar la base productiva</small></div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showPreview"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Captura ampliada del panel de Cafetal OS"
        @click.self="showPreview = false"
      >
        <button type="button" class="lightbox-close" aria-label="Cerrar captura" @click="showPreview = false">
          <BaseIcon name="close" :size="24" />
        </button>
        <img :src="assetUrl('screenshots/01-resumen.png')" alt="Panel de resumen de Cafetal OS ampliado" />
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { site } from '@/config/site'
import { assetUrl } from '@/utils/assets'

const showPreview = ref(false)

const onKeydown = (event) => {
  if (event.key === 'Escape') showPreview.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
