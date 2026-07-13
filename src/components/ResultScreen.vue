<script lang="ts" setup>
import { computed, type PropType } from "vue";
import { moveIconUrls } from "../assets";
import type { TMove } from "../util";

const { playerMove, computerMove } = defineProps({
  playerMove: {
    type: Object as PropType<TMove>,
    required: true,
  },
  computerMove: {
    type: Object as PropType<TMove>,
    required: true,
  },
});

const emit = defineEmits(["playAgain"]);

const result = computed(() => {
  if (computerMove?.index === playerMove?.index) return "DRAW";

  return playerMove?.beats.includes(computerMove?.index || 0) ? "WIN" : "LOSE";
});
</script>

<template>
  <div class="outer-container">
    <span class="move-container">
      <div>You picked</div>
      <img
        :src="moveIconUrls[playerMove.name]"
        :class="playerMove ? `img-icon-${playerMove.name}` : ''"
      />
    </span>

    <div class="result-action">
      <div class="result">YOU {{ result }}</div>
      <button @click="emit('playAgain')">Play again</button>
    </div>
    <span class="move-container">
      <div>The house picked</div>
      <img
        :src="moveIconUrls[computerMove.name]"
        :class="computerMove ? `img-icon-${computerMove.name}` : ''"
      />
    </span>
  </div>
</template>

<style lang="css" scoped>
.outer-container {
  display: flex;
  align-items: center;
}

.outer-container img {
  border: 1rem solid;
  border-radius: 50%;
  background-color: white;
}

@media (min-width: 500px) {
  .outer-container {
    gap: 4rem;
  }

  .outer-container img {
    padding: 3.7rem 4rem;
  }
}

@media (max-width: 650px) {
  .outer-container {
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
  }

  .move-container {
    order: 1;
  }

  .result-action {
    order: 2;
    flex-basis: 100%;
    text-align: center;
  }

  .outer-container img {
    padding: 2rem 2.4rem;
  }
}

.outer-container .img-icon-paper {
  border-color: hsl(229, 64%, 46%);
}

.outer-container .img-icon-rock {
  border-color: hsl(347, 75%, 35%);
}

.outer-container .img-icon-scissors {
  border-color: hsl(28, 76%, 44%);
}

.outer-container .img-icon-lizard {
  border-color: hsl(261, 51%, 44%);
}

.outer-container .img-icon-spock {
  border-color: hsl(194, 58%, 42%);
}
.result {
  font-size: 2rem;
  font-weight: 700;
}
.result-action {
  text-align: center;
}
.result-action button {
  padding: 1.2rem 2rem;
  width: fit-content;
  cursor: pointer;
  margin-top: 2rem;
  font-size: 1rem;
}

.move-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
