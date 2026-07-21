<template>
  <main class="page-shell">
    <section class="page-hero docs-page-hero">
      <div class="container narrow">
        <span class="section-kicker">Documentación</span>
        <h1>Aprende, implementa y contribuye</h1>
        <p>Una biblioteca técnica y funcional para usuarios, desarrolladores, implementadores y organizaciones que trabajan con Cafetal OS.</p>
        <label class="docs-search"><BaseIcon name="search" :size="20" /><span class="sr-only">Buscar documentación</span><input v-model="query" type="search" placeholder="Buscar manual, arquitectura, testing…" /></label>
      </div>
    </section>

    <section class="section docs-section">
      <div class="container docs-layout">
        <aside class="docs-sidebar"><strong>Contenido</strong><a v-for="group in visibleGroups" :key="group.id" :href="`#${group.id}`">{{ group.title }} <span>{{ group.docs.length }}</span></a></aside>
        <div class="docs-content">
          <section v-for="group in visibleGroups" :key="group.id" :id="group.id" class="docs-group">
            <div class="docs-group-heading"><span class="icon-tile"><BaseIcon :name="group.icon" :size="23" /></span><div><h2>{{ group.title }}</h2><p>{{ group.description }}</p></div></div>
            <div class="docs-card-grid">
              <router-link v-for="doc in group.docs" :key="doc.file" :to="`/docs/${slug(doc.file)}`" class="doc-card">
                <div><strong>{{ doc.title }}</strong><p>{{ doc.text }}</p></div><BaseIcon name="arrow-right" :size="18" />
              </router-link>
            </div>
          </section>
          <div v-if="visibleGroups.length === 0" class="empty-state"><span class="icon-tile"><BaseIcon name="search" :size="25" /></span><h2>No encontramos esa documentación</h2><p>Prueba con otra palabra o elimina el texto de búsqueda.</p><button type="button" class="btn btn-secondary" @click="query = ''">Limpiar búsqueda</button></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { documentationGroups } from '@/data/documentation'

const query = ref('')
const slug = (file) => file.replace(/\.md$/i, '').toLocaleLowerCase('es')
const visibleGroups = computed(() => {
  const term = query.value.trim().toLocaleLowerCase('es')
  if (!term) return documentationGroups
  return documentationGroups.map((group) => ({
    ...group,
    docs: group.docs.filter((doc) => `${doc.title} ${doc.text} ${doc.file}`.toLocaleLowerCase('es').includes(term)),
  })).filter((group) => group.docs.length)
})
</script>
