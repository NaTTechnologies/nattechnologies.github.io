<template>
  <main class="page-shell doc-reader-page">
    <section class="doc-reader-topbar">
      <div class="container"><router-link to="/docs" class="back-link"><BaseIcon name="chevron-left" :size="18" /> Documentación</router-link><a :href="`${site.github}/blob/main/docs/${document?.file}`" target="_blank" rel="noopener">Editar en GitHub <BaseIcon name="external" :size="16" /></a></div>
    </section>

    <section class="section doc-reader-section">
      <div v-if="loading" class="container narrow loading-state"><span class="loading-ring"></span><p>Cargando documentación…</p></div>
      <div v-else-if="error || !document" class="container narrow empty-state"><span class="icon-tile"><BaseIcon name="book" :size="25" /></span><h1>Documento no disponible</h1><p>{{ error || 'La dirección no corresponde a un documento del proyecto.' }}</p><router-link to="/docs" class="btn btn-primary">Volver a documentación</router-link></div>
      <div v-else class="container doc-reader-layout">
        <aside class="doc-index">
          <span>{{ document.groupTitle }}</span>
          <strong>{{ document.title }}</strong>
          <nav v-if="headings.length" aria-label="Contenido del documento"><a v-for="heading in headings" :key="heading.id" :href="`#${heading.id}`" :class="`level-${heading.level}`">{{ heading.text }}</a></nav>
        </aside>
        <article class="markdown-body" v-html="html"></article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import BaseIcon from '@/components/BaseIcon.vue'
import { getDocument, loadDocument } from '@/data/documentation'
import { site } from '@/config/site'

const route = useRoute()
const document = computed(() => getDocument(route.params.slug))
const html = ref('')
const headings = ref([])
const loading = ref(true)
const error = ref('')

function slugify(text) {
  return text.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')
}

async function renderDocument() {
  loading.value = true
  error.value = ''
  html.value = ''
  headings.value = []
  if (!document.value) { loading.value = false; return }
  try {
    const source = await loadDocument(document.value.file)
    const renderer = new marked.Renderer()
    renderer.heading = ({ tokens, depth }) => {
      const text = renderer.parser.parseInline(tokens)
      const plainText = text.replace(/<[^>]*>/g, '')
      const id = slugify(plainText)
      if (depth <= 3) headings.value.push({ id, text: plainText, level: depth })
      return `<h${depth} id="${id}">${text}</h${depth}>`
    }
    marked.setOptions({ gfm: true, breaks: false })
    html.value = DOMPurify.sanitize(marked.parse(source, { renderer }), { ADD_ATTR: ['target'] })
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : 'No se pudo abrir el documento.'
  } finally {
    loading.value = false
  }
}

watch(() => route.params.slug, renderDocument, { immediate: true })
</script>
