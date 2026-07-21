<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'menu'"><path d="M4 6h16M4 12h16M4 18h16"/></template>
    <template v-else-if="name === 'close'"><path d="m6 6 12 12M18 6 6 18"/></template>
    <template v-else-if="name === 'chevron-down'"><path d="m6 9 6 6 6-6"/></template>
    <template v-else-if="name === 'chevron-left'"><path d="m15 18-6-6 6-6"/></template>
    <template v-else-if="name === 'chevron-right'"><path d="m9 18 6-6-6-6"/></template>
    <template v-else-if="name === 'arrow-right'"><path d="M5 12h14M13 6l6 6-6 6"/></template>
    <template v-else-if="name === 'external'"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></template>
    <template v-else-if="name === 'github'"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2"/></template>
    <template v-else-if="name === 'book'"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/><path d="M8 7h8M8 11h6"/></template>
    <template v-else-if="name === 'users'"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></template>
    <template v-else-if="name === 'code'"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></template>
    <template v-else-if="name === 'download'"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></template>
    <template v-else-if="name === 'shield'"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></template>
    <template v-else-if="name === 'coffee'"><path d="M6 8h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V8Z"/><path d="M17 10h1a3 3 0 0 1 0 6h-2M8 3v2M12 3v2M16 3v2M4 21h16"/></template>
    <template v-else-if="name === 'leaf'"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 4.8 20 3 20 3s-1.8 4.5-3.1 10.2A7 7 0 0 1 11 20Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6.94C9.33 12.96 12 12 16 12"/></template>
    <template v-else-if="name === 'database'"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></template>
    <template v-else-if="name === 'blocks'"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17.5 14v7M14 17.5h7"/></template>
    <template v-else-if="name === 'chart'"><path d="M3 3v18h18M7 16l4-5 3 3 5-7"/></template>
    <template v-else-if="name === 'globe'"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></template>
    <template v-else-if="name === 'message'"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/><path d="M8 9h8M8 13h5"/></template>
    <template v-else-if="name === 'bug'"><path d="m8 2 1.5 2M16 2l-1.5 2M9 9h6M10 14h4M12 4a4 4 0 0 1 4 4v8a4 4 0 0 1-8 0V8a4 4 0 0 1 4-4ZM4 10h4M16 10h4M5 18l3-2M19 18l-3-2"/></template>
    <template v-else-if="name === 'sparkles'"><path d="m12 3-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3ZM5 14l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2ZM18 13l-1.2 3.2L14 17.5l2.8 1.3L18 22l1.2-3.2 2.8-1.3-2.8-1.3L18 13Z"/></template>
    <template v-else-if="name === 'farm'"><path d="M3 21h18M5 21V10l7-5 7 5v11M8 21v-6h8v6M9 11h6"/><path d="M2 8l10-6 10 6"/></template>
    <template v-else-if="name === 'map'"><path d="m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3V6Z"/><path d="M8 3v15M16 6v15"/></template>
    <template v-else-if="name === 'harvest'"><path d="M12 21V8M7 21h10M7 8c0-3 2-5 5-5s5 2 5 5"/><path d="M8 11c-3 0-5 2-5 5 3 0 5-2 5-5ZM16 11c3 0 5 2 5 5-3 0-5-2-5-5Z"/></template>
    <template v-else-if="name === 'factory'"><path d="M3 21V10l6 3V9l6 3V6l6 4v11H3Z"/><path d="M7 17h2M12 17h2M17 17h2"/></template>
    <template v-else-if="name === 'package'"><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4V7ZM12 11v10"/></template>
    <template v-else-if="name === 'wallet'"><path d="M4 6h14a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h12"/><path d="M16 11h5v4h-5a2 2 0 0 1 0-4Z"/></template>
    <template v-else-if="name === 'link'"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/></template>
    <template v-else-if="name === 'brain'"><path d="M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 .5 5.5A3.5 3.5 0 0 0 8 17h1.5M14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1-.5 5.5A3.5 3.5 0 0 1 16 17h-1.5M9.5 4.5V20M14.5 4.5V20M9.5 9H7M14.5 9H17M9.5 14H7M14.5 14H17"/></template>
    <template v-else-if="name === 'cloud'"><path d="M17.5 19H6a4 4 0 1 1 1-7.9A5.5 5.5 0 0 1 17.4 9 5 5 0 0 1 17.5 19Z"/><path d="M8 22v-1M12 22v-1M16 22v-1"/></template>
    <template v-else-if="name === 'award'"><circle cx="12" cy="8" r="5"/><path d="m8.5 12-2 9 5.5-3 5.5 3-2-9"/></template>
    <template v-else-if="name === 'megaphone'"><path d="m3 11 15-6v14L3 13v-2Z"/><path d="M11.6 16.4 13 21H8l-1.4-6.2M21 9v6"/></template>
    <template v-else-if="name === 'graduation'"><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3 3 9 3 12 0v-5M22 9v6"/></template>
    <template v-else-if="name === 'check'"><path d="m5 12 4 4L19 6"/></template>
    <template v-else-if="name === 'copy'"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></template>
    <template v-else-if="name === 'search'"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></template>
    <template v-else-if="name === 'mail'"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></template>
    <template v-else-if="name === 'terminal'"><path d="m4 6 5 5-5 5M12 18h8"/></template>
    <template v-else-if="name === 'lock'"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></template>
    <template v-else-if="name === 'monitor'"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8M12 16v5"/></template>
    <template v-else-if="name === 'settings'"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.12 2.12-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20.3h-3v-.08a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-2.12-2.12.06-.06A1.7 1.7 0 0 0 7 15a1.7 1.7 0 0 0-1.56-1.03H5.3v-3h.14A1.7 1.7 0 0 0 7 9.94a1.7 1.7 0 0 0-.34-1.88L6.6 8l2.12-2.12.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 11.7 4.7V4.6h3v.1a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06L19.8 8l-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03h.14v3h-.14A1.7 1.7 0 0 0 19.4 15Z"/></template>
    <template v-else><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></template>
  </svg>
</template>

<script setup>
defineProps({
  name: { type: String, default: 'coffee' },
  size: { type: [Number, String], default: 24 },
})
</script>

<style scoped>
svg { width: v-bind("`${size}px`"); height: v-bind("`${size}px`"); flex: 0 0 auto; }
</style>
