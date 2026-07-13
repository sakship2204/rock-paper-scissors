<script setup lang="ts">
import GameZone from "./components/GameZone.vue";
import ScoreHeaderCard from "./components/ScoreHeaderCard.vue";
import Rules from "./components/Rules.vue";
import AdvancedSelection from "./components/AdvancedSelection.vue";
import { ref } from "vue";
import { Mode } from "./util.ts";

const currentScore = ref(0);
const showRules = ref(false);

const currentMode = ref(Mode.Basic);

const toggleMode = () => {
  if (currentMode.value === Mode.Basic) currentMode.value = Mode.Advanced;
  else currentMode.value = Mode.Basic;
};
</script>

<template>
  <div class="app-container" :class="{ 'rules-open': showRules }">
    <AdvancedSelection
      :mode="currentMode"
      class="push-right"
      @toggleMode="toggleMode"
    />
    <ScoreHeaderCard :score="currentScore" :mode="currentMode" />

    <GameZone :mode="currentMode" />

    <Rules
      v-model:showRules="showRules"
      :mode="currentMode"
      class="push-right"
    />
  </div>
</template>

<style lang="css" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.push-right {
  margin-left: auto;
}

.rules-open {
  position: relative;
}

.rules-open::before {
  content: "";
  position: fixed;
  inset: 0;
  background-color: rgba(13, 4, 4, 0.5);
  z-index: 10;
}
</style>
