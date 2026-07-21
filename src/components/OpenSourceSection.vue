<template>
  <section class="section section-dark">
    <div class="container split-heading">
      <div>
        <span class="section-kicker">Proyecto abierto</span>
        <h2>Software cafetalero que puede estudiarse, adaptarse y mejorar</h2>
      </div>
      <p>
        El repositorio oficial publica el código, la documentación, las pruebas y las decisiones
        comunitarias. Cafetaleros, técnicos, universidades y desarrolladores pueden participar.
      </p>
    </div>

    <div class="container value-grid">
      <article v-for="item in values" :key="item.title" class="value-card">
        <span class="icon-tile"><BaseIcon :name="item.icon" :size="25" /></span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <a :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener' : undefined">
          {{ item.link }} <BaseIcon name="arrow-right" :size="16" />
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
import { site } from '@/config/site'

const values = [
  {
    icon: 'code',
    title: 'Código público',
    text: `La versión ${site.version} está construida con Vue 3, Electron y SQL.js, con pruebas mediante Vitest y Playwright.`,
    link: 'Explorar el repositorio',
    href: site.github,
    external: true,
  },
  {
    icon: 'shield',
    title: 'Licencia MIT',
    text: 'Permite usar, estudiar, modificar y distribuir el software conservando el aviso de licencia.',
    link: 'Leer la licencia',
    href: `${site.github}/blob/main/LICENSE`,
    external: true,
  },
  {
    icon: 'book',
    title: 'Documentación sincronizada',
    text: 'Manual, arquitectura, IPC, modelo de datos, responsive, pruebas, compilación e identidad visual.',
    link: 'Abrir documentación',
    href: '#/docs',
    external: false,
  },
  {
    icon: 'users',
    title: 'Comunidad abierta',
    text: 'Los Issues, Discussions y Pull Requests conectan experiencia de campo con conocimiento tecnológico.',
    link: 'Participar',
    href: site.discussions,
    external: true,
  },
]
</script>
