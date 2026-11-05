<!--
  COPIED FROM mysteria-frontend (the main site, www.mysterria.net):
    src/components/std/StdTag.vue at origin/main 83290e3
  Keep it in sync with that file. One local change: the two `import './std.css'` /
  `import './std-gas.css'` lines are removed, since the wiki loads both sheets once, globally,
  before its own wiki.css (astro.config.mjs customCss), so the cascade order is fixed. Rendered server-side only, so it ships no JavaScript.
-->
<template>
  <!--
    T: a small label. Tones: neutral, acc (the card), ok, warn, bad. `solid` for the one that
    matters most in a group (you are here, needs your action). Status pills carry an icon
    (or a dot) as well as a colour, so colour is never the only cue.
  -->
  <span class="std-tag" :class="[`is-tone-${tone}`, {'std-tag--solid': solid}]">
    <span v-if="dot || (status && (false))" class="std-tag__dot" aria-hidden="true"></span>
    <StdIcon v-else-if="icon" :name="icon"/>
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import StdIcon from './StdIcon.vue';
import type {IconName} from './icons';


export type Tone = 'neutral' | 'acc' | 'ok' | 'warn' | 'bad';

withDefaults(defineProps<{
  label?: string;
  tone?: Tone;
  icon?: IconName;
  dot?: boolean;
  /** A status pill: its icon becomes a dot in the pill family (b). */
  status?: boolean;
  solid?: boolean;
}>(), {label: '', tone: 'neutral', icon: undefined});

</script>
