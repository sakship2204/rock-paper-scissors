<script lang="ts" setup>
import type { PropType } from "vue";
import { Mode, type TMode } from "../util";

defineProps({
  mode: {
    type: String as PropType<TMode>,
    default: Mode.Basic,
  },
});

const emit = defineEmits(["toggleMode"]);
</script>

<template>
  <div class="mode-selection">
    Advanced Mode

    <button
      id="toggleBtn"
      class="toggle-btn"
      :class="mode === Mode.Advanced ? 'active' : ''"
      aria-pressed="false"
      @click="emit('toggleMode')"
    >
      <span class="slider-knob"></span>
    </button>
  </div>
</template>

<style lang="css" scoped>
.toggle-btn {
  width: 3rem;
  height: 1.5rem;
  position: relative;
  background-color: black;
  transition: background-color 0.3s ease;
  border-radius: 1rem;
  border: none;
}

.slider-knob {
  position: absolute;
  height: 1.35rem;
  width: 1.35rem;
  background-color: white;
  border-radius: 2rem;
  left: 2px;
  top: 2px;
  transition: background-color 0.3s ease;
}

.toggle-btn.active {
  background-color: green;
}

.toggle-btn.active .slider-knob {
  transform: translateX(1.5rem);
}

.mode-selection {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem;
}
</style>
