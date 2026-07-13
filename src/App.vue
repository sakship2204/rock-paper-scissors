<script setup lang="ts">
import GameZone from "./components/GameZone.vue";
import ScoreHeaderCard from "./components/ScoreHeaderCard.vue";
import Rules from "./components/Rules.vue";
import AdvancedSelection from "./components/AdvancedSelection.vue";
import { ref } from "vue";
import { Mode, type TMove } from "./util.ts";
import ResultScreen from "./components/ResultScreen.vue";

const currentScore = ref(0);
const showRules = ref(false);

const currentMode = ref(Mode.Basic);

const playerMove = ref<TMove | null>(null);

const computerMove = ref<TMove | null>(null);

const toggleMode = () => {
  if (currentMode.value === Mode.Basic) currentMode.value = Mode.Advanced;
  else currentMode.value = Mode.Basic;
};

const Moves: TMove[] = [
  {
    name: "rock",
    beats: [3, 4],
    index: 1,
  },
  {
    name: "paper",
    beats: [1, 5],
    index: 2,
  },
  {
    name: "scissors",
    beats: [2, 4],
    index: 3,
  },
  {
    name: "lizard",
    beats: [2, 5],
    index: 4,
  },
  {
    name: "spock",
    beats: [1, 3],
    index: 5,
  },
];

const handlePlayerMoved = (move: TMove) => {
  const numOfMoves = currentMode.value === Mode.Basic ? 3 : 5;

  const generateRandomMove = () => {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(numOfMoves);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  playerMove.value = move;

  const generatemove = generateRandomMove();

  computerMove.value = Moves.find((move) => move.index == generatemove) ?? null;

  if (computerMove.value?.index) {
    if (computerMove.value.index === playerMove.value.index) return 0;

    currentScore.value += playerMove.value.beats.includes(
      computerMove.value?.index,
    )
      ? 1
      : -1;
  }
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

    <ResultScreen
      v-if="playerMove && computerMove"
      :player-move="playerMove"
      :computer-move="computerMove"
      @play-again="
        playerMove = null;
        computerMove = null;
      "
      class="min-height"
    />
    <GameZone
      :mode="currentMode"
      :moves="Moves"
      @playedMove="handlePlayerMoved"
      v-else
    />

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

@media (min-width: 450px) {
  .push-right {
    margin-left: auto;
  }
}

.rules-open {
  position: relative;
}

.min-height {
  min-height: 440px;
}

.rules-open::before {
  content: "";
  position: fixed;
  inset: 0;
  background-color: rgba(13, 4, 4, 0.5);
  z-index: 10;
}
</style>
