<!--
  COPIED FROM mysteria-frontend (the main site, www.mysterria.net):
    src/components/std/StdCard.vue at origin/main 83290e3
  Keep it in sync with that file. Local changes: no vue-router (a card is a plain
  <a href>), and the title can be a heading level (`as`) so a grid of cards keeps the
  page outline. Rendered server-side only, so it ships no JavaScript.
  The two `import './std.css'` / `import './std-gas.css'` lines are removed: the wiki loads both
  sheets once, globally, before its own wiki.css (astro.config.mjs customCss), so the cascade
  order is fixed.
-->
<template>
  <!-- C4: a card that leads somewhere. The whole card is the link; its arrow answers the pointer. -->
  <a :href="href" class="std-card std-focus" :class="force && `is-${force}`">
    <span v-if="icon" class="std-card__icon" aria-hidden="true"><StdIcon :name="icon"/></span>
    <span>
      <component :is="as" class="std-card__title">{{ title }}</component>
      <span v-if="text" class="std-card__text">{{ text }}</span>
    </span>
    <StdIcon name="arrow-right" class="std-card__go"/>
  </a>
</template>

<script setup lang="ts">
import StdIcon from './StdIcon.vue';
import type {IconName} from './icons';


withDefaults(defineProps<{
  title: string;
  text?: string;
  icon?: IconName;
  href?: string;
  /** The title's element: a span (the original), or a heading in a landing grid. */
  as?: 'span' | 'h2' | 'h3' | 'h4';
  force?: 'hover' | 'focus' | 'active';
}>(), {text: '', icon: undefined, href: '#', as: 'span', force: undefined});
</script>
