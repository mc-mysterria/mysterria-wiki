<!--
  COPIED FROM mysteria-frontend (the main site, www.mysterria.net):
    src/components/std/StdButton.vue at origin/main 83290e3
  Keep it in sync with that file. Local changes, so it renders on the wiki without the
  main site's app: no vue-router (the wiki has no router; `to` is gone and a link is a
  plain <a href>), and the gallery-only `force` prop is kept as is. Rendered server-side
  only (no client: directive), so it ships no JavaScript; the click handling only matters
  if a page ever hydrates it.
  The two `import './std.css'` / `import './std-gas.css'` lines are removed: the wiki loads both
  sheets once, globally, before its own wiki.css (astro.config.mjs customCss), so the cascade
  order is fixed.
-->
<template>
  <!--
    B: the one button. primary | secondary | quiet | danger | link, sm | md | lg; with an
    icon before or after the label, or icon-only (then `label` names it). An <a> with
    `href`, a <button> otherwise. Loading keeps the label (and the width) and puts a
    spinner where the icon was.
  -->
  <component
      :is="tag"
      v-bind="linkAttrs"
      class="std-btn std-focus"
      :class="[`std-btn--${variant}`, `std-btn--${size}`, {'std-btn--icon': iconOnly, 'std-btn--block': block, 'is-loading': loading}, force && `is-${force}`]"
      :aria-label="iconOnly ? label : undefined"
      :aria-busy="loading || undefined"
      @click="onClick"
  >
    <span v-if="loading" class="std-spin" aria-hidden="true"></span>
    <StdIcon v-else-if="icon" :name="icon"/>
    <span v-if="!iconOnly" class="std-btn__label"><slot>{{ label }}</slot></span>
    <StdIcon v-if="iconEnd && !iconOnly" :name="iconEnd"/>
    <span v-if="loading" class="std-sr" role="status">{{ loadingText }}</span>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import StdIcon from './StdIcon.vue';
import type {IconName} from './icons';


const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconName;
  iconEnd?: IconName;
  /** Icon-only: `label` becomes its accessible name. */
  iconOnly?: boolean;
  label?: string;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  block?: boolean;
  /** Gallery only: show a state without the pointer. */
  force?: 'hover' | 'focus' | 'active';
}>(), {
  variant: 'secondary', size: 'md', icon: undefined, iconEnd: undefined, label: '', loadingText: 'Loading',
  href: undefined, type: 'button', force: undefined,
});
const emit = defineEmits<{(e: 'click', event: MouseEvent): void}>();

const tag = computed(() => (props.href ? 'a' : 'button'));
const inert = computed(() => props.disabled || props.loading);

const linkAttrs = computed(() => {
  if (props.href) {
    return {
      href: props.href,
      target: props.external ? '_blank' : undefined,
      rel: props.external ? 'noopener noreferrer' : undefined,
      'aria-disabled': inert.value || undefined,
      tabindex: props.disabled ? -1 : undefined,
    };
  }
  // a busy button stays focusable (aria-disabled) so focus isn't lost while it works
  return {type: props.type, disabled: props.disabled, 'aria-disabled': props.loading || undefined};
});

function onClick(event: MouseEvent) {
  if (inert.value) {
    event.preventDefault();
    return;
  }
  emit('click', event);
}
</script>
