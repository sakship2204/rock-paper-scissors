<script setup lang="ts">
import { computed, type PropType } from "vue";
import { logoUrls } from "../assets";
import { Mode, type TMode } from "../util";

const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
  mode: {
    type: String as PropType<TMode>,
    required: false,
    default: Mode.Basic,
  },
});

const LogoImage = computed(() => {
  return logoUrls[props.mode];
});
</script>

<template>
  <div
    class="score-card-container app-wide-border"
    :class="mode === Mode.Advanced && 'advanced'"
  >
    <span>
      <img :src="LogoImage" alt="" class="logo" />
    </span>

    <span class="score-card">
      <div class="score-title">Score</div>
      <div class="score-value">{{ score }}</div>
    </span>
  </div>
</template>

<style lang="css" scoped>
.score-card-container {
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  min-width: 40rem;
}

@media (max-width: 750px) and (min-width: 500px) {
  .score-card-container {
    min-width: 25rem;
  }
}

@media (max-width: 500px) and (min-width: 380px) {
  .score-card-container {
    min-width: 20rem;
  }
}

@media (max-width: 380px) {
  .score-card-container {
    min-width: 17rem;
  }
}

.logo {
  height: 6.5rem;
}

.score-card-container.advanced .game-title {
  font-size: 1.3rem;
}

.game-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto;
}

.score-card {
  background-color: white;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
}

.score-card .score-title {
  color: hsl(229, 64%, 46%);
}

.score-card .score-value {
  color: hsl(229, 25%, 31%);
  font-size: 2.5rem;
}
</style>
