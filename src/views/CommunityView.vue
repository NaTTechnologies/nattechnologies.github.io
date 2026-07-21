<template>
  <main class="page-shell">
    <section class="page-hero community-page-hero"><div class="container narrow"><span class="section-kicker">Comunidad</span><h1>El café se construye en comunidad. El software también.</h1><p>Cafetal OS busca reunir conocimiento técnico y experiencia del campo para crear herramientas abiertas que sí respondan a la realidad del sector.</p><div class="hero-actions centered"><a :href="site.discussions" target="_blank" rel="noopener" class="btn btn-primary"><BaseIcon name="message" :size="19" /> Unirse a discusiones</a><a :href="site.github" target="_blank" rel="noopener" class="btn btn-secondary"><BaseIcon name="github" :size="19" /> Ver GitHub</a></div></div></section>
    <section class="section"><div class="container"><div class="section-heading centered-heading"><span class="section-kicker">Formas de participar</span><h2>Tu experiencia tiene un lugar</h2></div><div class="participation-grid"><article v-for="item in roles" :key="item.title"><span class="icon-tile"><BaseIcon :name="item.icon" :size="25" /></span><h3>{{ item.title }}</h3><p>{{ item.text }}</p><a :href="item.href" target="_blank" rel="noopener">{{ item.action }} <BaseIcon name="arrow-right" :size="16" /></a></article></div></div></section>
    <section class="section community-code"><div class="container community-code-grid"><div><span class="section-kicker">Principios</span><h2>Una comunidad útil, abierta y respetuosa</h2><p>Las decisiones deben partir de necesidades verificables, documentación clara y colaboración responsable.</p></div><ul><li v-for="principle in principles" :key="principle"><BaseIcon name="shield" :size="19" /> {{ principle }}</li></ul></div></section>
  </main>
</template>
<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import { site } from '@/config/site'
const roles = [
 {icon:'coffee', title:'Productores y técnicos', text:'Valida flujos, lenguaje y necesidades reales de la operación cafetalera.', action:'Compartir una idea', href:site.discussions},
 {icon:'code', title:'Desarrolladores', text:'Corrige errores, mejora rendimiento o construye nuevas capacidades.', action:'Revisar issues', href:site.issues},
 {icon:'sparkles', title:'Diseño y experiencia', text:'Ayuda a crear interfaces más accesibles, claras y adaptadas al campo.', action:'Proponer mejora', href:site.issues},
 {icon:'book', title:'Educación e investigación', text:'Produce guías, casos de estudio, traducciones y material formativo.', action:'Ver documentación', href:'#/docs'},
]
const principles = ['Respeto por el conocimiento del productor','Transparencia en decisiones y roadmap','Privacidad y control local de los datos','Documentación antes que dependencia','Tecnología sostenible y accesible']
</script>
