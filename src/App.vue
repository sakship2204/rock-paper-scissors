<script setup lang="ts">
import GameZone from "./components/GameZone.vue";
import ScoreHeaderCard from "./components/ScoreHeaderCard.vue";
import Rules from "./components/Rules.vue";
import AdvancedSelection from "./components/AdvancedSelection.vue";
import { ref } from "vue";
import { Mode } from "./util.ts";

const currentScore = ref(0);

const currentMode = ref(Mode.Basic);

const toggleMode = () => {
  if (currentMode.value === Mode.Basic) currentMode.value = Mode.Advanced;
  else currentMode.value = Mode.Basic;
};
</script>

<template>
  <div class="app-container">
    <AdvancedSelection
      :mode="currentMode"
      class="push-right"
      @toggleMode="toggleMode"
    />
    <ScoreHeaderCard :score="currentScore" :mode="currentMode" />

    <GameZone :mode="currentMode" />

    <Rules :mode="currentMode" class="push-right" />
  </div>
</template>

<style lang="css" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.push-right {
  margin-left: auto;
}
</style>
