<template>
  <section id="features" class="section product-section">
    <div class="container">
      <div class="section-heading product-heading">
        <div>
          <span class="section-kicker">Producto</span>
          <h2>La cadena cafetalera en un solo espacio</h2>
        </div>
        <p>
          Cafetal OS reúne 17 módulos funcionales, un panel de resumen, acceso local y configuración.
          Cada área trabaja sobre datos locales y puede evolucionar de forma abierta.
        </p>
      </div>

      <div class="module-tabs" role="tablist" aria-label="Categorías de módulos">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          role="tab"
          :aria-selected="activeTab === category.id"
          :class="{ active: activeTab === category.id }"
          @click="activeTab = category.id"
        >
          <BaseIcon :name="category.icon" :size="18" />
          {{ category.nombre }}
          <span>{{ countByCategory(category.id) }}</span>
        </button>
      </div>

      <div class="module-card-grid" role="tabpanel">
        <router-link
          v-for="module in filteredModules"
          :key="module.id"
          :to="`/modulo/${module.id}`"
          class="module-card"
        >
          <span class="module-card-icon"><BaseIcon :name="module.icon" :size="25" /></span>
          <div>
            <h3>{{ module.nombre }}</h3>
            <p>{{ module.descripcion }}</p>
          </div>
          <BaseIcon name="arrow-right" :size="18" class="module-card-arrow" />
        </router-link>
      </div>

      <div class="section-footer-action">
        <router-link to="/modulos" class="btn btn-outline">
          Explorar todo el producto <BaseIcon name="arrow-right" :size="18" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { categories, modules } from '@/data/modules'

const activeTab = ref('operacion')
const filteredModules = computed(() => modules.filter((module) => module.categoria === activeTab.value))
const countByCategory = (categoryId) => modules.filter((module) => module.categoria === categoryId).length
</script>
