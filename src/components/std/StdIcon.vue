<!--
  COPIED FROM mysteria-frontend (the main site, www.mysterria.net):
    src/components/std/StdIcon.vue at origin/main 83290e3
  Keep it in sync with that file: copy it over again rather than editing it here.
  Unchanged from the original. Rendered server-side only, so it ships no JavaScript.
-->
<template>
  <svg class="std-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path :d="ICONS[name]"/>
  </svg>
</template>

<script setup lang="ts">
import {ICONS, type IconName} from './icons';

defineProps<{name: IconName}>();
</script>
