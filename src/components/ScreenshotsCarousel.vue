<template>
  <section id="screenshots" class="section product-preview-section">
    <div class="container">
      <div class="section-heading preview-heading">
        <div>
          <span class="section-kicker">Producto real · versión {{ site.version }}</span>
          <h2>Recorre Cafetal OS antes de instalarlo</h2>
        </div>
        <p>
          Estas capturas fueron generadas desde la aplicación real con la base demostrativa.
          Puedes revisar la operación, inteligencia, comunidad y configuración del sistema.
        </p>
      </div>

      <div class="screenshot-filter" role="tablist" aria-label="Filtrar capturas por área">
        <button
          v-for="category in screenshotCategories"
          :key="category.id"
          type="button"
          role="tab"
          :aria-selected="activeCategory === category.id"
          :class="{ active: activeCategory === category.id }"
          @click="selectCategory(category.id)"
        >
          {{ category.label }}
          <span>{{ countCategory(category.id) }}</span>
        </button>
      </div>

      <div class="preview-shell screenshot-showcase">
        <div class="preview-browser-bar" aria-hidden="true">
          <span></span><span></span><span></span>
          <small>Cafetal OS · {{ selected.title }}</small>
        </div>

        <figure class="preview-figure">
          <button
            type="button"
            class="screenshot-main-button"
            :aria-label="`Ampliar captura: ${selected.title}`"
            @click="lightboxOpen = true"
          >
            <img :src="assetUrl(selected.src)" :alt="selected.alt" />
            <span class="screenshot-zoom"><BaseIcon name="search" :size="18" /> Ampliar</span>
          </button>

          <figcaption>
            <div>
              <span class="screenshot-category">{{ categoryLabel(selected.category) }}</span>
              <strong>{{ selected.title }}</strong>
            </div>
            <p>{{ selected.desc }}</p>
          </figcaption>
        </figure>
      </div>

      <div class="carousel-controls screenshot-controls">
        <button type="button" class="carousel-arrow" aria-label="Ver captura anterior" @click="prev">
          <BaseIcon name="chevron-left" :size="21" />
        </button>
        <p aria-live="polite">{{ currentIndex + 1 }} de {{ filteredScreenshots.length }}</p>
        <button type="button" class="carousel-arrow" aria-label="Ver captura siguiente" @click="next">
          <BaseIcon name="chevron-right" :size="21" />
        </button>
      </div>

      <div class="screenshot-thumbnails" aria-label="Galería de capturas">
        <button
          v-for="(image, index) in filteredScreenshots"
          :key="image.src"
          type="button"
          :class="{ active: index === currentIndex }"
          :aria-current="index === currentIndex ? 'true' : undefined"
          :aria-label="`Mostrar ${image.title}`"
          @click="currentIndex = index"
        >
          <img :src="assetUrl(image.src)" alt="" loading="lazy" />
          <span>{{ image.title }}</span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="image-lightbox gallery-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`Captura ampliada: ${selected.title}`"
        @click.self="lightboxOpen = false"
      >
        <button type="button" class="lightbox-close" aria-label="Cerrar captura" @click="lightboxOpen = false">
          <BaseIcon name="close" :size="24" />
        </button>
        <button type="button" class="lightbox-nav lightbox-prev" aria-label="Captura anterior" @click="prev">
          <BaseIcon name="chevron-left" :size="28" />
        </button>
        <figure>
          <img :src="assetUrl(selected.src)" :alt="selected.alt" />
          <figcaption><strong>{{ selected.title }}</strong><span>{{ selected.desc }}</span></figcaption>
        </figure>
        <button type="button" class="lightbox-nav lightbox-next" aria-label="Captura siguiente" @click="next">
          <BaseIcon name="chevron-right" :size="28" />
        </button>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { screenshotCategories, screenshots } from '@/data/screenshots'
import { site } from '@/config/site'
import { assetUrl } from '@/utils/assets'

const activeCategory = ref('all')
const currentIndex = ref(0)
const lightboxOpen = ref(false)

const filteredScreenshots = computed(() => (
  activeCategory.value === 'all'
    ? screenshots
    : screenshots.filter((image) => image.category === activeCategory.value)
))

const selected = computed(() => filteredScreenshots.value[currentIndex.value] || screenshots[0])

const selectCategory = (category) => {
  activeCategory.value = category
  currentIndex.value = 0
}

const countCategory = (category) => (
  category === 'all' ? screenshots.length : screenshots.filter((image) => image.category === category).length
)

const categoryLabel = (category) => screenshotCategories.find((item) => item.id === category)?.label || category

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % filteredScreenshots.value.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + filteredScreenshots.value.length) % filteredScreenshots.value.length
}

const onKeydown = (event) => {
  if (!lightboxOpen.value) return
  if (event.key === 'Escape') lightboxOpen.value = false
  if (event.key === 'ArrowRight') next()
  if (event.key === 'ArrowLeft') prev()
}

watch(filteredScreenshots, () => {
  if (currentIndex.value >= filteredScreenshots.value.length) currentIndex.value = 0
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
