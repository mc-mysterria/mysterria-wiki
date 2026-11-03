<!--
  COPIED FROM mysteria-frontend (the main site, www.mysterria.net):
    src/components/std/StdSectionHead.vue at origin/main 83290e3
  Keep it in sync with that file. One local change: the two `import './std.css'` /
  `import './std-gas.css'` lines are removed, since the wiki loads both sheets once, globally,
  before its own wiki.css (astro.config.mjs customCss), so the cascade order is fixed. Rendered server-side only, so it ships no JavaScript.
-->
<template>
  <!-- P2: a section's heading inside a page: the title, how many (optional), one action at the end. -->
  <div class="std-sh">
    <component :is="`h${level}`" :id="id" class="std-sh__title">
      {{ title }}
      <span v-if="count !== undefined" class="std-sh__count">{{ count }}</span>
    </component>
    <span class="std-sh__rule" aria-hidden="true"></span>
    <div v-if="$slots.action" class="std-sh__action"><slot name="action"/></div>
  </div>
</template>

<script setup lang="ts">


withDefaults(defineProps<{title: string; count?: number | string; level?: 2 | 3; id?: string}>(), {count: undefined, level: 2, id: undefined});
</script>
