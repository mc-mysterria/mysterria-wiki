<!--
  COPIED FROM mysteria-frontend (the main site, www.mysterria.net):
    src/components/std/StdChip.vue at origin/main 83290e3
  Keep it in sync with that file. Local changes: no vue-router (`href` renders an <a>,
  otherwise a <button>), and extra attributes (id, data-*, aria-*) fall through to the
  root as in any Vue component. Rendered server-side only, so it ships no JavaScript;
  the wiki header wires its two chips (theme, language) with a few lines of inline script.
  The two `import './std.css'` / `import './std-gas.css'` lines are removed: the wiki loads both
  sheets once, globally, before its own wiki.css (astro.config.mjs customCss), so the cascade
  order is fixed.
-->
<template>
  <!--
    H: a control in the header bar. Every one is the same height, radius and hover: the
    balance, language, theme, notifications (with a count), the user, log out, sign in and
    the server address. `solid` is the one accent control (sign in).
  -->
  <component
      :is="href ? 'a' : 'button'"
      :href="href"
      :type="href ? undefined : 'button'"
      class="std-chip std-focus"
      :class="[{'std-chip--icon': iconOnly, 'std-chip--solid': solid, 'std-chip--block': block}, force && `is-${force}`]"
      :aria-label="iconOnly ? (badge ? `${label}, ${badge} ${badgeLabel}` : label) : undefined"
  >
    <span v-if="status" class="std-chip__status" aria-hidden="true"></span>
    <StdIcon v-if="icon" :name="icon" :class="{'std-chip__lead': lead}"/>
    <span v-if="!iconOnly && (label || $slots.default)"><slot>{{ label }}</slot></span>
    <span v-if="avatar" class="std-chip__avatar" aria-hidden="true">{{ avatar }}</span>
    <StdIcon v-if="caret" name="chevron-down" class="std-chip__caret"/>
    <span v-if="badge" class="std-chip__badge">{{ badge }}<span class="std-sr"> {{ badgeLabel }}</span></span>
  </component>
</template>

<script setup lang="ts">
import StdIcon from './StdIcon.vue';
import type {IconName} from './icons';


withDefaults(defineProps<{
  label?: string;
  icon?: IconName;
  /** The icon in the accent (the balance's mark). */
  lead?: boolean;
  iconOnly?: boolean;
  solid?: boolean;
  caret?: boolean;
  /** A letter or two for the avatar disc. */
  avatar?: string;
  /** A count over the corner (unread notifications). */
  badge?: string | number;
  badgeLabel?: string;
  /** A live dot before the label (the server is up). */
  status?: boolean;
  /** Full width at the touch size (the drawer). */
  block?: boolean;
  href?: string;
  force?: 'hover' | 'focus' | 'active';
}>(), {label: '', icon: undefined, avatar: '', badge: undefined, badgeLabel: 'unread', href: undefined, force: undefined});

</script>
