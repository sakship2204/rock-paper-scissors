<script lang="ts" setup>
import { computed, type PropType } from "vue";
import { moveIconUrls } from "../assets";
import { Mode, type TMode, type TMove } from "../util";

const props = defineProps({
  mode: {
    type: String as PropType<TMode>,
    required: false,
    default: Mode.Basic,
  },
  moves: {
    type: Array as PropType<TMove[]>,
    required: true,
  },
});

const emit = defineEmits<{
  playedMove: [move: TMove];
}>();

const getMoveByIndex = (index: number) =>
  props.moves.find((move) => move.index === index);

const ImagesMap = computed(() => {
  const moveIndexes =
    props.mode === Mode.Advanced ? [1, 2, 3, 4, 5] : [1, 2, 3];

  const moves = moveIndexes.flatMap((index) => {
    const move = getMoveByIndex(index);

    if (!move) return [];

    return {
      imageClass: `icon-${move.name}`,
      imageUrl: moveIconUrls[move.name],
      move,
    };
  });

  if (props.mode === Mode.Advanced) {
    return {
      baseImg: "bg-pentagon",
      moves,
    };
  }

  return {
    baseImg: "bg-triangle",
    moves,
  };
});
</script>

<template>
  <div class="outer-container">
    <div
      class="game-zone-container"
      :class="mode === Mode.Basic ? '' : 'advanced'"
    />
    <div
      v-for="moveInfo in ImagesMap.moves"
      :key="moveInfo.move?.index"
      class="image-outer"
      @click="emit('playedMove', moveInfo.move)"
    >
      <img
        :src="moveInfo.imageUrl"
        :alt="moveInfo.move.name"
        :class="[
          `img-${moveInfo.imageClass}`,
          { advanced: mode === Mode.Advanced },
        ]"
        class="image-container"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.game-zone-container {
  background: url("../../images/bg-triangle.svg");
  background-repeat: no-repeat;

  padding: 11rem 11rem 8.5rem 11rem;
}

.game-zone-container.advanced {
  background: url("../../images/bg-pentagon.svg");
  background-repeat: no-repeat;
}

.outer-container {
  padding: 6.5rem;
  position: relative;
}

.image-container {
  position: absolute;
  border: 0.8rem solid;
  border-radius: 50%;
  padding: 1.7rem 2rem;
  background-color: white;
  cursor: pointer;
  opacity: 0.8;
}

.image-container:hover {
  opacity: 1;
}

.image-container:active {
  opacity: 1;
}

.img-icon-paper {
  left: 20px;
  top: 15px;

  border-color: hsl(230, 89%, 62%);
}

.img-icon-scissors {
  right: 45px;
  top: 15px;
  border-color: hsl(39, 89%, 49%);
}

.img-icon-rock {
  right: 53%;
  transform: translateX(50%);
  bottom: 55px;
  border-color: hsl(349, 71%, 52%);
}

.img-icon-paper.advanced {
  top: 45%;
  transform: translateY(-50%);
  left: 70%;
}

.img-icon-spock.advanced {
  top: 45%;
  transform: translateY(-50%);
  left: 2px;
  border-color: hsl(189, 59%, 53%);
}

.img-icon-lizard.advanced {
  bottom: 18px;
  left: 15%;
  border-color: hsl(261, 73%, 60%);
}

.img-icon-scissors.advanced {
  top: 10px;
  right: 50%;
  transform: translateX(50%);
}

.img-icon-rock.advanced {
  right: 35%;
  transform: translateX(50%);
  bottom: 19px;
}

.img-icon-paper:active {
  border-color: hsl(229, 64%, 46%);
}

.img-icon-rock:active {
  border-color: hsl(347, 75%, 35%);
}

.img-icon-scissors:active {
  border-color: hsl(28, 76%, 44%);
}

.img-icon-lizard:active {
  border-color: hsl(261, 51%, 44%);
}

.img-icon-spock:active {
  border-color: hsl(194, 58%, 42%);
}
</style>
