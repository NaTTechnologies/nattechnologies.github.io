<template>
  <main class="page-shell modules-page">
    <section class="page-hero">
      <div class="container narrow">
        <span class="section-kicker">Producto completo</span>
        <h1>De la operación diaria a la inteligencia del café</h1>
        <p>
          Explora los 17 módulos funcionales, el panel de resumen, el acceso local y la configuración
          incluidos en Cafetal OS {{ site.version }}.
        </p>
      </div>
    </section>

    <section class="section modules-catalog-section">
      <div class="container">
        <div class="catalog-toolbar">
          <label class="search-field">
            <BaseIcon name="search" :size="19" />
            <span class="sr-only">Buscar módulo</span>
            <input v-model="search" type="search" placeholder="Buscar por nombre o función" />
          </label>

          <div class="category-filter" aria-label="Filtrar módulos por categoría">
            <button type="button" :class="{ active: !activeCat }" @click="activeCat = null">
              Todos <span>{{ modules.length }}</span>
            </button>
            <button
              v-for="category in categories"
              :key="category.id"
              type="button"
              :class="{ active: activeCat === category.id }"
              @click="activeCat = category.id"
            >
              <BaseIcon :name="category.icon" :size="17" />
              {{ category.nombre }}
            </button>
          </div>
        </div>

        <p class="catalog-result" aria-live="polite">{{ filteredModules.length }} elementos encontrados</p>

        <div v-if="filteredModules.length" class="catalog-grid">
          <router-link
            v-for="module in filteredModules"
            :key="module.id"
            :to="`/modulo/${module.id}`"
            class="catalog-card"
          >
            <span class="module-card-icon"><BaseIcon :name="module.icon" :size="25" /></span>
            <div class="catalog-card-copy">
              <span>{{ categoryName(module.categoria) }}</span>
              <h2>{{ module.nombre }}</h2>
              <p>{{ module.descripcion }}</p>
            </div>
            <BaseIcon name="arrow-right" :size="19" class="catalog-card-arrow" />
          </router-link>
        </div>

        <div v-else class="empty-state">
          <span class="icon-tile"><BaseIcon name="search" :size="25" /></span>
          <h2>No encontramos ese módulo</h2>
          <p>Prueba con otro término o elimina el filtro de categoría.</p>
          <button type="button" class="btn btn-outline" @click="resetFilters">Limpiar filtros</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { categories, modules } from '@/data/modules'
import { site } from '@/config/site'

const search = ref('')
const activeCat = ref(null)

const filteredModules = computed(() => {
  const query = search.value.trim().toLocaleLowerCase('es')
  return modules.filter((module) => {
    const categoryMatches = !activeCat.value || module.categoria === activeCat.value
    const contentMatches = !query
      || `${module.nombre} ${module.descripcion} ${module.funciones.join(' ')}`
        .toLocaleLowerCase('es')
        .includes(query)
    return categoryMatches && contentMatches
  })
})

const categoryName = (categoryId) => categories.find((category) => category.id === categoryId)?.nombre || ''
const resetFilters = () => {
  search.value = ''
  activeCat.value = null
}
</script>
