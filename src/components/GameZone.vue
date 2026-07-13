<script lang="ts" setup>
import { computed, type PropType } from "vue";
import { Mode, type TMode } from "../util";

const props = defineProps({
  mode: {
    type: String as PropType<TMode>,
    required: false,
    default: Mode.Basic,
  },
});

const ImagesMap = computed(() => {
  if (props.mode === Mode.Advanced) {
    return {
      baseImg: "bg-pentagon",
      cornerImages: [
        "icon-rock",
        "icon-paper",
        "icon-scissors",
        "icon-lizard",
        "icon-paper",
      ],
    };
  } else {
    return {
      baseImg: "bg-triangle",
      cornerImages: ["icon-paper", "icon-scissors", "icon-rock"],
    };
  }
});
</script>

<template>
  <div class="outer-container">
    <div
      class="game-zone-container"
      :class="mode === Mode.Basic ? '' : 'advanced'"
    ></div>
    <div
      v-for="(img, idx) in ImagesMap.cornerImages"
      :key="idx"
      class="image-outer"
    >
      <img
        :src="`../../images/${img}.svg`"
        alt=""
        :class="`img-${img}`"
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
  padding: 4rem;
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
  left: 10px;
  top: 10px;

  border-color: hsl(230, 89%, 62%);
}

.img-icon-paper:active {
  border-color: hsl(229, 64%, 46%);
}

.img-icon-scissors {
  right: 12px;
  top: 10px;

  border-color: hsl(39, 89%, 49%);
}

.img-icon-rock {
  right: 50%;
  transform: translateX(50%);
  bottom: 30px;

  border-color: hsl(349, 71%, 52%);
}
</style>
