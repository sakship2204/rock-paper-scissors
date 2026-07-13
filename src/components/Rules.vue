<script lang="ts" setup>
import { Teleport } from "vue";
import { Mode, type TMode } from "../util.ts";

defineProps<{
  mode: TMode;
  showRules: boolean;
}>();

const emit = defineEmits<{
  "update:showRules": [value: boolean];
}>();
</script>

<template>
  <div>
    <button
      class="rule-btn app-wide-border"
      @click="emit('update:showRules', !showRules)"
    >
      Rules
    </button>

    <Teleport to=".app-container" v-if="showRules">
      <div class="modal">
        <div class="header">
          <button @click="emit('update:showRules', false)" class="close-btn">
            <img src="../../images/icon-close.svg" alt="" />
          </button>
        </div>
        <img
          :src="`../../images/${mode === Mode.Basic ? 'image-rules' : 'image-rules-bonus'}.svg`"
          alt=""
          class="rule-body"
        />
      </div>
    </Teleport>
  </div>
</template>

<style lang="css" scoped>
.rule-btn {
  background-color: transparent;
  color: #ccc;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.modal {
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%; /* Moves left edge to the middle of parent */
  transform: translate(-50%, -50%);
  z-index: 12;
  pointer-events: all;
  opacity: 1 !important;
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  width: fit-content;
  height: fit-content;
  background: transparent;
  border: none;
  cursor: pointer;
}

.rule-body {
  padding: 1.4rem;
}
</style>
